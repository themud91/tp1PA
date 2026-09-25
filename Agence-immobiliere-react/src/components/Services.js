// composant qui affiche les 3 services de l'agence (acquisition, financement, mise en marche). 
// Meme patternContainer/Row/Col (comme vu react-first-test\src\components\Contenu.js)
import { Container, Row, Col, Card } from 'react-bootstrap';

import styles from './Services.module.css';

const services = [
    {
        id: 'acquisition',
        titre: 'Acquisition de terrains',
        description: 'Identification et achat de terrains a fort potentiel de developpement.'
    },
    {
        id: 'financement',
        titre: 'Financement de projets',
        description: 'Financement et accompagnement des projets immobiliers residentiels et commerciaux.'
    },
    {
        id: 'mise-en-marche',
        titre: 'Mise en marche et vente',
        description: 'Commercialisation et vente des proprietes une fois les projets completes.'
    }
];


export default function Services() {


    //code repete fixed avec .map()

    return (
        <Container className="py-5">

            <h2 className={`mb-4 ${styles.title}`}>Nos services</h2>

            <Row className="g-4">

                {services.map((service) => (
                    <Col md={4} key={service.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{service.titre}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>

        </Container>
    );
}