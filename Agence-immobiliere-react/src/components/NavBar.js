// comme vue dans react-first-test\src\components\NavBar.js

import React from 'react';

import {
    Navbar,
    Container
}
    from 'react-bootstrap';

import LogoAgence from './LogoAgence';
import Menu from './Menu';
import styles from './NavBar.module.css';

export default function NavBar({ sectionActive, changerSection }) {
    return (
        <Navbar
            expand="lg"
            sticky="top"
            variant='dark'
            className={styles.navbar}>

            <Container>
                <Navbar.Brand
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        changerSection('accueil');
                    }}>

                    <LogoAgence />

                </Navbar.Brand>

                {/* style burger-bouton hamburger + menu pour mobile. Tout gere par bootstrap ici et pas par @media dans les css */}
                <Navbar.Toggle
                    aria-controls="main-navbar"
                    className={styles.toggle}
                />


                <Navbar.Collapse id="main-navbar">
                    <div className="ms-auto">
                        <Menu
                            sectionActive={sectionActive}
                            changerSection={changerSection}
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}