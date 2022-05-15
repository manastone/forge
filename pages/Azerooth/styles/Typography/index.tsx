import type { NextPage } from "next";
import { Fragment, useState } from "react";
import PreviewCode from "../../../components/PreviewCode";

const AzeroothTypographyStyles: NextPage = () => {
  const [text, setText] = useState(["text-caption", "text-caption"]);
  return (
    <Fragment>
      <h1 className="text-h4">Texte et typographie</h1>
      <h2 className="text-subtitle-2">
        Contrôlez la taille du texte, l&#39;alignement, l&#39;habillage, le
        débordement, les transformations et plus encore.
      </h2>
      <h3 className="text-h5">Typographie</h3>
      <p>
        Contrôlez la taille et le style du texte à l&#39;aide des classes
        d&#39;affichage Typographie. Ces valeurs sont basées sur les{" "}
        <a
          href="https://material.io/design/typography/the-type-system.html#type-scale"
          target={"_blank"}
          rel="noreferrer"
        >
          spécification technique material design
        </a>
      </p>
      <PreviewCode>
        <div className="text-h1">Heading 1</div>
        <div className="text-h2">Heading 2</div>
        <div className="text-h3">Heading 3</div>
        <div className="text-h4">Heading 4</div>
        <div className="text-h5">Heading 5</div>
        <div className="text-h6">Heading 6</div>
        <div className="text-subtitle-1">Subtitle 1</div>
        <div className="text-subtitle-2">Subtitle 2</div>
        <div className="text-body-1">Body 1</div>
        <div className="text-body-2">Body 2</div>
        <div className="text-button">Button</div>
        <div className="text-caption">Caption</div>
        <div className="text-overline">Overline</div>
      </PreviewCode>
      <p>
        Ces classes peuvent être appliquées à tous les points d&#39;arrêt de xs
        à xl. Lors de l&#39;utilisation d&#39;une classe de base,{" "}
        <code>{".text-{value}"}</code>, on en déduit qu&#39;il s&#39;git de{" "}
        <code>{".text-xs-${value}"}</code>.
      </p>
      <ul>
        <li>
          <code>{".text-{value}"}</code> pour appliquer un style de{" "}
          <code>xs</code> à <code>xl</code>
        </li>
        <li>
          <code>{".text-{breakpoint}-{value}"}</code> pour <code>sm</code>,{" "}
          <code>md</code>, <code>lg</code> et <code>xl</code>
        </li>
      </ul>
      <p> La propriété de valeur est l&#39;une des suivantes :</p>
      <ul>
        <li>
          <code>h1</code>
        </li>
        <li>
          <code>h2</code>
        </li>
        <li>
          <code>h3</code>
        </li>
        <li>
          <code>h4</code>
        </li>
        <li>
          <code>h5</code>
        </li>
        <li>
          <code>h6</code>
        </li>
        <li>
          <code>subtitle-1</code>
        </li>
        <li>
          <code>subtitle-2</code>
        </li>
        <li>
          <code>body-1</code>
        </li>
        <li>
          <code>body-2</code>
        </li>
        <li>
          <code>button</code>
        </li>
        <li>
          <code>caption</code>
        </li>
        <li>
          <code>overline</code>
        </li>
      </ul>
      <PreviewCode>
        <div>
          <button onClick={() => setText(["text-cation", "text-cation"])}>
            all
          </button>
          <button onClick={() => setText(["text-sm-body-2", "text-body-2"])}>
            sm
          </button>
          <button onClick={() => setText(["text-md-body-1", "text-body-1"])}>
            md
          </button>
          <button onClick={() => setText(["text-lg-h6", "text-h6"])}>lg</button>
          <button onClick={() => setText(["text-xl-h4", "text-h4"])}>xl</button>
          <div>
            <code>.{text[0]}</code>
          </div>
          <div>
            <span className={text[1]}>Exemple de text</span>
          </div>
        </div>
      </PreviewCode>
      <h3 className="text-h4">Mise en évidence de la font</h3>
      Material Design, par défaut, prend en charge les poids de police 100, 300,
      400, 500, 700, 900 et le texte en italique.
      <PreviewCode>
        <p className="font-weight-black">Texte noir.</p>
        <p className="font-weight-bold">Texte gras.</p>
        <p className="font-weight-medium">Texte moyen.</p>
        <p className="font-weight-regular">Texte normal.</p>
        <p className="font-weight-light">Texte léger.</p>
        <p className="font-weight-thin">Texte fin.</p>
        <p className="font-italic">Texte en italique.</p>
      </PreviewCode>
      <h3 className="text-h4">Alignement</h3>
      Les classes d&#39;aide à l&#39;alignement vous permettent de réaligner
      facilement le texte.
      <PreviewCode>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum
          metus sit amet sapien hendrerit gravida. Curabitur a pharetra augue,
          eu ultricies erat. Sed arcu turpis, ornare vitae lacus id, posuere
          faucibus lectus. Cras tincidunt maximus libero, id pretium felis
          consequat quis. In hac habitasse platea dictumst. Nullam sed mauris
          tellus. Donec ut bibendum risus.
        </p>
      </PreviewCode>
      Il existe également des classes d&#39;alignement disponibles qui prennent
      en charge les affichages réactifs.
      <PreviewCode>
        <p className="text-left">Left aligned text on all viewport sizes.</p>
        <p className="text-center">
          Center aligned text on all viewport sizes.
        </p>
        <p className="text-right">Right aligned text on all viewport sizes.</p>
      </PreviewCode>
      <h3 className="text-h4">Décoration</h3>
      Supprimez la décoration de texte avec la classe{" "}
      <code>.text-decoration-none</code> ou ajoutez un surlignement, un
      soulignement ou un saut de ligne en utilisant{" "}
      <code>.text-decoration-overline</code>,{" "}
      <code>.text-decoration-underlineet</code>
      <code>.text-decoration-line-through.</code>
      <PreviewCode>
        <a href="#demo" className="text-decoration-none">
          Non-underlined link
        </a>
        <div className="text-decoration-line-through">Line-through text</div>
        <div className="text-decoration-overline">Overline text</div>
        <div className="text-decoration-underline">Underline text</div>
      </PreviewCode>
      <h3 className="text-h4">Opacité</h3>
      Les classes d&#39;assistance d&#39;opacité vous permettent d&#39;ajuster
      facilement l&#39;accentuation du texte. <code>text--primary</code> a la
      même opacité que le texte par défaut. <code>text--secondary</code> est
      utilisé pour les conseils et le texte d&#39;aide. Diminuez le texte avec
      <code>text--disabled</code>.
      <PreviewCode>
        <p className="text--primary">
          High-emphasis has an opacity of 87% in light theme and 100% in dark.
        </p>
        <p className="text--secondary">
          Medium-emphasis text and hint text have opacities of 60% in light
          theme and 70% in dark.
        </p>
        <p className="text--disabled">
          Disabled text has an opacity of 38% in light theme and 50% in dark.
        </p>
      </PreviewCode>
      <h3 className="text-h4">Transformer</h3>
      Le texte peut être transformé avec des classes de capitalisation de texte.
      <PreviewCode>
        <p className="text-lowercase">Lowercased text.</p>
        <p className="text-uppercase">Uppercased text.</p>
        <p className="text-capitalize">CapiTaliZed text.</p>
      </PreviewCode>
      <h3 className="text-h4">Emballage et débordement</h3>
      Vous pouvez empêcher l&#39;habillage du texte avec la .text-no-wrapclasse
      utilitaire.
      <PreviewCode>
        <div
          className="text-no-wrap secondary"
          style={{
            width: "8rem",
            backgroundColor: "red",
            borderColor: "red",
          }}
        >
          This text should overflow the parent.
        </div>
      </PreviewCode>
      Un contenu plus long peut être tronqué avec des points de suspension de
      texte à l&#39;aide de la classe utilitaire <code>.text-truncate</code>
      Nécessite <code>display: inline-block</code> ou{" "}
      <code>display: block</code> .
      <PreviewCode>
        <div className="row">
          <div className="col-2 text-truncate">
            Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
            convallis tellus.
          </div>
        </div>

        <span
          className="d-inline-block text-truncate"
          style={{ maxWidth: "150px" }}
        >
          Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
          convallis tellus.
        </span>
      </PreviewCode>
    </Fragment>
  );
};

export default AzeroothTypographyStyles;
