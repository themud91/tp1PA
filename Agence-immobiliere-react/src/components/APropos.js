// composant qui presente l'agence (mission, historique, valeurs)
// meme pattern Container/Row/Col 

import { Container, Row, Col } from 'react-bootstrap';
import styles from './APropos.module.css';
import agenceImg from '../assets/Agence.png';

export default function APropos() {

    return (

        <Container className="py-5">

            <h2 className={`mb-4 ${styles.title}`}>A propos de nous</h2>

            <Row>
                <Col md={8}>
                    <p className={styles.text}>
                        L'Agence Horizon est une agence financiere immobiliere qui acquiert des terrains, participe au financement et au developpement de projets immobiliers, puis met en marche et revend des proprietes residentielles ou commerciales.
                    </p>
                    <p className={styles.text}>
                        Notre mission est d'accompagner nos clients a chaque etape de leurs projets immobiliers.
                    </p>
                </Col>

                <Col md={4}>
                    <img src={agenceImg} alt="Agence Horizon" className={styles.image} />
                </Col>

            </Row>
        </Container>
    );
}