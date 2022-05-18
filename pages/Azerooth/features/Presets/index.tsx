import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import { structure } from "./data/default";

const AzeroothFeaturePresets: NextPage = () => {
  return (
    <Fragment>
      <h1>Pre Configuration</h1>
      Pour la version 2 de Material Design, Google a créé Material Studies afin
      d&#39;explorer les limites de conception du monde réel à travers des
      applications fictives, chacune avec ses propres propriétés et cas
      d&#39;utilisation uniques. Les préréglages Azerooth intègrent ces études
      via des options de framework préconfigurées, des variables SASS et des
      styles personnalisés qui modifient instantanément l&#39;apparence de votre
      application.
      <h2>Préréglage par défaut</h2>
      <PreviewCode code={structure}></PreviewCode>
    </Fragment>
  );
};

export default AzeroothFeaturePresets;
