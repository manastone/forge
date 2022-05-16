import type { NextPage } from "next";
import { Fragment, useState } from "react";
import PreviewCode from "../../../components/PreviewCode";

const AzeroothSpacingStyles: NextPage = () => {
  const [p, setP] = useState("a");
  const [pSize, setPSize] = useState("4");
  const [m, setM] = useState("a");
  const [mSize, setMSize] = useState("4");

  return (
    <Fragment>
      <h1>Spacing</h1>
      Mettez à jour votre mise en page sans créer de nouvelles classes. Les
      assistants d&#39;espacement sont utiles pour modifier le remplissage et la
      marge d&#39;un élément.
      <PreviewCode>
        <div>
          <label>Padding</label>
          <select
            id="padding"
            onChange={(event: any) => setP(event.target.value)}
          >
            <option value="t">t</option>
            <option value="b">b</option>
            <option value="l">l</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="e">e</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="a">a</option>
          </select>
          <label>Size</label>
          <select
            id="padding-size"
            onChange={(event: any) => setPSize(event.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
          <label>Margin</label>
          <select
            id="margin"
            onChange={(event: any) => setM(event.target.value)}
          >
            <option value="t">t</option>
            <option value="b">b</option>
            <option value="l">l</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="e">e</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="a">a</option>
          </select>
          <label>Size</label>
          <select
            id="margin-size"
            onChange={(event: any) => setMSize(event.target.value)}
          >
            <option value="auto">auto</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="n0">n0</option>
            <option value="n1">n1</option>
            <option value="n2">n2</option>
            <option value="n3">n3</option>
            <option value="n4">n4</option>
            <option value="n5">n5</option>
            <option value="n6">n6</option>
            <option value="n7">n7</option>
            <option value="n8">n8</option>
            <option value="n9">n9</option>
            <option value="n10">n10</option>
            <option value="n11">n11</option>
            <option value="n12">n12</option>
            <option value="n13">n13</option>
            <option value="n14">n14</option>
            <option value="n15">n15</option>
            <option value="n16">n16</option>
          </select>
          <div
            className="exemple"
            style={{
              backgroundColor: "#ffcc80",
            }}
          >
            <div
              className={"m" + m + "-" + mSize}
              style={{
                backgroundColor: "#ffcc80",
              }}
            >
              <div
                className={"p" + p + "-" + pSize}
                style={{
                  backgroundColor: "#c5e1a5",
                }}
              >
                <div
                  className="text-center py-6"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  Use the controls above to try out the different spacing
                  helpers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </PreviewCode>
      <h3>Exemple</h3>
      Les classes d&#39;assistance appliquent margin ou padding à un élément
      allant de <b>0</b> à <b>16</b> . Chaque incrément de taille a été conçu
      pour s&#39;aligner sur les espacements courants de Material Design. Ces
      classes peuvent être appliquées en utilisant le format suivant{" "}
      <code>{`{property}{direction}-{size}`}</code>. La propriété applique le
      type d&#39;espacement:
      <ul>
        <li>
          <code>m-</code> applique margin
        </li>
        <li>
          <code>p-</code> applique padding
        </li>
      </ul>{" "}
      La direction désigne le côté auquel s&#39;applique la propriété :
      <ul>
        <li>
          <code>t-</code> applique l&#39;espacement pour <code>margin-top</code>{" "}
          et <code>padding-top</code>
        </li>
        <li>
          <code>b-</code> applique l&#39;espacement pour{" "}
          <code>margin-bottom</code> et <code>padding-bottom</code>
        </li>
        <li>
          <code>l-</code> applique l&#39;espacement pour{" "}
          <code>margin-left</code> et <code>padding-left</code>
        </li>
        <li>
          <code>r-</code> applique l&#39;espacement pour{" "}
          <code>margin-right</code> et <code>padding-right</code>
        </li>
        <li>
          <code>s-</code> applique l&#39;espacement pour{" "}
          <code>margin-left</code> et <code>padding-left</code>
        </li>
        <li>
          <code>e-</code> applique l&#39;espacement pour{" "}
          <code>margin-right</code> et <code>padding-right</code>
        </li>
        <li>
          <code>x-</code> applique l&#39;espacement pour <code>*-left</code> et{" "}
          <code>*-right</code>
        </li>
        <li>
          <code>y-</code> applique l&#39;espacement pour <code>*-top</code> et{" "}
          <code>*-bottom</code>
        </li>
        <li>
          <code>a-</code> applique l&#39;espacement dans toutes les directions
        </li>
      </ul>
      La taille contrôle l&#39;incrément de la propriété par intervalles de 4
      pixels :
      <ul>
        <li>
          <code>0-</code> élimine tout <code>margin</code> ou{" "}
          <code>padding</code> en le mettant à 0.
        </li>
        <li>
          <code>1-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 4px.
        </li>
        <li>
          <code>2-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 8px.
        </li>
        <li>
          <code>3-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 12px.
        </li>
        <li>
          <code>4-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 16px.
        </li>
        <li>
          <code>5-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 20px.
        </li>
        <li>
          <code>6-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 24px.
        </li>
        <li>
          <code>7-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 28px.
        </li>
        <li>
          <code>8-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 32px.
        </li>
        <li>
          <code>9-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 36px.
        </li>
        <li>
          <code>10-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 40px.
        </li>
        <li>
          <code>11-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 44px.
        </li>
        <li>
          <code>12-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 48px.
        </li>
        <li>
          <code>13-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 52px.
        </li>
        <li>
          <code>14-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 56px.
        </li>
        <li>
          <code>15-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 60px.
        </li>
        <li>
          <code>16-</code> ensembles <code>margin</code> ou <code>padding</code>{" "}
          à 64px.
        </li>
        <li>
          <code>n1-</code> définit <code>margin</code> à -4px.
        </li>
        <li>
          <code>n2-</code> définit <code>margin</code> à -8px.
        </li>
        <li>
          <code>n3-</code> définit <code>margin</code> à -12px.
        </li>
        <li>
          <code>n4-</code> définit <code>margin</code> à -16px.
        </li>
        <li>
          <code>n5-</code> définit <code>margin</code> à -20px.
        </li>
        <li>
          <code>n6-</code> définit <code>margin</code> à -24px.
        </li>
        <li>
          <code>n7-</code> définit <code>margin</code> à -28px.
        </li>
        <li>
          <code>n8-</code> définit <code>margin</code> à -32px.
        </li>
        <li>
          <code>n9-</code> définit <code>margin</code> à -36px.
        </li>
        <li>
          <code>n10-</code> définit <code>margin</code> à -40px.
        </li>
        <li>
          <code>n11-</code> définit <code>margin</code> à -44px.
        </li>
        <li>
          <code>n12-</code> définit <code>margin</code> à -48px.
        </li>
        <li>
          <code>n13-</code> définit <code>margin</code> à -52px.
        </li>
        <li>
          <code>n14-</code> définit <code>margin</code> à -56px.
        </li>
        <li>
          <code>n15-</code> définit <code>margin</code> à -60px.
        </li>
        <li>
          <code>n16-</code> définit <code>margin</code> à -64px.
        </li>
        <li>
          <code>auto-</code> définit l&#39;espacement sur automatique.
        </li>
      </ul>
      <h4>Exemples</h4>
      <h4>Points d&#39;arrêt</h4>
      Azerooth est livré avec un système de grille à 12 points construit à
      l&#39;aide de Flexbox. L&#39;espacement est utilisé pour créer des mises
      en page spécifiques dans le contenu d&#39;une application. Il se compose
      de 5 points d&#39;arrêt média utilisés pour cibler des tailles ou des
      orientations d&#39;écran spécifiques : <b>xs , sm , md , lg et xl</b>. Les
      résolutions par défaut sont définies ci-dessous dans le tableau Viewport
      Breakpoints et peuvent être modifiées en personnalisant la configuration
      du service de point d&#39;arrêt.
      <b>Tableau de breakpoint</b>
      <br /> Les classes d&#39;assistance appliquent une marge ou un remplissage
      à un point d&#39;arrêt donné. Ces classes peuvent être appliquées en
      utilisant le format suivant :{" "}
      <code>{`{property}{direction}-{breakpoint}-{size}`}</code> . Cela ne
      s&#39;applique pas à xs car il est déduit ; par exemple{" "}
      <code>ma-xs-2</code> est égal à <code>ma-2</code> .
      <PreviewCode>
        <div>
          <div
            className="pa-md-4 mx-lg-auto"
            style={{ background: "blue", width: "125px" }}
          >
            Adjust screen size to see spacing changes
          </div>
        </div>
      </PreviewCode>
      <h3>Horizontal</h3>
      En utilisant les classes d&#39;aide à la marge, vous pouvez facilement
      centrer le contenu horizontalement.
      <PreviewCode>
        <div>
          <div
            className="mx-auto"
            style={{ background: "blue", width: "125px" }}
          >
            Centered
          </div>
        </div>
      </PreviewCode>
      <h3>Marge négative</h3>
      La marge peut également être appliquée négativement aux mêmes intervalles
      de <b>1 à 16</b>.
      <PreviewCode>
        <div>
          <div
            className="mx-auto"
            style={{ background: "pink", height: "100px", maxWidth: "200px" }}
          ></div>
          <div
            className="mt-n12 mx-auto"
            style={{ background: "blue", height: "100px", maxWidth: "300px" }}
          >
            This div has negative top margin applied
          </div>
        </div>
      </PreviewCode>
    </Fragment>
  );
};

export default AzeroothSpacingStyles;
