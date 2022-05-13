import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";

// sources
import { structure } from "./data/structure";
import { darklight } from "./data/darklight";

const AzeroothFeatureTheme: NextPage = () => {
  return (
    <Fragment>
      <h1>Configuration du thème</h1>
      Modifiez facilement les couleurs de votre application. Reconstruisez la
      feuille de style par défaut et personnalisez divers aspects du framework
      en fonction de vos besoins particuliers.
      <h3>Activation de la gestion de theme personnalisé</h3>
      <b>
        L&#39;exemple ce base sur un format <code>TypeScript</code> à vous de
        l&#39;adapter suivant vos besoins
      </b>
      Afin de pouvoir profiter pleinnement de la customization qu&#39;offre
      Azerooth, il sera nécessaire de créer un fichier de configuration. Pour
      cela nous recommandons de créer dans votre dossier <code>src</code> (sauf
      si vous utilisez next.js créer le à la racine du projet), un nouveau
      dossier nommé <code>plugins</code>. Créer un fichier nommé{" "}
      <b>azerooth.ts</b>.
      <PreviewCode code={structure} lang={"ts"} />
      <h3>Clair et sombre</h3>
      Azerooth prend en charge les variantes <b>light</b> et <b>dark</b> de la
      spécification <b>Material Design</b>. Cette désignation commence au
      composant d&#39;application racine <b>App</b> et est prise en charge par
      la majorité des composants. Par défaut, votre application utilisera le
      thème <b>light</b> , mais cela peut être facilement remplacé en ajoutant
      l&#39;option <b>dark</b> dans le service de thème.
      <PreviewCode code={darklight} lang={"ts"} />
      Lorsque vous désignez le theme comme clair ou foncé, tous ses enfants
      héritent et appliquent le même, sauf indication contraire. Vous pouvez
      changer la mode du theme grace à la fonction <code>setDarkMode()</code>.
      <h4>
        la fonction <code>setDarkMode</code> fonctionne soit sans paramètre et
        ce base sur le mode de base pour change le theme, soit via un boolean.
      </h4>
      Si vous voulez profiter du mode <b>dark</b> ou <b>light</b> suivant la
      configuration du navigateur vous pouvez utiliser la fonction{" "}
      <code>setMixedMode()</code> qui fonctionne de la même manière que{" "}
      <code>setDarkMode()</code>
      <h3>Personnalisation</h3>
    </Fragment>
  );
};

export default AzeroothFeatureTheme;
