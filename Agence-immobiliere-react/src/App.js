import { useState } from "react";
//import Accueil from "./components/Acceuil"; TYPO erreur

import NavBar from "./components/NavBar";
import Contenu from "./components/Contenu";

import styles from "./App.module.css";

export default function App() {

  const [sectionActive, setSectionActive] = useState("accueil");

  return (
    <div className={styles.app}>

      <NavBar
        sectionActive={sectionActive}
        changerSection={setSectionActive}
      />

      <main>
        <Contenu
          sectionActive={sectionActive}
          changerSection={setSectionActive}
        />
      </main>

    </div>
  );
}