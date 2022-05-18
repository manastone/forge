import { Col, Container, Row, Spacer } from "azerooth";
import type { NextPage } from "next";
import { Fragment } from "react";
import PreviewCode from "../../../components/PreviewCode";
import Table from "../../../components/Table";

const AzeroothGridsModule: NextPage = () => {
  const headerProps = [
    { name: "name" },
    { name: "type" },
    { name: "default" },
    { name: "description" },
  ];
  const headerSlots = [{ name: "name" }, { name: "description" }];

  const spacerData = [
    {
      name: "tag",
      type: "string",
      default: "'div'",
      description: "Specify a custom tag used on the root element.",
    },
  ];
  const spacerSlots = [
    {
      name: "children",
      description: "Le slot par défaut sur React",
    },
  ];

  const rowData = [
    {
      name: "align",
      type: "string",
      default: "undefined",
      description:
        "Applies the align-items css property. Available options are start, center, end, baseline and stretch.",
    },
    {
      name: "alignContent",
      type: "string",
      default: "undefined",
      description:
        "Applies the align-content css property. Available options are start, center, end, space-between, space-around and stretch.",
    },
    {
      name: "alignContentLg",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-content property on large and greater breakpoints.",
    },
    {
      name: "alignContentMd",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-content property on medium and greater breakpoints.",
    },
    {
      name: "alignContentSm",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-content property on small and greater breakpoints.",
    },
    {
      name: "alignContentXl",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-content property on small and greater breakpoints.",
    },
    {
      name: "alignLg",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-items property on large and greater breakpoints.",
    },
    {
      name: "alignMd",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-items property on large and greater breakpoints.",
    },
    {
      name: "alignSm",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-items property on large and greater breakpoints.",
    },
    {
      name: "alignXl",
      type: "string",
      default: "undefined",
      description:
        "Changes the align-items property on large and greater breakpoints.",
    },
    {
      name: "dense",
      type: "boolean",
      default: "false",
      description: "Reduces the gutter between a-cols.",
    },
    {
      name: "justify",
      type: "string",
      default: "undefined",
      description:
        "Applies the justify-content css property. Available options are start, center, end, space-between and space-around.",
    },
    {
      name: "justifyLg",
      type: "string",
      default: "undefined",
      description:
        "Changes the justify-content property on large and greater breakpoints.",
    },
    {
      name: "justifyMd",
      type: "string",
      default: "undefined",
      description:
        "Changes the justify-content property on medium and greater breakpoints.",
    },
    {
      name: "justifySm",
      type: "string",
      default: "undefined",
      description:
        "Changes the justify-content property on small and greater breakpoints.",
    },
    {
      name: "justifyXl",
      type: "string",
      default: "undefined",
      description:
        "Changes the justify-content property on extra large and greater breakpoints",
    },
    {
      name: "noGutters",
      type: "boolean",
      default: "false",
      description: "Removes the gutter between a-cols",
    },
    {
      name: "tag",
      type: "string",
      default: "'div'",
      description: "Specify a custom tag used on the root element.",
    },
  ];
  const rowSlots = [
    {
      name: "children",
      description: "Le slot par défaut sur React",
    },
  ];

  const containerData = [
    {
      name: "tag",
      type: "string",
      default: "'div'",
      description: "Specify a custom tag used on the root element.",
    },
    {
      name: "id",
      type: "string",
      default: "undefined",
      description: "Sets the DOM id on the component",
    },
    {
      name: "fluid",
      type: "boolean",
      default: "false",
      description: "Removes viewport maximum-width size breakpoints",
    },
  ];
  const containerSlots = [
    {
      name: "children",
      description: "Le slot par défaut sur React",
    },
  ];

  const colData = [
    {
      name: "tag",
      type: "string",
      default: "'div'",
      description: "Specify a custom tag used on the root element.",
    },
    {
      name: "id",
      type: "string",
      default: "undefined",
      description: "Sets the DOM id on the component",
    },
    {
      name: "alignSelf",
      type: "string",
      default: "undefined",
      description:
        "Applies the align-items css property. Available options are start, center, end, auto, baseline and stretch.",
    },
    {
      name: "cols",
      type: "boolean | string | number",
      default: "false",
      description:
        "Sets the default number of columns the component extends. Available options are 1 -> 12 and auto.",
    },
    {
      name: "lg",
      type: "boolean | string | number",
      default: "false",
      description:
        "Changes the number of columns on large and greater breakpoints.",
    },
    {
      name: "xl",
      type: "boolean | string | number",
      default: "false",
      description:
        "Changes the number of columns on large and greater breakpoints.",
    },
    {
      name: "md",
      type: "boolean | string | number",
      default: "false",
      description:
        "Changes the number of columns on large and greater breakpoints.",
    },
    {
      name: "sm",
      type: "boolean | string | number",
      default: "false",
      description:
        "Changes the number of columns on large and greater breakpoints.",
    },
    {
      name: "offset",
      type: "string | number",
      default: "undefined",
      description: "Sets the default offset for the column.",
    },
    {
      name: "offsetLg",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the offset of the component on large and greater breakpoints.",
    },
    {
      name: "offsetSm",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the offset of the component on large and greater breakpoints.",
    },
    {
      name: "offsetMd",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the offset of the component on large and greater breakpoints.",
    },
    {
      name: "offsetXl",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the offset of the component on large and greater breakpoints.",
    },
    {
      name: "order",
      type: "string | number",
      default: "undefined",
      description: "Sets the default order for the column.",
    },
    {
      name: "orderLg",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the order of the component on large and greater breakpoints.",
    },
    {
      name: "orderSm",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the order of the component on large and greater breakpoints.",
    },
    {
      name: "orderMd",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the order of the component on large and greater breakpoints.",
    },
    {
      name: "orderXl",
      type: "string | number",
      default: "undefined",
      description:
        "Changes the order of the component on large and greater breakpoints.",
    },
  ];
  const colSlots = [
    {
      name: "children",
      description: "Le slot par défaut sur React",
    },
  ];
  return (
    <Fragment>
      <h1>Grid system</h1>
      Azerooth est livré avec un système de grille à 12 points construit à
      l&#39;aide de flexbox. La grille est utilisée pour créer des mises en page
      spécifiques dans le contenu d&#39;une application. Il contient 5 types de
      points d&#39;arrêt multimédia qui sont utilisés pour cibler des tailles ou
      des orientations d&#39;écran spécifiques, <b>xs , sm , md , lg et xl</b>.
      <b>GRILLE DES BREAKPOINTS</b>
      <h2>Usage</h2>
      La grille Azerooth est fortement inspirée de la Grille standard. Il est
      intégré à l&#39;aide d&#39;une série de conteneurs, de lignes et de
      colonnes pour mettre en page et aligner le contenu. Si vous êtes nouveau
      sur flexbox ,Lire le guide{" "}
      <a
        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"
        target="_blank"
        rel="noreferrer"
      >
        CSS Tricks flexbox
      </a>{" "}
      pour le contexte, la terminologie, les directives et les extraits de code.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row noGutters>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
          </Row>
        </Container>
      </PreviewCode>
      <h2>API</h2>
      <h4>Spacer</h4>
      <Table header={headerProps} data={spacerData} />
      <Table header={headerSlots} data={spacerSlots} />
      <h4>Row</h4>
      <Table header={headerProps} data={rowData} />
      <Table header={headerSlots} data={rowSlots} />
      <h4>Cols</h4>
      <Table header={headerProps} data={colData} />
      <Table header={headerSlots} data={colSlots} />
      <h4>Container</h4>
      <Table header={headerProps} data={containerData} />
      <Table header={headerSlots} data={containerSlots} />
      <h2>composants</h2>
      <h4>Container</h4>
      <code>Container</code> offre la possibilité de centrer et de remplir
      horizontalement le contenu de votre site. Vous pouvez également utiliser
      l&#39;accessoire fluide pour étendre complètement le conteneur sur toutes
      les tailles de fenêtres et d&#39;appareils.
      <h4>Col</h4>
      <code>Col</code> est un détenteur de contenu qui doit être un enfant
      direct de <code>Row</code>.<h4>Row</h4>
      <code>Row</code> est un composant wrapper pour <code>Col</code>. Il
      utilise des propriétés flexibles pour contrôler la disposition et le flux
      de ses colonnes internes. Il utilise une gouttière standard de 24px . Cela
      peut être réduit avec l&#39;accessoire <b>dense</b> ou complètement
      supprimé en enlevant la gouttières via <b>noGutters</b>.<h4>Spacer</h4>
      <code>Spacer</code> est un composant d&#39;espacement basique mais
      polyvalent utilisé pour répartir la largeur restante entre les composants
      parents-enfants. Lorsque vous placez un seul <code>Spacer</code> avant ou
      après les composants enfants, les composants poussent à droite et à gauche
      de son conteneur. Lorsque plus d&#39;un <code>Spacer</code> est utilisé
      entre plusieurs composants, la largeur restante est répartie uniformément
      entre chaque entretoise.
      <h2>Helper Classes</h2>
      <code>fill-height</code> applies <code>height: 100%</code> to an element.
      When applied to <code>Container</code> it will also{" "}
      <code>align-items: center</code>.<h2>Exemples</h2>
      <h3>Props</h3>
      <h4>Align</h4>
      Modifiez l&#39;alignement vertical des éléments flexibles et de leurs
      parents à l&#39;aide des propriétés <b>align</b> et <b>align-self</b> .
      <PreviewCode>
        <div>
          <Container className={"mb-6"} style={{ background: "grey" }}>
            <Row align="start" noGutters style={{ height: "150px" }}>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
            </Row>
          </Container>
          <Container className={"mb-6"} style={{ background: "grey" }}>
            <Row align="center" noGutters style={{ height: "150px" }}>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
            </Row>
          </Container>
          <Container className={"mb-6"} style={{ background: "grey" }}>
            <Row align="end" noGutters style={{ height: "150px" }}>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
              <Col className={"pa-2"}>One of three columns</Col>
            </Row>
          </Container>
          <Container className={"mb-6"} style={{ background: "grey" }}>
            <Row noGutters style={{ height: "150px" }}>
              <Col alignSelf="start" className={"pa-2"}>
                One of three columns
              </Col>
              <Col alignSelf="center" className={"pa-2"}>
                One of three columns
              </Col>
              <Col alignSelf="end" className={"pa-2"}>
                One of three columns
              </Col>
            </Row>
          </Container>
        </div>
      </PreviewCode>
      <h4>Dimensionnement des points d&#39;arrêt</h4>
      Les colonnes occuperont automatiquement un espace égal dans leur conteneur
      parent. Ceci peut être modifié en utilisant la prop <b>cols</b> . Vous
      pouvez également utiliser les props <b>sm , md , lg et xl</b> pour définir
      plus précisément comment la colonne sera dimensionnée dans différentes
      tailles de fenêtre.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row noGutters className={"mb-6"}>
            <Col className={"pa-2"}>1 sur 2</Col>
            <Col className={"pa-2"}>2 sur 2</Col>
          </Row>
          <Row noGutters>
            <Col className={"pa-2"}>1 sur 3</Col>
            <Col className={"pa-2"}>2 sur 3</Col>
            <Col className={"pa-2"}>3 sur 3</Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Justifier</h4>
      Modifiez l&#39;alignement horizontal des éléments flexibles à l&#39;aide
      de la propriété <b>justifier</b> .
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row noGutters justify="start">
            <Col className={"pa-2"} cols={4}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={4}>
              2 sur 2
            </Col>
          </Row>
          <Row noGutters justify="center">
            <Col className={"pa-2"} cols={4}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={4}>
              2 sur 2
            </Col>
          </Row>
          <Row noGutters justify="end">
            <Col className={"pa-2"} cols={4}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={4}>
              2 sur 2
            </Col>
          </Row>
          <Row noGutters justify="space-around">
            <Col className={"pa-2"} cols={4}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={4}>
              2 sur 2
            </Col>
          </Row>
          <Row noGutters justify="space-between">
            <Col className={"pa-2"} cols={4}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={4}>
              2 sur 2
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>No Gutters</h4>
      Vous pouvez supprimer les marges négatives <code>Row</code> et le
      rembourrage de ses enfants directs <code>Col</code> à l&#39;aide de la
      propriété <code>noGutters</code> .
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row noGutters>
            <Col className={"pa-2"} cols={12} sm={6} md={8}>
              1 sur 2
            </Col>
            <Col className={"pa-2"} cols={6} md={4}>
              2 sur 2
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Décalage</h4>
      Les décalages sont utiles pour compenser des éléments qui ne sont
      peut-être pas encore visibles ou pour contrôler la position du contenu.
      Comme pour les points d&#39;arrêt, vous pouvez définir un décalage pour
      toutes les tailles disponibles. Cela vous permet d&#39;affiner la mise en
      page de votre application en fonction de vos besoins.
      <PreviewCode>
        <Container>
          <Row noGutters className={"mb-6"} style={{ background: "grey" }}>
            <Col className={"pa-2"} md={4}>
              .col-md-4
            </Col>
            <Col className={"pa-2"} md={4} offsetMd={4}>
              .col-md-4 .offset-md-4
            </Col>
          </Row>
          <Row noGutters className={"mb-6"} style={{ background: "grey" }}>
            <Col className={"pa-2"} md={3} offsetMd={3}>
              .col-md-3 .offset-md-3
            </Col>
            <Col className={"pa-2"} md={3} offsetMd={3}>
              .col-md-3 .offset-md-3
            </Col>
          </Row>
          <Row noGutters style={{ background: "grey" }}>
            <Col className={"pa-2"} md={6} offset={2} orderSm={5} offsetMd={3}>
              .col-md-6 .offset-md-3
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Décalage du point d&#39;arrêt</h4>
      Le décalage peut également être appliqué point d&#39;arrêt par point.
      <PreviewCode>
        <Container>
          <Row noGutters className={"mb-6"} style={{ background: "grey" }}>
            <Col className={"pa-2"} sm={5} md={6}>
              .col-sm-5 .col-md-6
            </Col>
            <Col className={"pa-2"} sm={5} md={6} offsetSm={2} offsetMd={0}>
              .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
            </Col>
          </Row>
          <Row noGutters className={"mb-6"} style={{ background: "grey" }}>
            <Col className={"pa-2"} sm={6} md={5} lg={6}>
              .col-sm-6 .col-md-5 .col-lg-6
            </Col>
            <Col
              className={"pa-2"}
              sm={6}
              md={5}
              lg={6}
              offsetMd={2}
              offsetLg={0}
            >
              .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Order</h4>
      Vous pouvez contrôler l&#39;ordre des éléments de la grille. Comme pour
      les décalages, vous pouvez définir différentes commandes pour différentes
      tailles. Concevez des dispositions d&#39;écran spécialisées qui
      s&#39;adaptent à n&#39;importe quelle application.
      <PreviewCode>
        <Container>
          <Row noGutters style={{ background: "grey" }}>
            <Col className={"pa-2"}>First, but unordered</Col>
            <Col className={"pa-2"} order={"last"}>
              Second, but last
            </Col>
            <Col className={"pa-2"} order={"first"}>
              {" "}
              Third, but first
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Divers</h4>
      <h5>Emballage de colonne</h5>
      Lorsque plus de 12 colonnes sont placées dans une ligne donnée (qui
      n&#39;utilise pas la <code>.flex-nowrap</code> classe utilitaire), chaque
      groupe de colonnes supplémentaires s&#39;enroulera sur une nouvelle ligne.
      <PreviewCode>
        <Container>
          <Row noGutters style={{ background: "grey" }}>
            <Col className={"pa-2"} cols={9}>
              {" "}
              .col-9
            </Col>
            <Col className={"pa-2"} cols={4}>
              .col-4 <br />
              Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto
              a new line as one contiguous unit.
            </Col>
            <Col className={"pa-2"} cols={6}>
              {" "}
              .col-6
              <br />
              Subsequent columns continue along the new line.
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Grandir et rétrécir</h4>
      Par défaut, les composants flexibles rempliront automatiquement
      l&#39;espace disponible dans une ligne ou une colonne. Ils rétréciront
      également par rapport au reste des éléments flexibles dans le conteneur
      flexible lorsqu&#39;une taille spécifique n&#39;est pas désignée. Vous
      pouvez définir la largeur de colonne du <code>Col</code> en utilisant la
      prop cols et en fournissant une valeur de <b>1 à 12</b> .
      <PreviewCode>
        <Container>
          <Row noGutters style={{ background: "grey" }}>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
          </Row>
          <Row noGutters className={"mt-6"} style={{ background: "grey" }}>
            <Col className={"pa-2"} cols={8}>
              col-8
            </Col>
            <Col className={"pa-2"} cols={4}>
              col-4
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Aides à la marge</h4>
      En utilisant l&#39;utilitaires d&#39;aide à la marge automatiquevous
      pouvez éloigner les colonnes sœurs les unes des autres.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"} cols={4}>
              col-4
            </Col>
            <Col className={"pa-2 ml-auto"} cols={4}>
              col-4 ml-auto
            </Col>
          </Row>
          <Row>
            <Col className={"pa-2 ml-md-auto"} cols={3}>
              col-3 ml-md-auto
            </Col>
            <Col className={"pa-2 ml-md-auto"} cols={3}>
              col-3 ml-md-auto
            </Col>
          </Row>
          <Row>
            <Col className={"pa-2 mr-auto"} cols={"auto"}>
              col-auto mr-auto
            </Col>
            <Col className={"pa-2"} cols={"auto"}>
              col-auto
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Grille imbriquée</h4>
      Les grilles peuvent être imbriquées, comme d&#39;autres frameworks, afin
      d&#39;obtenir des mises en page très personnalisées.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"} cols={9}>
              Level 1: .col-9
              <Row noGutters>
                <Col className={"pa-2"} cols={6}>
                  Level 2: .col-6
                </Col>
                <Col className={"pa-2"} cols={4}>
                  Level 3: .col-4
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Une largeur de colonne</h4>
      Lorsque vous utilisez la mise en page automatique, vous pouvez définir la
      largeur d&#39;une seule colonne et toujours faire en sorte que ses frères
      et sœurs se redimensionnent automatiquement autour d&#39;elle.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"}>1 sur 3</Col>
            <Col className={"pa-2"} cols={6}>
              2 sur 3 (plus large)
            </Col>
            <Col className={"pa-2"}>3 sur 3</Col>
          </Row>
          <Row>
            <Col className={"pa-2"}>1 sur 3</Col>
            <Col className={"pa-2"} cols={5}>
              2 sur 3 (plus large)
            </Col>
            <Col className={"pa-2"}>3 sur 3</Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Points d&#39;arrêt de ligne et de colonne</h4>
      Modifiez dynamiquement votre mise en page en fonction de la résolution.
      <b>
        {" "}
        (redimensionnez votre écran et regardez la mise en page <code>
          row
        </code>{" "}
        supérieure changer sur les points d&#39;arrêt sm, md et lg)
      </b>
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"} cols={6} sm={6} md={6} lg={6} xl={6}>
              col
            </Col>
            <Col className={"pa-2"} cols={6} sm={6} md={6} lg={6} xl={6}>
              col
            </Col>
          </Row>
          <Row>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
            <Col className={"pa-2"}>col</Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Spacer</h4>
      Le <code>Spacer</code> composant est utile lorsque vous souhaitez remplir
      l&#39;espace disponible ou créer de l&#39;espace entre deux composants.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"}>col</Col>
            <Spacer />
            <Col className={"pa-2"}>col</Col>
          </Row>
          <Row>
            <Col className={"pa-2"}>col</Col>
            <Spacer />
            <Col className={"pa-2"}>col</Col>
            <Spacer />
            <Col className={"pa-2"} cols={5}>
              col
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Dispositions uniques</h4>
      La puissance et la flexibilité du système de grille Azerooth vous
      permettent de créer des interfaces utilisateur étonnantes.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row>
            <Col className={"pa-2"} cols={12} md={8}>
              col-12 col-md-8
            </Col>
            <Col className={"pa-2"} cols={6} md={4}>
              col-6 col-md-4
            </Col>
          </Row>
          <Row>
            <Col className={"pa-2"} cols={6} md={4}>
              col-6 col-md-4
            </Col>
            <Col className={"pa-2"} cols={6} md={4}>
              col-6 col-md-4
            </Col>
            <Col className={"pa-2"} cols={6} md={4}>
              col-6 col-md-4
            </Col>
          </Row>
          <Row>
            <Col className={"pa-2"} cols={6}>
              col-6
            </Col>
            <Col className={"pa-2"} cols={6}>
              col-6
            </Col>
          </Row>
        </Container>
      </PreviewCode>
      <h4>Largeur de contenu variable</h4>
      L&#39;attribution d&#39;une largeur de point d&#39;arrêt aux colonnes peut
      être configurée pour se redimensionner en fonction de la nature de la
      largeur de leur contenu.
      <PreviewCode>
        <Container style={{ background: "grey" }}>
          <Row noGutters justify="center">
            <Col className={"pa-2"} lg="2">
              1 sur 3
            </Col>
            <Col className={"pa-2"} md="auto">
              Variable width content
            </Col>
            <Col className={"pa-2"} lg="2">
              3 of 3
            </Col>
          </Row>
          <Row noGutters>
            <Col className={"pa-2"}>1 sur 3</Col>
            <Col className={"pa-2"} md="auto">
              Variable width content
            </Col>
            <Col className={"pa-2"} lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </PreviewCode>
    </Fragment>
  );
};

export default AzeroothGridsModule;
