import type { NextPage } from "next";
import { Fragment } from "react";

const AzeroothContentStyles: NextPage = () => {
  return <Fragment>
      <h1>Content</h1>
      Azerooth a un style personnalisé pour plusieurs éléments standard.
      <h2>Citation en bloc</h2>
      <blockquote class="blockquote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
    </blockquote>
    <h2>Paragraphes</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <h2>Code</h2>
    Example of an inline <code>{`<code>`}</code> element.
    <h2>Variables</h2>
    <var>a</var> = <var>z</var> + <var>e</var> - <var>r</var> + <var>o</var> * <var>o</var> / <var>th</var>
  </Fragment>;
};

export default AzeroothContentStyles;
