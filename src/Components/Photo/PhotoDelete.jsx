import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'
const PhotoDelete = ( {id} ) => {

    const {request, loading} = useFetch();

    async function handleClick() {
        if(window.confirm("Tem certeza que deseja apagar?")) {
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);
            if(response.ok) window.location.reload();
            }
    }

  return (
    <>
        {loading ? (
        <button className={styles.delete} disable>Deletar</button>
        ):(
        <button className={styles.delete} onClick={handleClick}>Deletar</button> 
        )}
    </>
  )
}

export default PhotoDelete