import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";

const AzeroothOverflowStyles: NextPage = () => {
  return (
    <Fragment>
      <h1>Overflow</h1>
      Configurez la manière dont le contenu déborde lorsqu&#39;il sort des
      limites du conteneur.
      <h3>Comment ça fonctionne</h3>
      Spécifiez les éléments overflow, overflow-xou overflow-ypropriété. Ces
      classes peuvent être appliquées en utilisant le format suivant :
      <code>{"{overflow}-{value}"}</code>. Où le débordement fait référence au
      type : <code>overflow</code>, <code>overflow-x</code> ou{" "}
      <code>overflow-y</code> et la valeur peut être l&#39;une des suivantes :
      <code>auto</code>, <code>hidden</code>, ou <code>visible</code>. Voici une
      liste de propriétés:
      <ul>
        <li>
          <code>overflow-auto</code>
        </li>
        <li>
          <code>overflow-hidden</code>
        </li>
        <li>
          <code>overflow-visible</code>
        </li>
        <li>
          <code>overflow-x-hidden</code>
        </li>
        <li>
          <code>overflow-x-visible</code>
        </li>
        <li>
          <code>overflow-y-auto</code>
        </li>
        <li>
          <code>overflow-y-hidden</code>
        </li>
        <li>
          <code>overflow-y-visible</code>
        </li>
      </ul>
    </Fragment>
  );
};

export default AzeroothOverflowStyles;
