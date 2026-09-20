// composant qui affiche les coordonnees de contact de l'agence
// meme pattern Container/Row/Col 

import { Container, Row, Col } from 'react-bootstrap';

import styles from './NousJoindre.module.css';

export default function NousJoindre() {

    return (

        <Container className="py-5">

            <h2 className={`mb-4 ${styles.title}`}>
                Nous joindre
            </h2>

            <Row>
                <Col md={8}>
                    <p className={styles.text}>Adresse : 4eme rue Principale, La Pocatiere</p>
                    <p className={styles.text}>Telephone : (111) 555-1234</p>
                    <p className={styles.text}>Courriel : info@agencehorizon.com</p>
                </Col>
            </Row>

        </Container>
    );
}
