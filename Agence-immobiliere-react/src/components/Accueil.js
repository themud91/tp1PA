import { Container, Button } from "react-bootstrap";
// error typo Acceuil
// import "./Acceuil.css";
// correction:
import "./Accueil.css";

function Accueil({ titre, message, onChanger }) {
  return (
    <Container className="accueil">
      
      {/* error typo , dans le css la class s'appelle heros, correction dans le css */}
        <section className="hero">
        <h1 className="titre">{titre}</h1>

        <p className="description">
          {message}
        </p>

        <Button
          variant="dark"
          // error: la fonction onclick doit ete ecrit onClick c'est pour ca que le bouton ne marchait pas
          // onclick={onChanger}
          // correction:
          onClick={onChanger}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;