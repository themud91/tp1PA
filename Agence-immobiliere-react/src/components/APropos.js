// composant qui presente l'agence (mission, historique, valeurs)
// meme pattern Container/Row/Col 

import { Container, Row, Col } from 'react-bootstrap';

export default function APropos() {

    return (

        <Container className="py-5">
            <h2 className="mb-4">A propos de nous</h2>
            <Row>
                <Col md={8}>
                    <p>
                        L'Agence Horizon est une agence financiere immobiliere qui acquiert des terrains, participe au financement et au developpement de projets immobiliers, puis met en marche et revend des proprietes residentielles ou commerciales.
                    </p>
                    <p>
                        Notre mission est d'accompagner nos clients a chaque etape de leurs projets immobiliers.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}