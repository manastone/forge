import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";

const AzeroothFloatStyles: NextPage = () => {
  return (
    <Fragment>
      <h1>Float</h1>
      Applique un float personnalisé sur n&#39;importe quel point d&#39;arrêt
      avec des utilitaires flottants réactifs.
      <h3>Utilisation</h3>
      Basculez facilement un float avec une classe :
      <PreviewCode>
        <div className="float-left">Float left on all viewport sizes</div>
        <div className="float-right">Float right on all viewport sizes</div>

        <div className="float-none">Don&#39;t float on all viewport sizes</div>
      </PreviewCode>
      Voici une liste de toutes les classes de support disponibles :
      <ul>
        <li>
          <b>.float-left</b>
        </li>
        <li>
          <b>.float-start</b>
        </li>
        <li>
          <b>.float-end</b>
        </li>
        <li>
          <b>.float-none</b>
        </li>
        <li>
          <b>.float-sm-left</b>
        </li>
        <li>
          <b>.float-sm-right</b>
        </li>
        <li>
          <b>.float-sm-start</b>
        </li>
        <li>
          <b>.float-sm-end</b>
        </li>
        <li>
          <b>.float-sm-none</b>
        </li>
        <li>
          <b>.float-md-left</b>
        </li>
        <li>
          <b>.float-md-right</b>
        </li>
        <li>
          <b>.float-md-start</b>
        </li>
        <li>
          <b>.float-md-end</b>
        </li>
        <li>
          <b>.float-md-none</b>
        </li>
        <li>
          <b>.float-lg-left</b>
        </li>
        <li>
          <b>.float-lg-right</b>
        </li>
        <li>
          <b>.float-lg-start</b>
        </li>
        <li>
          <b>.float-lg-end</b>
        </li>
        <li>
          <b>.float-lg-none</b>
        </li>
        <li>
          <b>.float-xl-left</b>
        </li>
        <li>
          <b>.float-xl-right</b>
        </li>
        <li>
          <b>.float-xl-start</b>
        </li>
        <li>
          <b>.float-xl-end</b>
        </li>
        <li>
          <b>.float-xl-none</b>
        </li>
      </ul>
    </Fragment>
  );
};

export default AzeroothFloatStyles;
