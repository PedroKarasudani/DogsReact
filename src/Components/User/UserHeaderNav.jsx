import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import MinhasFotos from '../../Assets/feed.svg?react'
import Estatisticas from '../../Assets/estatisticas.svg?react'
import AdicionarFoto from '../../Assets/adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'


const UserHeaderNav = () => {
    const [modile, setMobile] = React.useState(null)
    const {userLogout} = React.useContext(UserContext)
    const navigate = useNavigate();

    function handleLogout(){
      userLogout()
      navigate('/login');
    }

  return (
    <nav className={styles.nav}>
        <NavLink to='/conta' end><MinhasFotos/>{modile && "Minhas Fotos"}</NavLink>
        <NavLink to='/conta/estatisticas'><Estatisticas/>{modile && " Estatísticas"}</NavLink>
        <NavLink to='/conta/postar'><AdicionarFoto/>{modile && "Adicionar Foto"}</NavLink>
        <button onClick={handleLogout}><Sair/>{modile && "Sair"}</button>
    </nav>
  )
}

export default UserHeaderNav