import { useState } from "react";
//import Accueil from "./components/Acceuil"; TYPO erreur
import Accueil from "./components/Accueil"



//test temporel 
import Projets from "./components/Projets";


function App() {
  const [message, setMessage] = useState(
    "Nous accompagnons nos clients dans leurs projets immobiliers."
  );

  const changerMessage = () => {
    setMessage("Découvrez bientôt nos projets immobiliers.");
  };

  return (

    //TEST 

    <Projets
    //erreur 2: titreSite n'existe pas, le nom correct est titre
    // titreSite="Agence Horizon"
    // titre="Agence Horizon"
    //message={message}

    // ici la sintaxys pour l'arrow function n'est pas correcte
    // onChanger={() => changerMessage}
    // correction:
    //onChanger={changerMessage}


    />
  );
}

export default App;