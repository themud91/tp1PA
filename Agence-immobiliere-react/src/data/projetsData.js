// les 12 projets immobiliers + donnees + ref aux img

// consigne: Données minimales pour les projets, chaque projet doit contenir :
// un identifiant unique
// un titre
// une ville ou un secteur
// un type 
// un statut 
// une courte description
// une information financiere ou de superficie
// une image

import LesErables from '../assets/projets/LesErables.jpg';
import BoiseNord from '../assets/projets/BoiseNord.jpg';
import Horizon from '../assets/projets/Horizon.jpg';
import RiviereBleue from '../assets/projets/RiviereBleue.jpg';
import IndustrielEst from '../assets/projets/IndustrielEst.jpg';
import Carrefour from '../assets/projets/Carrefour.jpg';
import VieuxPort from '../assets/projets/VieuxPort.jpg';
import Agricole from '../assets/projets/Agricole.jpg';
import LesAteliers from '../assets/projets/LesAteliers.jpg';
import DomaineCedres from '../assets/projets/DomaineCedres.jpg';
import TerrainAutoroute from '../assets/projets/TerrainAutoroute.jpg';
import LeSommet from '../assets/projets/LeSommet.jpg';

export const projets = [

    {
        id: 1,
        titre: "Résidence Les Érables",
        ville: "Laval",
        type: "résidentiel",
        statut: "en vente",
        description: "Complexe de condos modernes près du centre-ville.",
        prix: 350000,
        image: LesErables,
    },

    {
        id: 2,
        titre: "Terrain Boisé du Nord",
        ville: "Mirabel",
        type: "terrain",
        statut: "en développement",
        description: "Grand terrain à vocation résidentielle, proche des services.",
        prix: 180000,
        image: BoiseNord,
    },
    {
        id: 3,
        titre: "Tour Commerciale Horizon",
        ville: "Montréal",
        type: "commercial",
        statut: "en construction",
        description: "Immeuble de bureaux modernes au cœur du quartier des affaires.",
        prix: 4200000,
        image: Horizon,
    },
    {
        id: 4,
        titre: "Maisons de Ville Rivière-Bleue",
        ville: "Brossard",
        type: "résidentiel",
        statut: "vendu",
        description: "Ensemble de maisons de ville avec accès direct au parc riverain.",
        prix: 425000,
        image: RiviereBleue,
    },
    {
        id: 5,
        titre: "Terrain Industriel Est",
        ville: "Longueuil",
        type: "terrain",
        statut: "en vente",
        description: "Terrain zoné industriel, idéal pour entrepôt ou logistique.",
        prix: 950000,
        image: IndustrielEst,
    },
    {
        id: 6,
        titre: "Centre Commercial Le Carrefour",
        ville: "Québec",
        type: "commercial",
        statut: "en vente",
        description: "Espaces commerciaux à louer ou acheter dans un centre achalandé.",
        prix: 2800000,
        image: Carrefour,
    },
    {
        id: 7,
        titre: "Condos du Vieux-Port",
        ville: "Montréal",
        type: "résidentiel",
        statut: "en construction",
        description: "Condos de luxe avec vue sur le fleuve, finitions haut de gamme.",
        prix: 610000,
        image: VieuxPort,
    },
    {
        id: 8,
        titre: "Terrain Agricole Converti",
        ville: "Saint-Jérôme",
        type: "terrain",
        statut: "vendu",
        description: "Ancien terrain agricole reconverti pour développement résidentiel.",
        prix: 275000,
        image: Agricole,
    },
    {
        id: 9,
        titre: "Plaza Les Ateliers",
        ville: "Sherbrooke",
        type: "commercial",
        statut: "en développement",
        description: "Plaza commerciale multi-locataires en phase de planification.",
        prix: 1650000,
        image: LesAteliers,
    },
    {
        id: 10,
        titre: "Domaine des Cèdres",
        ville: "Terrebonne",
        type: "résidentiel",
        statut: "en vente",
        description: "Maisons unifamiliales dans un quartier familial paisible.",
        prix: 495000,
        image: DomaineCedres,
    },
    {
        id: 11,
        titre: "Terrain Commercial Autoroute 40",
        ville: "Repentigny",
        type: "terrain",
        statut: "en vente",
        description: "Terrain stratégique en bordure d'autoroute, fort potentiel commercial.",
        prix: 720000,
        image: TerrainAutoroute,
    },
    {
        id: 12,
        titre: "Édifice à Bureaux Le Sommet",
        ville: "Gatineau",
        type: "commercial",
        statut: "vendu",
        description: "Ancien édifice à bureaux rénové, entièrement loué.",
        prix: 3100000,
        image: LeSommet,
    },
];