// comme vue dans react-first-test\src\components\Menu.js

import { Nav } from 'react-bootstrap';
import styles from './Menu.module.css';

export default function Menu({
    sectionActive,
    changerSection
}) {

    // gestion onclick/visuel des sections 
    return (
        <Nav className={styles.menu}>

            {/* Accueil*/}
            <Nav.Link
                href="#"
                className={sectionActive === 'accueil'
                    ? styles.active
                    : styles.link}
                onClick={(event) => {
                    event.preventDefault();
                    changerSection('accueil');
                }}
            >
                Accueil
            </Nav.Link>

            {/* Projets  */}
            <Nav.Link
                href="#"
                className={sectionActive === 'projets'
                    ? styles.active
                    : styles.link}
                onClick={(event) => {
                    event.preventDefault();
                    changerSection('projets');
                }}
            >
                Projets
            </Nav.Link>

            {/* Services */}
            <Nav.Link
                href="#"
                className={sectionActive === 'services'
                    ? styles.active
                    : styles.link}
                onClick={(event) => {
                    event.preventDefault();
                    changerSection('services');
                }}
            >
                Services
            </Nav.Link>

            {/* A Propos */}
            <Nav.Link
                href="#"
                className={sectionActive === 'apropos'
                    ? styles.active
                    : styles.link}
                onClick={(event) => {
                    event.preventDefault();
                    changerSection('apropos');
                }}
            >
                À propos
            </Nav.Link>

            {/* Nous Joindre */}
            <Nav.Link
                href="#"
                className={sectionActive === 'nousjoindre'
                    ? styles.active
                    : styles.link}
                onClick={(event) => {
                    event.preventDefault();
                    changerSection('nousjoindre');
                }}
            >
                Nous joindre
            </Nav.Link>
        </Nav>
    );
}