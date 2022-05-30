import {
  mdiAccount,
  mdiAccountAlert,
  mdiAccountDetails,
  mdiAccountArrowDown,
  mdiAngular,
} from "@mdi/js";
import { Icon } from "azerooth";
import { FunctionComponent, useEffect, useState } from "react";

const AlertAlpha: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div>
      <Icon>{mdiAccount}</Icon>
      <Icon xSmall>{mdiAccountAlert}</Icon>
      <Icon small>{mdiAccountDetails}</Icon>
      <Icon large>{mdiAccountArrowDown}</Icon>
      <Icon xLarge>{mdiAngular}</Icon>
      {props.children}
      <Icon>home</Icon>
    </div>
  );
};

export default AlertAlpha;
