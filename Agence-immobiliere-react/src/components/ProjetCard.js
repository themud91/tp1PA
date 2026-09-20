// carte du projet, \react-first-test\src\components\ProgrammeCard.js

//imports
import {
    Card,
    Button,
    Badge
} from 'react-bootstrap';

import styles from './ProjetCard.module.css';

export default function ProjetCard({
    projet,
    onRetirerProjet
}) {

    return (

        <Card className={styles.projetCard}>
            <Card.Img variant="top" src={projet.image} className={styles.image} />
            <Card.Body>

                {/* Titre */}
                <Card.Title>
                    {projet.titre}
                </Card.Title>

                {/* Type */}
                <Badge
                    bg="light"
                    text="dark"
                    className={styles.badge}
                >
                    {projet.type}

                </Badge>


                {/* Ville + status */}
                <Card.Text
                    className={styles.info}
                >
                    {projet.ville}, {projet.statut}
                </Card.Text>

                {/* Description */}
                <Card.Text
                    className={styles.description}
                >
                    {projet.description}
                </Card.Text>

                {/* Prx */}
                <Card.Text
                    className={styles.prix}
                >
                    {projet.prix} $
                </Card.Text>

                {/* Retirer */}
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() =>
                        onRetirerProjet(projet.id)
                    }
                >
                    Retirer
                </Button>
            </Card.Body>
        </Card>
    );
}