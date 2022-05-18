import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import { Fragment } from "react";

import HomeAzerooth from "./Azerooth/Home";
import AzeroothAppModule from "./Azerooth/components/Application";
import AzeroothTypographyStyles from "./Azerooth/styles/Typography";
import AzeroothColorsStyles from "./Azerooth/styles/Colors";
import AzeroothBorderRadiusStyles from "./Azerooth/styles/BorderRadius";
import AzeroothDisplayStyles from "./Azerooth/styles/Display";
import AzeroothFeatureTheme from "./Azerooth/features/Theme";
import AzeroothFeatureBreakpoints from "./Azerooth/features/Breakpoints";
import AzeroothOverflowStyles from "./Azerooth/styles/Overflow";
import AzeroothSpacingStyles from "./Azerooth/styles/Spacing";
import AzeroothFloatStyles from "./Azerooth/styles/Float";
import AzeroothFlexStyles from "./Azerooth/styles/Flex";
import AzeroothContentStyles from "./Azerooth/styles/Content";
import { App, setDarkMode } from "azerooth";
import AzeroothFeatureGlobalConfig from "./Azerooth/features/GlobalConfiguration";
import AzeroothFeaturePresets from "./Azerooth/features/Presets";
import AzeroothGridsModule from "./Azerooth/components/Grids";
import AzeroothFeatureFonts from "./Azerooth/features/Fonts";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="azerooth" element={<HomeAzerooth />} />
          <Route path="application" element={<AzeroothAppModule />} />
          <Route path="typography" element={<AzeroothTypographyStyles />} />
          <Route path="colors" element={<AzeroothColorsStyles />} />
          <Route
            path="border-radius"
            element={<AzeroothBorderRadiusStyles />}
          />
          <Route path="display" element={<AzeroothDisplayStyles />} />
          <Route path="theme" element={<AzeroothFeatureTheme />} />
          <Route path="breakpoints" element={<AzeroothFeatureBreakpoints />} />
          <Route path="overflow" element={<AzeroothOverflowStyles />} />
          <Route path="spacing" element={<AzeroothSpacingStyles />} />
          <Route path="float" element={<AzeroothFloatStyles />} />
          <Route path="flex" element={<AzeroothFlexStyles />} />
          <Route path="content" element={<AzeroothContentStyles />} />
          <Route
            path="global-config"
            element={<AzeroothFeatureGlobalConfig />}
          />
          <Route path="presets" element={<AzeroothFeaturePresets />} />
          <Route path="grids" element={<AzeroothGridsModule />} />
          <Route path="fonts" element={<AzeroothFeatureFonts />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Home;

function Layout() {
  return (
    <App>
      <h1 className="text-h3">ManaStone</h1>
      <button onClick={() => setDarkMode()}>DarK/Night</button>
      <nav>
        <Link to="azerooth">Azerooth</Link> |{" "}
        <Link to="application">Application</Link> |{" "}
        <Link to="typography">Typography</Link> |{" "}
        <Link to="border-radius">Border-Radius</Link> |{" "}
        <Link to="colors">Colors</Link> | <Link to="theme">Theme</Link> |{" "}
        <Link to="breakpoints">Breakpoints</Link>|{" "}
        <Link to="overflow">Overflow</Link>| <Link to="display">Display</Link> |{" "}
        <Link to="spacing">Spacing</Link> | <Link to="float">Float</Link> |{" "}
        <Link to="flex">Flex</Link>| <Link to="content">Content</Link>|{" "}
        <Link to="global-config">Configuration globale</Link> |{" "}
        <Link to="presets">Presets</Link> | <Link to="grids">Grids</Link> |{" "}
        <Link to="fonts">Fonts</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </App>
  );
}
