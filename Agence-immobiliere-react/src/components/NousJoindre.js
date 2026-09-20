// composant qui affiche les coordonnees de contact de l'agence
// meme pattern Container/Row/Col 

import { Container, Row, Col } from 'react-bootstrap';

export default function NousJoindre() {

    return (

        <Container className="py-5">

            <h2 className="mb-4">
                Nous joindre
            </h2>

            <Row>
                <Col md={8}>
                    <p>Adresse : 4eme rue Principale, La Pocatiere</p>
                    <p>Telephone : (111) 555-1234</p>
                    <p>Courriel : info@agencehorizon.com</p>
                </Col>
            </Row>

        </Container>
    );
}
