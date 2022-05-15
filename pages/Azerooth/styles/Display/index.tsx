import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import Table from "../../../components/Table";

const AzeroothDisplayStyles: NextPage = () => {
  const headerBreakpoints = [{ name: "screen" }, { name: "class" }];

  const dataBreakpoints = [
    {
      screen: "Caché sur tout",
      class: ".d-none",
    },
    {
      screen: "Masqué uniquement sur xs",
      class: ".d-none .d-sm-flex",
    },
    {
      screen: "Caché uniquement sur sm",
      class: ".d-sm-none .d-md-flex",
    },
    {
      screen: "Caché uniquement sur md",
      class: ".d-md-none .d-lg-flex",
    },
    {
      screen: "Caché uniquement sur lg",
      class: ".d-lg-none .d-xl-flex",
    },
    {
      screen: "Caché uniquement sur xl",
      class: ".d-xl-none",
    },
    {
      screen: "Visible sur tous",
      class: ".d-flex",
    },
    {
      screen: "Visible uniquement sur xs",
      class: ".d-flex .d-sm-none",
    },
    {
      screen: "Visible uniquement sur sm",
      class: ".d-none .d-sm-flex .d-md-none",
    },
    {
      screen: "Visible uniquement sur md",
      class: ".d-none .d-md-flex .d-lg-none",
    },
    {
      screen: "Visible uniquement sur lg",
      class: ".d-none .d-lg-flex .d-xl-none",
    },
    {
      screen: "Visible uniquement sur xl",
      class: ".d-none .d-xl-flex",
    },
  ];
  return (
    <Fragment>
      <h1>Display</h1>
      Les aides à l&#39;affichage vous permettent de contrôler l&#39;affichage
      du contenu. Cela inclut la visibilité conditionnelle en fonction de la
      fenêtre d&#39;affichage actuelle ou du type d&#39;affichage réel de
      l&#39;élément.
      <h3>Affichage</h3>
      Spécifiez la propriété <code>display</code>des éléments. Ces classes
      peuvent être appliquées à tous les points d&#39;arrêt de <b>xs</b> à{" "}
      <b>xl</b>. Lors de l&#39;utilisation d&#39;une classe de base,{" "}
      <code>{".d-{value}"}</code>, on en déduit qu&#39;il s&#39;agit de{" "}
      <code>{".d-${value}-xs"}</code>.<code>{".d-{value}"}</code> pour xs{" "}
      <code>{".d-{breakpoint}-{value}"}</code>pour <b>sm, md, lg, xl</b> La
      propriété de valeur est l&#39;une des suivantes :
      <ul>
        <li>
          <code>none</code>
        </li>
        <li>
          <code>inline</code>
        </li>
        <li>
          <code>inline-block</code>
        </li>
        <li>
          <code>block</code>
        </li>
        <li>
          <code>table</code>
        </li>
        <li>
          <code>table-cell</code>
        </li>
        <li>
          <code>table-row</code>
        </li>
        <li>
          <code>flex</code>
        </li>
        <li>
          <code>inline-flex</code>
        </li>
      </ul>
      <PreviewCode>
        <div
          className="pa-2 text-center d-inline"
          style={{ background: "red" }}
        >
          .d-inline
        </div>
        <div
          className="pa-2 text-center d-inline"
          style={{ background: "red" }}
        >
          .d-inline
        </div>
      </PreviewCode>
      <PreviewCode>
        <div className="pa-2 text-center d-block" style={{ background: "red" }}>
          .d-block
        </div>
        <div className="pa-2 text-center d-block" style={{ background: "red" }}>
          .d-block
        </div>
      </PreviewCode>
      <Table header={headerBreakpoints} data={dataBreakpoints}></Table>
      <h3>Afficher à l&#39;impression</h3>
      Vous pouvez également modifier la propriété d&#39;affichage lors de
      l&#39;impression.
      <ul>
        <li>
          <code>.d-print-none</code>
          <code>.d-print-inline</code>
          <code>.d-print-inline-block</code>
          <code>.d-print-block</code>
          <code>.d-print-table</code>
          <code>.d-print-table-row</code>
          <code>.d-print-table-cell</code>
          <code>.d-print-flex</code>
          <code>.d-print-inline-flex</code>
        </li>
      </ul>{" "}
      Les classes d&#39;utilitaires d&#39;impression peuvent également être
      combinées avec des utilitaires d&#39;affichage sans impression.
    </Fragment>
  );
};

export default AzeroothDisplayStyles;
