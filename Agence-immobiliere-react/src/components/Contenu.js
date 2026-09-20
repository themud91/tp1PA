// comme vue dans react-first-test\src\components\Contenu.js mais j'ai faite les elements (Services.js, APropos.js, NousJoindre.js) en tant que composants separees

//imports des elements
import Accueil from './Accueil';
import Projets from './Projets';
import Services from './Services';
import APropos from './APropos';
import NousJoindre from './NousJoindre';

export default function Contenu({
    sectionActive,
    changerSection
}) {



    return (
        <>

            {sectionActive === 'accueil' && (
                <Accueil changerSection={changerSection} />
            )}

            {sectionActive === 'projets' && (
                <Projets />
            )}

            {sectionActive === 'services' && (
                <Services />
            )}

            {sectionActive === 'apropos' && (
                <APropos />
            )}

            {sectionActive === 'nousjoindre' && (
                <NousJoindre />
            )}

        </>
    );
}