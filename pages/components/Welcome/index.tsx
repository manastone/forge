import { FunctionComponent, useEffect, useState } from "react";

const WelcomeMsg: FunctionComponent<any> = ({ ...props }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const currentdate = new Date();

    if (
      Number(currentdate.getHours()) >= 6 &&
      Number(currentdate.getHours()) <= 20
    ) {
      setMsg("Bonjour");
    } else {
      setMsg("Bonsoir");
    }
  }, []);

  return <h1>{msg}</h1>;
};

export default WelcomeMsg;
