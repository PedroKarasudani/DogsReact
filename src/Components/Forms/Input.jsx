import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, value, setValue, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
