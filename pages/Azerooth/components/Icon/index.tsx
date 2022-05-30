import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import Table from "../../../components/Table";
import { mdAllCDN, mdCDN } from "./data/mdCDN";

const AzeroothIconModule: NextPage = () => {
  const headerApp = [
    { name: "name" },
    { name: "type" },
    { name: "default" },
    { name: "description" },
  ];

  const mdi = [
    {
      name: "color",
      type: "string",
      default: "undefined",
      description: `Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find a list of built-in classes on the colors page.`,
    },
    {
      name: "dense",
      type: "boolean",
      default: "false",
      description: "Makes icon smaller (20px)",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable the input",
    },
    {
      name: "large",
      type: "boolean",
      default: "false",
      description: "Makes the component large.",
    },
    {
      name: "left",
      type: "boolean",
      default: "false",
      description:
        "Applies appropriate margins to the icon inside of a button when placed to the left of another element or text",
    },
    {
      name: "right",
      type: "boolean",
      default: "false",
      description:
        "Applies appropriate margins to the icon inside of a button when placed to the right of another element or text",
    },
    {
      name: "size",
      type: "string | number",
      default: "undefined",
      description: "Specifies a custom font size for the icon",
    },
    {
      name: "small",
      type: "boolean",
      default: "false",
      description: "Makes the component small.",
    },
    {
      name: "xLarge",
      type: "boolean",
      default: "false",
      description: "Makes the component extra large.",
    },
    {
      name: "xSmall",
      type: "boolean",
      default: "false",
      description: "Makes the component  extra small.",
    },
    {
      name: "tag",
      type: "string",
      default: "'i'",
      description: "Specifies a custom tag to be used",
    },
  ];

  const mdCDNAPI = [
    {
      name: "sizeMd",
      type: "string | number",
      default: "24",
      description:
        "Ce base sur le CSS importer par le CDN de Google, vous avez le choix entre '18', '24', '36', '48'",
    },
    {
      name: "outlined",
      type: "boolean",
      default: "false",
      description:
        "Définit la forme de l'icone, attention il nécessaire d'avoir importer la bonne library pour que cela fonctionne",
    },
    {
      name: "filled",
      type: "boolean",
      default: "false",
      description:
        "Définit la forme de l'icone, attention il nécessaire d'avoir importer la bonne library pour que cela fonctionne",
    },
    {
      name: "rounded",
      type: "boolean",
      default: "false",
      description:
        "Définit la forme de l'icone, attention il nécessaire d'avoir importer la bonne library pour que cela fonctionne",
    },
    {
      name: "sharp",
      type: "boolean",
      default: "false",
      description:
        "Définit la forme de l'icone, attention il nécessaire d'avoir importer la bonne library pour que cela fonctionne",
    },
    {
      name: "twoTone",
      type: "boolean",
      default: "false",
      description:
        "Définit la forme de l'icone, attention il nécessaire d'avoir importer la bonne library pour que cela fonctionne",
    },
  ];
  return (
    <Fragment>
      <h1>Icon</h1>
      <h2>Material Design</h2>
      Avec <b>Icon</b> vous pouvez utiliser les CDN de google pour les fonts{" "}
      <a
        href="https://fonts.google.com/icons?icon.set=Material+Icons"
        target={"_blank"}
        rel="noreferrer"
      >
        Material Design Icon
      </a>
      . Pour utiliser les icones de Material Design vous devez utiliser les CDN
      suivant. Vous pouvez les retrouvez dans la{" "}
      <a
        href="https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web"
        target={"_blank"}
        rel="noreferrer"
      >
        documentation de Google Material Design
      </a>
      <PreviewCode code={mdCDN}></PreviewCode>
      <PreviewCode code={mdAllCDN}></PreviewCode>
      <h3>API</h3>
      <Table header={headerApp} data={mdCDNAPI} />
      <h2>API GLobal</h2>
      <Table header={headerApp} data={mdi} />
    </Fragment>
  );
};

export default AzeroothIconModule;
