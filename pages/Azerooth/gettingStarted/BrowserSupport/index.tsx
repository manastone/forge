import type { NextPage } from "next";
import { Fragment } from "react";
import Table from "../../../components/Table";

const AzeroothBrowserSupportStarted: NextPage = () => {
  const header = [{ name: "navigateur" }, { name: "status" }];
  const browserSupportList = [
    {
      navigateur: "Chromium (Chrome, Edge, Opera)",
      status: "Supported",
    },
    {
      navigateur: "Edge",
      status: "Supported",
    },
    {
      navigateur: "Firefox",
      status: "Supported",
    },
    {
      navigateur: "Safari 10+",
      status: "Supported",
    },
    {
      navigateur: "IE11/Safari 9",
      status: "Not supported",
    },
    {
      navigateur: "IE9 / IE10",
      status: "Not supported",
    },
  ];
  return (
    <Fragment>
      <h1>Prise en charge du navigateur</h1>
      Azerooth est un framework progressif qui tente de pousser le développement
      Web au niveau supérieur. Afin d&#39;accomplir au mieux cette tâche,
      certains sacrifices ont dû être faits en termes de prise en charge des
      anciennes versions d&#39;Internet Explorer. Il ne s&#39;agit pas d&#39;une
      liste exhaustive des navigateurs compatibles, mais des principaux ciblés.
      <h2>Navigateurs</h2>
      <Table header={header} data={browserSupportList}></Table>
    </Fragment>
  );
};

export default AzeroothBrowserSupportStarted;
