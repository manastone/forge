import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";

// sources
import { structure } from "./data/structure";
import { darklight } from "./data/darklight";
import { colordefault } from "./data/colordefault";
import { customcolor } from "./data/customcolor";

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
      <b>azerooth.ts</b>. Ensuite envoyer le en props <code>theme</code> sur le
      module <b>App</b> et le tour est joué.
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
      Par défaut, Azerooth a un thème standard appliqué à tous les composants.
      <PreviewCode code={colordefault} lang={"js"} />
      Cela peut être facilement changé. Passez simplement une propriété de thème
      au constructeur Azerooth. Vous pouvez choisir de modifier toutes ou
      seulement certaines des propriétés du thème, les autres héritant de la
      valeur par défaut. Vous pôuvez aussi ajouter des clés afin de définire vos
      propres modèles.
      <PreviewCode code={customcolor} lang={"ts"} />
      <h3>Utilisation des clés et autres couleurs</h3>
      L&#34;ensemble des modules Azerooth hérite des couleurs du theme. vous
      pouvez ensuite suivant les props dispible sur charque module utiliser les
      clés du couleurs. lorsque vous avez une props <code>color</code> ou{" "}
      <code>background</code> vous pouvez y intégrer les couleurs suivant
      différente façon.
      <ul>
        <li>
          <code>color=&#34;primary&#34; color theming azerooth</code>
        </li>
        <li>
          <code>color=&#34;primary 0.3&#34;</code> pour avoir un effet de
          transparence
        </li>
        <li>
          <code>color=&#34;red&#34;</code> couleur html standard
        </li>
        <li>
          <code>color=&#34;red 0.7&#34;</code> couleur html standard avec
          transparence
        </li>
        <li>
          <code>color=&#34;#fffff&#34;</code> couleur hexa standard
        </li>
        <li>
          <code>color=&#34;#fffff 0.8&#34;</code> couleur hexa standard avec
          transparence
        </li>
        <li>
          <code>color=&#34;red V50&#34;</code> couleur Material Design
        </li>
        <li>
          <code>color=&#34;red V50 0.8&#34;</code> couleur Material Design avec
          transparence
        </li>
      </ul>
    </Fragment>
  );
};

export default AzeroothFeatureTheme;
