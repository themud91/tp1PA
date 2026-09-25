import { Container, Button } from "react-bootstrap";
// error typo Acceuil
// import "./Acceuil.css";
// correction:
import "./Accueil.css";

function Accueil({ changerSection }) {
  return (
    <Container className="accueil">

      {/* error typo , dans le css la class s'appelle heros, correction dans le css */}
      <section className="hero">
        <h1 className="titre fs-2 fs-md-1">Agence Horizon</h1>
        <p className="description">
          Nous accompagnons nos clients dans leurs projets immobiliers.
        </p>

        <Button
          variant="dark"
          // error: la fonction onclick doit ete ecrit onClick c'est pour ca que le bouton ne marchait pas
          // onclick={onChanger}
          // correction:
          // onClick={onChanger}  
          // 2eme fix: le bouton navigue vers Projets au lieu de changer le message local
          onClick={() => changerSection('projets')}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;