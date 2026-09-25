// comme vue dans react-first-test\src\components\Menu.js

import { Nav } from 'react-bootstrap';
import styles from './Menu.module.css';

export default function Menu({
    sectionActive,
    changerSection
}) {

    const sections = [
        { id: 'accueil', label: 'Accueil' },
        { id: 'projets', label: 'Projets' },
        { id: 'services', label: 'Services' },
        { id: 'apropos', label: 'À propos' },
        { id: 'nousjoindre', label: 'Nous joindre' }
    ];

    // gestion onclick/visuel des sections 
    // modifie avec .map pour ne pas repetre le meme code
    return (
        <Nav className={styles.menu}>
            {sections.map((section) => (
                <Nav.Link
                    key={section.id}
                    href="#"
                    className={sectionActive === section.id
                        ? styles.active
                        : styles.link}
                    onClick={(event) => {
                        event.preventDefault();
                        changerSection(section.id);
                    }}
                >
                    {section.label}
                </Nav.Link>
            ))}
        </Nav>
    );
}