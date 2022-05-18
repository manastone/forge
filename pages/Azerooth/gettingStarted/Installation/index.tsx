import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import { installAzeroothByCLI, installToCLI } from "./data/cli";
import { installPackagePWA } from "./data/pwa";
import { installAzeroothByNpm, installAzeroothByYarn } from "./data/yarnnpm";

const AzeroothInstallationStarted: NextPage = () => {
  return (
    <Fragment>
      <h1>Installation</h1>
      Démarrez avec Azerooth, le framework React.js pour créer des applications
      riches en fonctionnalités et extrêmement rapides.
      <h2>Installation de la CLI de React ManaStone</h2>
      Si vous n&#39;avez pas encore créé un nouveau projet React.js à l&#39;aide
      de React CLI plugins , vous pouvez le faire en tapant :
      <PreviewCode code={installToCLI} lang={"sh"}></PreviewCode>
      Maintenant que vous avez un projet instancié, vous pouvez ajouter le
      framework Azerooth en utilisant la CLI.
      <PreviewCode code={installAzeroothByCLI} lang={"sh"}></PreviewCode>
      <h2>Via Yarn ou NPM</h2>
      Vous pouvez installer Azerooth sans passer par notre CLI via les services
      connu comme <b>yarn</b> ou <b>npm</b>
      <PreviewCode code={installAzeroothByNpm} lang={"sh"}></PreviewCode>
      <PreviewCode code={installAzeroothByYarn} lang={"sh"}></PreviewCode>
      <h3>PreRequis</h3>
      Pour que Azerooth fonctionne correctement sur votre projet vous devez{" "}
      <b>obligatoirement</b> installer les packages suivants :
      <ul>
        <li>
          <a
            href="https://styled-components.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            styled-components
          </a>
        </li>
      </ul>
      <h2>Utilisation avec PWA (Next.js)</h2>
      Si vous créez une nouvelle application avec React CLI plugins, vous avez
      la possibilité de sélectionner Progressive Web App (PWA) Support dans la
      première invite après avoir lancé react create my-app. Ce package peut
      également être installé dans des projets Vue CLI existants en saisissant
      la commande suivante :
      <PreviewCode code={installPackagePWA} lang={"sh"}></PreviewCode>
    </Fragment>
  );
};

export default AzeroothInstallationStarted;
