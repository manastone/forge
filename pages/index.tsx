import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import { Fragment } from "react";

import HomeAzerooth from "./Azerooth/Home";
import AzeroothAppModule from "./Azerooth/components/Application";
import AzeroothTypographyModule from "./Azerooth/styles/Typography";
import AzeroothFeatureTheme from "./Azerooth/features/Theme";
import { App } from "azerooth";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="azerooth" element={<HomeAzerooth />} />
          <Route path="application" element={<AzeroothAppModule />} />
          <Route path="typography" element={<AzeroothTypographyModule />} />
          <Route path="theme" element={<AzeroothFeatureTheme />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Home;

function Layout() {
  return (
    <App>
      <h1>ManaStone</h1>
      <nav>
        <Link to="azerooth">Azerooth</Link> |{" "}
        <Link to="application">Application</Link> |{" "}
        <Link to="typography">Typography</Link> | <Link to="theme">Theme</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </App>
  );
}
