import type { NextPage } from "next";
import { Fragment } from "react";

import { mdiAccount } from "@mdi/js";

const HomeAzerooth: NextPage = () => {
  return (
    <Fragment>
      <h1>Azerooth</h1>
      <span className="material-icons">home</span>
      <span className="material-icons-outlined">home</span>
      <span className="material-icons-sharp">home</span>
      <span className="material-icons">home</span>
      <span className="material-icons-round">home</span>
      <span className="material-icons-two-tone">home</span>

      <p>bonjour</p>
      <span className="material-symbols-outlined">search</span>
      <p>aueroir</p>
      {/* <Icon>{mdiAccount}</Icon> */}
    </Fragment>
  );
};

export default HomeAzerooth;
