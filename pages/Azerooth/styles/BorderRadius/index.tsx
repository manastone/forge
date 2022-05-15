import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import PreviewCode from "../../../components/PreviewCode";

import { structure } from "./data/structure";

const AzeroothBorderRadiusStyles: NextPage = () => {
  const [radius, setRadius] = useState("rounded-none");
  const [width, setWidth] = useState("250px");

  useEffect(() => {
    if (radius === "rounded-circle") setWidth("80px");
    else setWidth("250px");
  }, [radius]);

  return (
    <Fragment>
      <h1>Bordures</h1>
      Utilisez les utilitaires de bordure pour styliser rapidement le rayon de
      bordure de n&#39;importe quel élément.
      <h3>Utilisation</h3>
      <PreviewCode>
        <button onClick={() => setRadius("rounded-none")}>none</button>
        <button onClick={() => setRadius("rounded-sm")}>sm</button>
        <button onClick={() => setRadius("rounded")}>md</button>
        <button onClick={() => setRadius("rounded-lg")}>lg</button>
        <button onClick={() => setRadius("rounded-xl")}>xl</button>
        <button onClick={() => setRadius("rounded-pill")}>pill</button>
        <button onClick={() => setRadius("rounded-circle")}>circle</button>
        <div
          className={radius}
          style={{ background: "red", width: width, height: "80px" }}
        ></div>
        <code>.{radius}</code>
      </PreviewCode>
      <h3>Modifier les variables</h3>
      Vous pouvez modifier les variables par défaut des radius depuis votre
      fihcier azerooth.ts.
      <PreviewCode code={structure}></PreviewCode>
      <h3>Exemples</h3>
      <h4>Pilule et cercle</h4>
      Vous pouvez créer des pilules avec la classe <code>.rounded-pill</code> et
      des cercles avec la classe <code>.rounded-circle</code>.
      <PreviewCode>
        <div
          className={"rounded-pill"}
          style={{ background: "red", width: "150px", height: "50px" }}
        >
          <code>.rounded-pill</code>
        </div>
        <div
          className={"rounded-circle"}
          style={{ background: "red", width: "80px", height: "80px" }}
        >
          <code>.rounded-circle</code>
        </div>
      </PreviewCode>
      <h4>Suppression du rayon de bordure</h4>
      Utilisez la classe <code>.rounded-0</code> d&#39;assistance pour supprimer
      tout le rayon d&#39;un élément ou sélectionner par côté ou par coin ; par
      exemple <code>.rounded-l-0</code> et <code>.rounded-tr-0</code>.
      <PreviewCode>
        <div
          className="pa-4 text-center rounded-none"
          style={{ background: "red" }}
        >
          .rounded-0
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-t-none"
          style={{ background: "red" }}
        >
          .rounded-t-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-r-none"
          style={{ background: "red" }}
        >
          .rounded-r-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-b-none"
          style={{ background: "red" }}
        >
          .rounded-b-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-l-none"
          style={{ background: "red" }}
        >
          .rounded-l-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-tr-none"
          style={{ background: "red" }}
        >
          .rounded-tr-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-br-none"
          style={{ background: "red" }}
        >
          .rounded-br-none
        </div>
        <div
          className="pa-4 text-center rounded-lg rounded-bl-none"
          style={{ background: "red" }}
        >
          .rounded-bl-none
        </div>
      </PreviewCode>
      <h3>Arrondir tous les coins</h3>
      Les classes d&#39;assistance arrondies vous permettent de modifier le
      rayon de bordure d&#39;un élément. Utilisez <code>.rounded-sm</code>,
      <code>.rounded</code>, <code>.rounded-lg</code> et{" "}
      <code>.rounded-xl</code> pour ajouter un rayon de bordure de taille
      variable.
      <PreviewCode>
        <div
          className="pa-4 text-center rounded-sm"
          style={{ background: "red" }}
        >
          .rounded-sm
        </div>
        <div className="pa-4 text-center rounded" style={{ background: "red" }}>
          .rounded
        </div>
        <div
          className="pa-4 text-center rounded-lg"
          style={{ background: "red" }}
        >
          .rounded-lg
        </div>
        <div
          className="pa-4 text-center rounded-xl"
          style={{ background: "red" }}
        >
          .rounded-xl
        </div>
      </PreviewCode>
      <h3>Arrondi à côté</h3>
      Le rayon de bordure est configurable côté par côté à l&#39;aide des
      classes infixes, <b>t, r, b, l</b>; par exemple <code>.rounded-b-xl</code>{" "}
      et <code>.rounded-t</code>.
      <PreviewCode>
        <div
          className="pa-4 text-center rounded-t-xl"
          style={{ background: "red" }}
        >
          .rounded-t-xl
        </div>
        <div
          className="pa-4 text-center rounded-r-xl"
          style={{ background: "red" }}
        >
          .rounded-r-xl
        </div>
        <div
          className="pa-4 text-center rounded-b-xl"
          style={{ background: "red" }}
        >
          .rounded-b-xl
        </div>
        <div
          className="pa-4 text-center rounded-l-xl"
          style={{ background: "red" }}
        >
          .rounded-l-xl
        </div>
      </PreviewCode>
      <h3>Arrondir par coin</h3>
      Le rayon de la bordure est configurable coin par coin à l&#39;aide des
      classes infixes, <b>tl, tr, br, bl</b>; par exemple{" "}
      <code>.rounded-br-xl</code> et <code>.rounded-tr</code>.
      <PreviewCode>
        <div
          className="pa-4 text-center rounded-tl-xl"
          style={{ background: "red" }}
        >
          .rounded-tl-xl
        </div>
        <div
          className="pa-4 text-center rounded-tr-xl"
          style={{ background: "red" }}
        >
          .rounded-tr-xl
        </div>
        <div
          className="pa-4 text-center rounded-br-xl"
          style={{ background: "red" }}
        >
          .rounded-br-xl
        </div>
        <div
          className="pa-4 text-center rounded-bl-xl"
          style={{ background: "red" }}
        >
          .rounded-bl-xl
        </div>
      </PreviewCode>
    </Fragment>
  );
};

export default AzeroothBorderRadiusStyles;
