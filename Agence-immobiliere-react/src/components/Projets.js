//Compossant principale (avant Apps.js)

//imports
import { useState } from 'react';
import ProjetCard from './ProjetCard';
import { projets as projetsData } from '../data/projetsData';

function Projets() {
    const [projets, setProjets] = useState(projetsData);
    // appellee de ProjetCard.js 
    const onRetirerProjet = (id) => {
        setProjets(projets.filter((p) => p.id !== id));
    };

    return (
        //cont principal, parcour la liste des projets pour afficher une carte par projet (segun id), avec la fonction pour retirer les projets
        <div>
            {projets.map((p) => (
                <ProjetCard key={p.id} projet={p} onRetirerProjet={onRetirerProjet} />

                // OJO: agregar filtro (state filtr + ButtonGroup + variant condicional),
                // envolver el map en Row/Col de react-bootstrap, y mensaje Alert si la lista filtrada queda vacia

            ))}
        </div>
    );
}

export default Projets;