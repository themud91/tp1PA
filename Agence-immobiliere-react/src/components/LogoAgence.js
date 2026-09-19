import React from 'react';

import logo from '../assets/Logo.png';

import styles from './LogoAgence.module.css';

export default function LogoAgence() {

    return (
        <img
            src={logo}
            alt="Agence Horizon"
            className={styles.logo}
        />
    );
}