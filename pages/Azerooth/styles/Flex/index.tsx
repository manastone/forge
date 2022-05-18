import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";

const AzeroothFlexStyles: NextPage = () => {
  return (
    <Fragment>
      <h1>Flex</h1>
      Contrôlez la disposition des conteneurs flexibles avec alignement,
      justification et plus encore avec des utilitaires flexibles réactifs.
      <h3>Utilisation des flex</h3>À l&#39;aide d&#39;utilitaires{" "}
      <code>display</code>, vous pouvez transformer n&#39;importe quel élément
      en un conteneur flexbox transformant <b>des éléments enfants directs</b>{" "}
      en éléments flexibles. En utilisant des utilitaires de propriétés
      flexibles supplémentaires, vous pouvez personnaliser davantage leur
      interaction.
      <PreviewCode>
        <div className={"d-flex pa-2"}>
          <div>I&#39;m a flexbox container!</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div className={"d-inline-flex pa-2"}>
          <div>I&#39;m an inline flexbox container!</div>
        </div>
      </PreviewCode>
      Vous pouvez également personnaliser les utilitaires flexibles à appliquer
      en fonction de divers points d&#39;arrêt.
      <ul>
        <li>
          <b>.d-flex</b>
        </li>
        <li>
          <b>.d-inline-flex</b>
        </li>
        <li>
          <b>.d-sm-flex</b>
        </li>
        <li>
          <b>d-sm-inline-flex</b>
        </li>
        <li>
          <b>.d-md-inline-flex</b>
        </li>
        <li>
          <b>.d-lg-flex</b>
        </li>
        <li>
          <b>.d-lg-inline-flex</b>
        </li>
        <li>
          <b>.d-xl-inline-flex</b>
        </li>
      </ul>
      <h3>Flex direction</h3>
      Par défaut, <code>d-flex</code> s&#39;applique{" "}
      <code>flex-direction: row</code> et peut généralement être omis.
      Cependant, il peut y avoir des situations où vous devez le définir
      explicitement.
      <PreviewCode>
        <div className={"d-flex flex-row mb-6"}>
          <div className="pa-2"> Flex item 1</div>
          <div className="pa-2"> Flex item 2</div>
          <div className="pa-2"> Flex item 3</div>
        </div>
        <div className={"d-flex flex-row-reverse"}>
          <div className="pa-2"> Flex item 1</div>
          <div className="pa-2"> Flex item 2</div>
          <div className="pa-2"> Flex item 3</div>
        </div>
      </PreviewCode>
      Les classes utilitaires <code>flex-column</code> et{" "}
      <code>flex-column-reverse</code> peuvent être utilisées pour modifier
      l&#39;orientation du conteneur flexbox. Gardez à l&#39;esprit{" "}
      <b>qu&#39;IE11 et Safari</b> peuvent avoir des problèmes avec la direction
      des colonnes.
      <PreviewCode>
        <div className="d-flex flex-column mb-6">
          <div className="pa-2"> Flex item 1</div>
          <div className="pa-2"> Flex item 2</div>
          <div className="pa-2"> Flex item 3</div>
        </div>
        <div className="d-flex flex-column-reverse">
          <div className="pa-2"> Flex item 1</div>
          <div className="pa-2"> Flex item 2</div>
          <div className="pa-2"> Flex item 3</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour{" "}
      <code>flex-direction</code>.
      <ul>
        <li>
          <b>.flex-row</b>
        </li>
        <li>
          <b>.flex-row-reverse</b>
        </li>
        <li>
          <b>.flex-column</b>
        </li>
        <li>
          <b>.flex-column-reverse</b>
        </li>
        <li>
          <b>.flex-sm-row</b>
        </li>
        <li>
          <b>.flex-sm-row-reverse</b>
        </li>
        <li>
          <b>.flex-sm-column</b>
        </li>
        <li>
          <b>.flex-sm-column-reverse</b>
        </li>
        <li>
          <b>.flex-md-row</b>
        </li>
        <li>
          <b>.flex-md-row-reverse</b>
        </li>
        <li>
          <b>.flex-md-column</b>
        </li>
        <li>
          <b>.flex-md-column-reverse</b>
        </li>
        <li>
          <b>.flex-lg-row</b>
        </li>
        <li>
          <b>.flex-lg-row-reverse</b>
        </li>
        <li>
          <b>.flex-lg-column</b>
        </li>
        <li>
          <b>.flex-lg-column-reverse</b>
        </li>
        <li>
          <b>.flex-xl-row</b>
        </li>
        <li>
          <b>.flex-xl-row-reverse</b>
        </li>
        <li>
          <b>.flex-xl-column</b>
        </li>
        <li>
          <b>.flex-xl-column-reverse</b>
        </li>
      </ul>
      <h3>Flex justify</h3>
      Le <code>justify-content</code> paramètre flex peut être modifié à
      l&#39;aide des classes de justification flex. Cela modifiera par défaut
      les éléments de la boîte flexible sur <b>l&#39;axe des x</b> mais est
      inversé lors de l&#39;utilisation de <code>flex-direction: column</code>,
      modifiant <b>l&#39;axe des y</b>. Choisissez parmi <code>start</code> (par
      défaut du navigateur), <code>end</code>, <code>center</code>,{" "}
      <code>space-between</code> ou <code>space-around</code>.
      <PreviewCode>
        <div className="d-flex justify-start mb-6">
          <div className="pa-2"> justify-start</div>
          <div className="pa-2"> justify-start</div>
          <div className="pa-2"> justify-start</div>
        </div>
        <div className="d-flex justify-end mb-6">
          <div className="pa-2"> justify-end</div>
          <div className="pa-2"> justify-end</div>
          <div className="pa-2"> justify-end</div>
        </div>
        <div className="d-flex justify-center mb-6">
          <div className="pa-2"> justify-center</div>
          <div className="pa-2"> justify-center</div>
          <div className="pa-2"> justify-center</div>
        </div>
        <div className="d-flex justify-space-between mb-6">
          <div className="pa-2"> justify-space-between</div>
          <div className="pa-2"> justify-space-between</div>
          <div className="pa-2"> justify-space-between</div>
        </div>
        <div className="d-flex justify-space-around mb-6">
          <div className="pa-2"> justify-space-around</div>
          <div className="pa-2"> justify-space-around</div>
          <div className="pa-2"> justify-space-around</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour{" "}
      <code>justify-content</code>.
      <ul>
        <li>
          <b>.justify-start</b>
        </li>
        <li>
          <b>.justify-end</b>
        </li>
        <li>
          <b>.justify-center</b>
        </li>
        <li>
          <b>.justify-space-between</b>
        </li>
        <li>
          <b>.justify-space-around</b>
        </li>
        <li>
          <b>.justify-sm-start</b>
        </li>
        <li>
          <b>.justify-sm-end</b>
        </li>
        <li>
          <b>.justify-sm-center</b>
        </li>
        <li>
          <b>.justify-sm-space-between</b>
        </li>
        <li>
          <b>.justify-sm-space-around</b>
        </li>
        <li>
          <b>.justify-md-start</b>
        </li>
        <li>
          <b>.justify-md-end</b>
        </li>
        <li>
          <b>.justify-md-center</b>
        </li>
        <li>
          <b>.justify-md-space-between</b>
        </li>
        <li>
          <b>.justify-md-space-around</b>
        </li>
        <li>
          <b>.justify-lg-start</b>
        </li>
        <li>
          <b>.justify-lg-end</b>
        </li>
        <li>
          <b>.justify-lg-center</b>
        </li>
        <li>
          <b>.justify-lg-space-between</b>
        </li>
        <li>
          <b>.justify-lg-space-around</b>
        </li>
        <li>
          <b>.justify-xl-start</b>
        </li>
        <li>
          <b>.justify-xl-end</b>
        </li>
        <li>
          <b>.justify-xl-center</b>
        </li>
        <li>
          <b>.justify-xl-space-between</b>
        </li>
        <li>
          <b>.justify-xl-space-around</b>
        </li>
      </ul>
      <h3>Flex align</h3>
      Le paramètre flex <code>align-items</code> peut être modifié à l&#39;aide
      des classes flex align. Cela modifiera par défaut les éléments de la boîte
      flexible sur <b>l&#39;axe des y</b> mais est inversé lors de
      l&#39;utilisation de <code>flex-direction: column</code>, en modifiant{" "}
      <b>l&#39; axe des x</b>. Choisissez parmi <code>start</code>,{" "}
      <code>end</code>, <code>center</code>, <code>baseline</code> ou{" "}
      <code>stretch</code>(par défaut du navigateur).
      <PreviewCode>
        <div className="d-flex align-start mb-6" style={{ background: "grey" }}>
          <div className="pa-2">align-start</div>
          <div className="pa-2">align-start</div>
          <div className="pa-2">align-start</div>
        </div>
        <div className="d-flex align-end mb-6" style={{ background: "grey" }}>
          <div className="pa-2">align-end</div>
          <div className="pa-2">align-end</div>
          <div className="pa-2">align-end</div>
        </div>
        <div
          className="d-flex align-center mb-6"
          style={{ background: "grey" }}
        >
          <div className="pa-2">align-center</div>
          <div className="pa-2">align-center</div>
          <div className="pa-2">align-center</div>
        </div>
        <div
          className="d-flex align-baseline mb-6"
          style={{ background: "grey" }}
        >
          <div className="pa-2">align-baseline</div>
          <div className="pa-2">align-baseline</div>
          <div className="pa-2">align-baseline</div>
        </div>
        <div
          className="d-flex align-stretch mb-6"
          style={{ background: "grey" }}
        >
          <div className="pa-2">align-stretch</div>
          <div className="pa-2">align-stretch</div>
          <div className="pa-2">align-stretch</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour <code>align-items</code>.
      <ul>
        <li>
          <b>.align-start</b>
        </li>
        <li>
          <b>.align-end</b>
        </li>
        <li>
          <b>.align-center</b>
        </li>
        <li>
          <b>.align-baseline</b>
        </li>
        <li>
          <b>.align-stretch</b>
        </li>
        <li>
          <b>.align-sm-start</b>
        </li>
        <li>
          <b>.align-sm-end</b>
        </li>
        <li>
          <b>.align-sm-center</b>
        </li>
        <li>
          <b>.align-sm-baseline</b>
        </li>
        <li>
          <b>.align-sm-stretch</b>
        </li>
        <li>
          <b>.align-md-start</b>
        </li>
        <li>
          <b>.align-md-end</b>
        </li>
        <li>
          <b>.align-md-center</b>
        </li>
        <li>
          <b>.align-md-baseline</b>
        </li>
        <li>
          <b>.align-md-stretch</b>
        </li>
        <li>
          <b>.align-lg-start</b>
        </li>
        <li>
          <b>.align-lg-end</b>
        </li>
        <li>
          <b>.align-lg-center</b>
        </li>
        <li>
          <b>.align-lg-baseline</b>
        </li>
        <li>
          <b>.align-lg-stretch</b>
        </li>
        <li>
          <b>.align-xl-start</b>
        </li>
        <li>
          <b>.align-xl-end</b>
        </li>
        <li>
          <b>.align-xl-center</b>
        </li>
        <li>
          <b>.align-xl-baseline</b>
        </li>
        <li>
          <b>.align-xl-stretch</b>
        </li>
      </ul>
      <h3>Flex align self</h3>
      Le paramètre flex <code>align-self</code> peut être modifié à l&#39;aide
      des classes flex align-self. Cela modifiera par défaut les éléments de la
      boîte flexible sur <b>l&#39;axe des x</b> mais est inversé lors de
      l&#39;utilisation de <code>flex-direction: column</code>, modifiant{" "}
      <b>l&#39;axe des y</b>. Choisissez parmi <code>start</code>,{" "}
      <code>end</code>, <code>center</code>, <code>baseline</code>,{" "}
      <code>auto</code> ou <code>stretch</code>(par défaut du navigateur).
      <PreviewCode>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-start">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-end">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-center">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-baseline">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-auto">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 align-self-stretch">Aligned flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour{" "}
      <code>align-self-items</code>.
      <ul>
        <li>
          <b>.align-self-start</b>
        </li>
        <li>
          <b>.align-self-end</b>
        </li>
        <li>
          <b>.align-self-center</b>
        </li>
        <li>
          <b>.align-self-baseline</b>
        </li>
        <li>
          <b>.align-self-auto</b>
        </li>
        <li>
          <b>.align-self-stretch</b>
        </li>
        <li>
          <b>.align-self-sm-start</b>
        </li>
        <li>
          <b>.align-self-sm-end</b>
        </li>
        <li>
          <b>.align-self-sm-center</b>
        </li>
        <li>
          <b>.align-self-sm-baseline</b>
        </li>
        <li>
          <b>.align-self-sm-auto</b>
        </li>
        <li>
          <b>.align-self-sm-stretch</b>
        </li>
        <li>
          <b>.align-self-md-start</b>
        </li>
        <li>
          <b>.align-self-md-end</b>
        </li>
        <li>
          <b>.align-self-md-center</b>
        </li>
        <li>
          <b>.align-self-md-baseline</b>
        </li>
        <li>
          <b>.align-self-md-auto</b>
        </li>
        <li>
          <b>.align-self-md-stretch</b>
        </li>
        <li>
          <b>.align-self-lg-start</b>
        </li>
        <li>
          <b>.align-self-lg-end</b>
        </li>
        <li>
          <b>.align-self-lg-center</b>
        </li>
        <li>
          <b>.align-self-lg-baseline</b>
        </li>
        <li>
          <b>.align-self-lg-auto</b>
        </li>
        <li>
          <b>.align-self-lg-stretch</b>
        </li>
        <li>
          <b>.align-self-xl-start</b>
        </li>
        <li>
          <b>.align-self-xl-end</b>
        </li>
        <li>
          <b>.align-self-xl-center</b>
        </li>
        <li>
          <b>.align-self-xl-baseline</b>
        </li>
        <li>
          <b>.align-self-xl-auto</b>
        </li>
        <li>
          <b>.align-self-xl-stretch</b>
        </li>
      </ul>
      <h3>Auto margins</h3>
      Using the margin helper classes in a flexbox container, you can control
      the positioning of flex items on the <b>x-axis</b> or <b>y-axis</b> when
      using <code>flex-row</code> or <code>flex-column</code> respectively.
      <PreviewCode>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2 mr-auto">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div className="d-flex mb-6" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 ml-auto">Flex item</div>
        </div>
      </PreviewCode>
      <h3>Using align items</h3>
      En mélangeant <code>flex-direction: column</code> et{" "}
      <code>align-items</code>, vous pouvez utiliser <code>.mt-auto</code> et{" "}
      <code>.mb-auto</code> des classes d&#39;assistance pour ajuster le
      positionnement des éléments flexibles.
      <PreviewCode>
        <div
          className="d-flex align-end flex-column mb-6"
          style={{ background: "grey", height: "200px" }}
        >
          <div className="pa-2 mb-auto">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
        <div
          className="d-flex align-start flex-column mb-6"
          style={{ background: "grey", height: "200px" }}
        >
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2 mt-auto">Flex item</div>
        </div>
      </PreviewCode>
      <h3>Flex wrap</h3>
      Par défaut <code>.d-flex</code>, ne fournit aucun habillage (se comporte
      de la même manière que <code>flex-wrap: nowrap</code>). Cela peut être
      modifié en appliquant des classes d&#39;assistance <code>flex-wrap</code>{" "}
      dans le format <code>{`flex-{condition}`}</code> où la condition peut être{" "}
      <code>nowrap</code>, <code>wrap</code> ou <code>wrap-reverse</code>.
      <ul>
        <li>
          <b>.flex-nowrap</b>
        </li>
        <li>
          <b>.flex-wrap</b>
        </li>
        <li>
          <b>.flex-wrap-reverse</b>
        </li>
      </ul>
      <PreviewCode>
        <div className="d-flex flex-nowrap py-3" style={{ background: "grey" }}>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
          <div className="pa-2">Flex item</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div className="d-flex flex-wrap" style={{ background: "grey" }}>
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div
          className="d-flex flex-wrap-reverse"
          style={{ background: "grey" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      Ces classes d&#39;assistance peuvent également être appliquées dans le
      format <code>{`flex-{breakpoint}-{condition}`}</code> pour créer des
      variantes plus réactives basées sur des points d&#39;arrêt. Les
      combinaisons suivantes sont disponibles :
      <ul>
        <li>
          <b>.flex-sm-nowrap</b>
        </li>
        <li>
          <b>.flex-sm-wrap</b>
        </li>
        <li>
          <b>.flex-sm-wrap-reverse</b>
        </li>
        <li>
          <b>.flex-md-nowrap</b>
        </li>
        <li>
          <b>.flex-md-wrap</b>
        </li>
        <li>
          <b>.flex-md-wrap-reverse</b>
        </li>
        <li>
          <b>.flex-lg-nowrap</b>
        </li>
        <li>
          <b>.flex-lg-wrap</b>
        </li>
        <li>
          <b>.flex-lg-wrap-reverse</b>
        </li>
        <li>
          <b>.flex-xl-nowrap</b>
        </li>
        <li>
          <b>.flex-xl-wrap</b>
        </li>
        <li>
          <b>.flex-xl-wrap-reverse</b>
        </li>
      </ul>
      <h3>Flex order</h3>
      Vous pouvez modifier l&#39;ordre visuel des éléments flexibles avec les{" "}
      <code>order</code> utilitaires.
      <PreviewCode>
        <div
          className="d-flex flex-wrap-reverse"
          style={{ background: "grey" }}
        >
          <div className="pa-2 order-3">Flex item 1</div>
          <div className="pa-2 order-2">Flex item 2</div>
          <div className="pa-2 order-1">Flex item 3</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour <code>order</code>.
      <ul>
        <li>
          <b>.order-first</b>
        </li>
        <li>
          <b>.order-0</b>
        </li>
        <li>
          <b>.order-1</b>
        </li>
        <li>
          <b>.order-2</b>
        </li>
        <li>
          <b>.order-3</b>
        </li>
        <li>
          <b>.order-4</b>
        </li>
        <li>
          <b>.order-5</b>
        </li>
        <li>
          <b>.order-6</b>
        </li>
        <li>
          <b>.order-7</b>
        </li>
        <li>
          <b>.order-8</b>
        </li>
        <li>
          <b>.order-9</b>
        </li>
        <li>
          <b>.order-10</b>
        </li>
        <li>
          <b>.order-11</b>
        </li>
        <li>
          <b>.order-12</b>
        </li>
        <li>
          <b>.order-last</b>
        </li>
        <li>
          <b>.order-sm-first</b>
        </li>
        <li>
          <b>.order-sm-0</b>
        </li>
        <li>
          <b>.order-sm-1</b>
        </li>
        <li>
          <b>.order-sm-2</b>
        </li>
        <li>
          <b>.order-sm-3</b>
        </li>
        <li>
          <b>.order-sm-4</b>
        </li>
        <li>
          <b>.order-sm-5</b>
        </li>
        <li>
          <b>.order-sm-6</b>
        </li>
        <li>
          <b>.order-sm-7</b>
        </li>
        <li>
          <b>.order-sm-8</b>
        </li>
        <li>
          <b>.order-sm-9</b>
        </li>
        <li>
          <b>.order-sm-10</b>
        </li>
        <li>
          <b>.order-sm-11</b>
        </li>
        <li>
          <b>.order-sm-12</b>
        </li>
        <li>
          <b>.order-sm-last</b>
        </li>
        <li>
          <b>.order-md-first</b>
        </li>
        <li>
          <b>.order-md-0</b>
        </li>
        <li>
          <b>.order-md-1</b>
        </li>
        <li>
          <b>.order-md-2</b>
        </li>
        <li>
          <b>.order-md-3</b>
        </li>
        <li>
          <b>.order-md-4</b>
        </li>
        <li>
          <b>.order-md-5</b>
        </li>
        <li>
          <b>.order-md-6</b>
        </li>
        <li>
          <b>.order-md-7</b>
        </li>
        <li>
          <b>.order-md-8</b>
        </li>
        <li>
          <b>.order-md-9</b>
        </li>
        <li>
          <b>.order-md-10</b>
        </li>
        <li>
          <b>.order-md-11</b>
        </li>
        <li>
          <b>.order-md-12</b>
        </li>
        <li>
          <b>.order-md-last</b>
        </li>
        <li>
          <b>.order-lg-first</b>
        </li>
        <li>
          <b>.order-lg-0</b>
        </li>
        <li>
          <b>.order-lg-1</b>
        </li>
        <li>
          <b>.order-lg-2</b>
        </li>
        <li>
          <b>.order-lg-3</b>
        </li>
        <li>
          <b>.order-lg-4</b>
        </li>
        <li>
          <b>.order-lg-5</b>
        </li>
        <li>
          <b>.order-lg-6</b>
        </li>
        <li>
          <b>.order-lg-7</b>
        </li>
        <li>
          <b>.order-lg-8</b>
        </li>
        <li>
          <b>.order-lg-9</b>
        </li>
        <li>
          <b>.order-lg-10</b>
        </li>
        <li>
          <b>.order-lg-11</b>
        </li>
        <li>
          <b>.order-lg-12</b>
        </li>
        <li>
          <b>.order-lg-last</b>
        </li>
        <li>
          <b>.order-xl-first</b>
        </li>
        <li>
          <b>.order-xl-0</b>
        </li>
        <li>
          <b>.order-xl-1</b>
        </li>
        <li>
          <b>.order-xl-2</b>
        </li>
        <li>
          <b>.order-xl-3</b>
        </li>
        <li>
          <b>.order-xl-4</b>
        </li>
        <li>
          <b>.order-xl-5</b>
        </li>
        <li>
          <b>.order-xl-6</b>
        </li>
        <li>
          <b>.order-xl-7</b>
        </li>
        <li>
          <b>.order-xl-8</b>
        </li>
        <li>
          <b>.order-xl-9</b>
        </li>
        <li>
          <b>.order-xl-10</b>
        </li>
        <li>
          <b>.order-xl-11</b>
        </li>
        <li>
          <b>.order-xl-12</b>
        </li>
        <li>
          <b>.order-xl-last</b>
        </li>
      </ul>
      <h3>Flex align content</h3>
      Le paramètre flex <code>align-content</code> peut être modifié à
      l&#39;aide des classes flex align-content. Cela modifiera par défaut les
      éléments de la boîte flexible sur <b>l&#39;axe des x</b> mais est inversé
      lors de l&#39;utilisation de <code>flex-direction: column</code>,
      modifiant <code>l&#39;axe des y</code>. Choisissez parmi{" "}
      <code>start</code>(par défaut du navigateur) , <code>end</code>,{" "}
      <code>center</code>, <code>between</code>, <code>around</code> ou{" "}
      <code>stretch</code>.
      <PreviewCode>
        <div
          className="d-flex align-content-start flex-wrap"
          style={{ background: "grey", minHeight: "200px" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div
          className="d-flex align-content-end flex-wrap"
          style={{ background: "grey", minHeight: "200px" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div
          className="d-flex align-content-center flex-wrap"
          style={{ background: "grey", minHeight: "200px" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div
          className="d-flex align-content-space-between flex-wrap"
          style={{ background: "grey", minHeight: "200px" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      <PreviewCode>
        <div
          className="d-flex align-content-space-around flex-wrap"
          style={{ background: "grey", minHeight: "200px" }}
        >
          <div className="pa-2">Flex item 1</div>
          <div className="pa-2">Flex item 2</div>
          <div className="pa-2">Flex item 3</div>
          <div className="pa-2">Flex item 4</div>
          <div className="pa-2">Flex item 5</div>
          <div className="pa-2">Flex item 6</div>
          <div className="pa-2">Flex item 7</div>
          <div className="pa-2">Flex item 8</div>
          <div className="pa-2">Flex item 9</div>
          <div className="pa-2">Flex item 10</div>
          <div className="pa-2">Flex item 11</div>
          <div className="pa-2">Flex item 12</div>
          <div className="pa-2">Flex item 13</div>
          <div className="pa-2">Flex item 14</div>
          <div className="pa-2">Flex item 15</div>
          <div className="pa-2">Flex item 16</div>
        </div>
      </PreviewCode>
      Il existe également des variantes réactives pour{" "}
      <code>align-content</code>.
      <ul>
        <li>
          <b>align-content-start</b>
        </li>
        <li>
          <b>align-content-end</b>
        </li>
        <li>
          <b>align-content-center</b>
        </li>
        <li>
          <b>align-content-space-between</b>
        </li>
        <li>
          <b>align-content-space-around</b>
        </li>
        <li>
          <b>align-content-stretch</b>
        </li>
        <li>
          <b>align-sm-content-start</b>
        </li>
        <li>
          <b>align-sm-content-end</b>
        </li>
        <li>
          <b>align-sm-content-center</b>
        </li>
        <li>
          <b>align-sm-content-space-between</b>
        </li>
        <li>
          <b>align-sm-content-space-around</b>
        </li>
        <li>
          <b>align-sm-content-stretch</b>
        </li>
        <li>
          <b>align-md-content-start</b>
        </li>
        <li>
          <b>align-md-content-end</b>
        </li>
        <li>
          <b>align-md-content-center</b>
        </li>
        <li>
          <b>align-md-content-space-between</b>
        </li>
        <li>
          <b>align-md-content-space-around</b>
        </li>
        <li>
          <b>align-md-content-stretch</b>
        </li>
        <li>
          <b>align-lg-content-start</b>
        </li>
        <li>
          <b>align-lg-content-end</b>
        </li>
        <li>
          <b>align-lg-content-center</b>
        </li>
        <li>
          <b>align-lg-content-space-between</b>
        </li>
        <li>
          <b>align-lg-content-space-around</b>
        </li>
        <li>
          <b>align-lg-content-stretch</b>
        </li>
        <li>
          <b>align-xl-content-start</b>
        </li>
        <li>
          <b>align-xl-content-end</b>
        </li>
        <li>
          <b>align-xl-content-center</b>
        </li>
        <li>
          <b>align-xl-content-space-between</b>
        </li>
        <li>
          <b>align-xl-content-space-around</b>
        </li>
        <li>
          <b>align-xl-content-stretch</b>
        </li>
      </ul>
      <h3>Flex grow and shrink</h3>
      Azerooth a des classes d&#39;assistance pour appliquer manuellement la
      croissance et la réduction. Celles-ci peuvent être appliquées en ajoutant
      la classe d&#39;assistance au format{" "}
      <code>{`flex-{condition}-{value}`}</code>, où la condition peut être{" "}
      <code>grow</code> ou <code>shrink</code> et la valeur peut être{" "}
      <code>0</code> ou <code>1</code>. La condition <code>grow</code> permettra
      à un élément de grandir pour remplir l&#39;espace disponible, tandis{" "}
      <code>shrink</code> qu&#39;elle permettra à un élément de se réduire
      uniquement à l&#39;espace nécessaire à son contenu. Cependant, cela ne se
      produira que si l&#39;élément doit rétrécir pour s&#39;adapter à son
      conteneur, comme un redimensionnement de conteneur ou être effectué par un{" "}
      <code>flex-grow-1</code>. La valeur <code>0</code> empêchera la condition
      de se produire alors <code>1</code> qu&#39;elle l&#39;autorisera. Les
      cours suivants sont disponibles :
      <ul>
        <li>
          <b>flex-grow-0</b>
        </li>
        <li>
          <b>flex-grow-1</b>
        </li>
        <li>
          <b>flex-shrink-0</b>
        </li>
        <li>
          <b>flex-shrink-1</b>
        </li>
      </ul>
      <PreviewCode>
        <div className="flex-nowrap">
          <div className="flex-grow-0 flex-shrink-0 pa-2">
            I&#39;m 2 column wide
          </div>
          <div className="flex-grow-1 flex-shrink-0 pa-2">
            I&#39;m 1 column wide and I grow to take all the space
          </div>
          <div className="flex-grow-0 flex-shrink-1 pa-2">
            I&#39;m 5 column wide and I shrink if there&#39;s not enough space
          </div>
        </div>
      </PreviewCode>
      Ces classes d&#39;assistance peuvent également être appliquées dans le
      format <code>{`flex-{breakpoint}-{condition}-{state}`}</code> pour créer
      des variantes plus réactives basées sur des points d&#39;arrêt. Les
      combinaisons suivantes sont disponibles :
      <ul>
        <li>
          <b>flex-sm-grow-0</b>
        </li>
        <li>
          <b>flex-md-grow-0</b>
        </li>
        <li>
          <b>flex-lg-grow-0</b>
        </li>
        <li>
          <b>flex-xl-grow-0</b>
        </li>
        <li>
          <b>flex-sm-grow-1</b>
        </li>
        <li>
          <b>flex-md-grow-1</b>
        </li>
        <li>
          <b>flex-lg-grow-1</b>
        </li>
        <li>
          <b>flex-xl-grow-1</b>
        </li>
        <li>
          <b>flex-sm-shrink-0</b>
        </li>
        <li>
          <b>flex-md-shrink-0</b>
        </li>
        <li>
          <b>flex-lg-shrink-0</b>
        </li>
        <li>
          <b>flex-xl-shrink-0</b>
        </li>
        <li>
          <b>flex-sm-shrink-1</b>
        </li>
        <li>
          <b>flex-md-shrink-1</b>
        </li>
        <li>
          <b>flex-lg-shrink-1</b>
        </li>
        <li>
          <b>flex-xl-shrink-1</b>
        </li>
      </ul>
    </Fragment>
  );
};

export default AzeroothFlexStyles;
