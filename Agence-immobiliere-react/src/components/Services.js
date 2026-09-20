// composant qui affiche les 3 services de l'agence (acquisition, financement, mise en marche). 
// Meme patternContainer/Row/Col (comme vu react-first-test\src\components\Contenu.js)
import { Container, Row, Col, Card } from 'react-bootstrap';

import styles from './Services.module.css';

export default function Services() {

    return (
        <Container className="py-5">

            <h2 className={`mb-4 ${styles.title}`}>Nos services</h2>

            <Row className="g-4">

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Acquisition de terrains</Card.Title>
                            <Card.Text>
                                Identification et achat de terrains a fort potentiel de
                                developpement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Financement de projets</Card.Title>
                            <Card.Text>
                                Financement et accompagnement des projets immobiliers
                                residentiels et commerciaux.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mise en marche et vente</Card.Title>
                            <Card.Text>
                                Commercialisation et vente des proprietes une fois les projets
                                completes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    );
}