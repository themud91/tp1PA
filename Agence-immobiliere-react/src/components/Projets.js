//Compossant principale (comme react-first-test\src\components\ListeProgrammes.js)

//imports
import {
    Row,
    Col,
    Button,
    ButtonGroup,
    Alert
} from 'react-bootstrap';

import { useState } from 'react';
import ProjetCard from './ProjetCard';
import { projets as projetsData } from '../data/projetsData';
import styles from './Projets.module.css';


// gerer affichage, filtre et retrait des projets
function Projets() {
    /* Etat = filtre */
    const [filtre, setFiltre] = useState('tous');

    /* Etat = list projets */
    const [projets, setProjets] = useState(projetsData);

    /* fonct changer filtre */
    const choisirFiltre = (nouveauFiltre) => {
        setFiltre(nouveauFiltre);
    };

    /* css */
    const variantFiltre = (valeur) => {
        return filtre === valeur
            ? 'primary'
            : 'outline-primary';
    };

    /* filter projet */

    const projetsAffiches = projets.filter(
        (projet) => {
            if (filtre === 'tous') {
                return true;
            }
            return projet.type === filtre;
        }
    );


    /* Retirer/supprimer un projet  */

    const onRetirerProjet = (id) => {
        const nouvelleListe = projets.filter(
            (projet) => projet.id !== id
        );
        setProjets(nouvelleListe);

    };


    /* affichage (html wrapper) + FILTERS (avec choisirFiltre()) + style responsiveness (bootstrap xs={12} (mobile) et md="auto" breakpoint ≥768px) */

    return (
        <div className={styles.wrapper}>

            <Row className="align-items-center mb-4 g-3">
                <Col xs={12} md="auto">
                    <h3 className={styles.title}>
                        Nos projets
                    </h3>
                </Col>
                <Col xs={12} md="auto">
                    <ButtonGroup>
                        <Button
                            variant={variantFiltre('tous')}
                            onClick={() => choisirFiltre('tous')}>
                            Tous
                        </Button>

                        <Button
                            variant={variantFiltre('résidentiel')}
                            onClick={() =>
                                choisirFiltre('résidentiel')}>
                            Résidentiel
                        </Button>

                        <Button
                            variant={variantFiltre('commercial')}
                            onClick={() =>
                                choisirFiltre('commercial')}>
                            Commercial
                        </Button>

                        <Button
                            variant={variantFiltre('terrain')}
                            onClick={() =>
                                choisirFiltre('terrain')}>
                            Terrain
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>


            {/* cas liste vide (aucun projet) */}

            {projetsAffiches.length === 0 && (

                <Alert
                    variant="warning"
                    className={styles.emptyMessage}>
                    Aucun projet à afficher
                    pour ce filtre.
                </Alert>

            )}


            {/* Map / props */}

            <Row className="g-4">
                {projetsAffiches.map((projet) => (
                    <Col
                        md={6}
                        lg={4}
                        key={projet.id}>
                        <ProjetCard
                            projet={projet}
                            onRetirerProjet={onRetirerProjet} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Projets;