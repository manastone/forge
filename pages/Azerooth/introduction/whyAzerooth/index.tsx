import type { NextPage } from "next";
import { Fragment } from "react";
import Table from "../../../components/Table";

const AzeroothWhyAzeroothIntroduction: NextPage = () => {
  const header = [
    { name: "caracteristique" },
    { name: "azerooth" },
    { name: "mui" },
  ];

  const dataList = [
    {
      caracteristique: "Accompagnement commercial et entreprise",
      azerooth: "Oui",
      mui: "Oui",
    },
    {
      caracteristique: "Soutien à long terme",
      azerooth: "Oui",
      mui: "Oui",
    },
    {
      caracteristique: "Support et Assistance via Chat / Mail / Vocal (FR)",
      azerooth: "Gratuit",
      mui: "Payant",
    },
    {
      caracteristique: "Cadence de correctif et update",
      azerooth: "Hebdomadaire",
      mui: "Bihebdomadaire",
    },
    {
      caracteristique: "Tous les composants sont gratuits",
      azerooth: "Oui",
      mui: "Non",
    },
    {
      caracteristique: "Natif React.js",
      azerooth: "Oui",
      mui: "Non",
    },
  ];
  return (
    <Fragment>
      <h1>Introduction</h1>
      Apprenez-en plus sur ce qu&#39;est Azerooth, comment créer une application
      à partir de zéro, parcourir les références d&#39;API, des exemples de
      code, des didacticiels, etc.
      <h2>Commencer</h2>
      La façon la plus simple d&#39;essayer Azerooth est de créer un projet
      sandbox avec notre CLI. Pour des options d&#39;installation
      supplémentaires telles que Next.js et React CRA , visitez la page{" "}
      <b>Installation</b> .<h2>Qu&#39;est-ce que Azerooth ?</h2>
      Azerooth est un framework d&#39;interface utilisateur complet construit
      sur React.js. L&#39;objectif du projet est de fournir aux développeurs les
      outils dont ils ont besoin pour créer des expériences utilisateur riches
      et attrayantes. Contrairement à d&#39;autres frameworks, Azerooth est
      conçu dès le départ pour être facile à apprendre et enrichissant à
      maîtriser avec des centaines de composants soigneusement conçus à partir
      des documentations Material Design. Azerooth adopte une première approche
      de conception mobile, ce qui signifie que votre application fonctionne
      immédiatement, que ce soit sur un téléphone, une tablette ou un ordinateur
      de bureau. Si vous êtes un développeur expérimenté et que vous souhaitez
      comparer Azerooth à d&#39;autres bibliothèques/frameworks, consultez notre
      tableau de comparaison.
      <h3>Comparons nous</h3>
      <Table header={header} data={dataList}></Table>
      <h2>Pourquoi Azerooth ?</h2>
      Azerooth est n&#39;est d&#39;une frustration de son créateur lorsqu&#39;il
      est arrivé sur <b>React.js</b>, plein de framework existe mais peu sont
      complet ou alors devienne paynt dès que l&#39;on veut profiter des
      fonctionnalité les plus poussé. De plus la complexiter reste accrue et
      souvent posse des problème de gestion dans le DOM. Bef il a ragé ! Puis au
      final il c&#39;est dit que essayer de créer un nouveau frameworkk en
      utilisant c&#39;est connaissance sur <b>React.js</b> et plus
      principalement <b>Vue.js</b> en partant de zéro sans aucune connaissance
      dans les packages npm et tout ce qui tourne autour. Azerooth est né!, Fan
      de Blizzard il a décider de faire mentions d&#39;un univers qu&#39;il aime
      tout en rapellant que tous commencer par configurer un mot de passe root
      (autre que root !). Merci à vous d&#39;utilisez et de m&#39;aider à faire
      évoluer Azerooth. ( Laurent Grimaldi )
    </Fragment>
  );
};

export default AzeroothWhyAzeroothIntroduction;
