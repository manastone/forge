import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import Table from "../../../components/Table";
import { structure } from "./data/breakpoint";

const AzeroothFeatureBreakpoints: NextPage = () => {
  const headerBreakpoints = [
    { name: "appareil" },
    { name: "code" },
    { name: "description" },
    { name: "valeurs" },
  ];

  const dataBreakpoints = [
    {
      appareil: "Super petit",
      code: "xs",
      description: "Petit à grand téléphone",
      valeurs: "< 600px",
    },
    {
      appareil: "Petit",
      code: "sm",
      description: "Tablette petite à moyenne",
      valeurs: "600px > < 960px",
    },
    {
      appareil: "Moyen",
      code: "md",
      description: "Grande tablette à ordinateur portable",
      valeurs: "960px > < 1264px",
    },
    {
      appareil: "Grande",
      code: "lg",
      description: "Bureau",
      valeurs: "1264px > < 1904px",
    },
    {
      appareil: "Extra large",
      code: "xl",
      description: "4k et ultra large",
      valeurs: "> 1904px",
    },
  ];

  return (
    <Fragment>
      <h1>Les points d&#39;arrêt</h1>
      Avec Azerooth, vous pouvez contrôler divers aspects de votre application
      en fonction de la taille de la fenêtre. Ce service fonctionne en
      collaboration avecgrilleset d&#39;autres classes d&#39;assistance
      réactives.
      <Table header={headerBreakpoints} data={dataBreakpoints} />
      <PreviewCode code={structure}></PreviewCode>
    </Fragment>
  );
};

export default AzeroothFeatureBreakpoints;
