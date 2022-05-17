import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import { structure } from "./data/azerooth";

const AzeroothFeatureGlobalConfig: NextPage = () => {
  return <Fragment>
      <h1>Configuration globale</h1>
      
      <b>AzeroothConfig</b> est un objet contenant des options de configuration globales pour modifier les options d&#39;amorçage.
      Cette objet n&#39;est pas créé par d"faut.

        <h2>Création du fichier</h2>
        Nous recommandons de créer un fichier dans un dossier à la racine de votre projet ou dans le dossier <code>src</code>.
        Voici notre configuration recommandé:
        <code>src/plugins/azerooth.ts</code>
        <PreviewCode code={structure}></PreviewCode>
  </Fragment>;
};

export default AzeroothFeatureGlobalConfig;
