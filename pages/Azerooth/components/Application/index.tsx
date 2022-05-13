import { Typography } from "azerooth";
import type { NextPage } from "next";
import { Fragment } from "react";

import PreviewCode from "../../../components/PreviewCode";
import Table from "../../../components/Table";
import { structureExample } from "./sample";

const AzeroothAppModule: NextPage = () => {
  const headerApp = [
    { name: "name" },
    { name: "type" },
    { name: "default" },
    { name: "description" },
  ];

  const dataApp = [
    {
      name: "theme",
      type: "object",
      default: "azerooth default Theme",
      description:
        "Par défaut Azerooth possède sont propre thème par défaut, il prend en charge nativement le système (dark /light), vous pouvez créer le votre et l'importer en suivant cette page",
    },
  ];

  return (
    <Fragment>
      <Typography is="h1">Application</Typography>
      <Typography is="body-1">
        Dans Azerooth, le composant <b>App</b> et l&#39;accessoire
        d&#39;application sur des composants tels que NavigationDrawer, AppBar,
        Footer etc...Il aident à démarrer votre application avec le
        dimensionnement approprié autour du composant avec <b>Main</b>. Cela
        vous permet de créer des interfaces vraiment uniques sans avoir à gérer
        le dimensionnement de votre mise en page. Le composant <b>App</b> est{" "}
        <b>OBLIGATOIRE</b> pour toutes les applications. Il s&#39;agit du point
        de montage de nombreux composants et fonctionnalités de Azerooth et
        garantit qu&#39;il propage les variante d&#39;application par défaut (
        theming ) aux composants enfants et assure également une prise en charge
        appropriée entre navigateurs pour certains événements de clic dans des
        navigateurs comme Safari. <b>App</b> ne doit être rendu qu&#39;une seule
        fois dans votre application.
      </Typography>
      <Typography is="h3">API</Typography>

      <div>
        <p>App</p>
        <Table header={headerApp} data={dataApp} />
      </div>
      <Typography is="h3">Balisage d&#39;application par défaut</Typography>
      <Typography is="body-1">
        Ceci est un exemple du balisage d&#39;application par défaut pour
        Azerooth. Vous pouvez placer vos éléments de mise en page n&#39;importe
        où, tant que vous initialiser le composant <b>App</b>. Le composant clé
        pour faire fonctionner le contenu de votre page avec les éléments de
        mise en page est <b>Main</b>. Le composant <b>Main</b> sera dimensionné
        de manière dynamique en fonction de la structure de vos composants
        d&#39;application désignés. Vous pouvez utiliser des combinaisons de
        tout ou une partie des composants ci-dessus, y compris BottomNavigation.
        Lors de l&#39;utilisation{" "}
        <a href={"https://reactrouter.com/"} target={"_blank"} rel="noreferrer">
          <b>react-router-dom</b>
        </a>{" "}
        il est recommandé de placer vos vues à l&#39;intérieur <b>Main</b>.
        <PreviewCode code={structureExample} />
      </Typography>
    </Fragment>
  );
};

export default AzeroothAppModule;
