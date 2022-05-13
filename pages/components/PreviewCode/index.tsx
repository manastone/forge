import { FunctionComponent, useEffect, useState } from "react";
import { atomOneLight, CopyBlock } from "react-code-blocks";

const PreviewCode: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div>
      <div>toolbar</div>
      <div>
        <div>{props.children}</div>
        {props.code ? (
          <div>
            <PreviewCodeIDE code={props.code} lang={props.lang} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PreviewCode;

const PreviewCodeIDE = ({ ...props }) => {
  const [lang, setLang] = useState("jsx");

  useEffect(() => {
    if (props.lang) setLang(props.lang);
  }, []);

  return (
    <CopyBlock
      language={lang}
      text={props.code}
      showLineNumbers={true}
      theme={atomOneLight}
      wrapLines={true}
      codeBlock
    />
  );
};
