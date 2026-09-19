// carte du projet, \react-first-test\src\components\ProgrammeCard.js

//imports
import {
    Card,
    Button,
    Badge
} from 'react-bootstrap';

//PENDIENTE terminar module.css
import styles from './ProjetCard.module.css';

export default function ProjetCard({
    projet,
    onRetirerProjet
}) {

    return (

        <Card className={styles.projetCard}>
            <Card.Img variant="top" src={projet.image} />
            <Card.Body>

                {/* TITRE */}
                <Card.Title>
                    {projet.titre}
                </Card.Title>

                {/* TYPE */}
                <Badge
                    bg="light"
                    text="dark"
                    className={styles.badge}
                >
                    {projet.type}

                </Badge>


                {/* VILLE ET STATUT */}
                <Card.Text
                    className={styles.info}
                >
                    {projet.ville}, {projet.statut}
                </Card.Text>

                {/* DESCRIPTION */}
                <Card.Text
                    className={styles.description}
                >
                    {projet.description}
                </Card.Text>

                {/* PRIX */}
                <Card.Text
                    className={styles.prix}
                >
                    {projet.prix} $
                </Card.Text>

                {/* ACTION */}
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