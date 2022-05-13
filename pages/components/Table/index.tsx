import { FunctionComponent } from "react";

const Table: FunctionComponent<any> = ({ header, data }) => {
  const Col = (el: any) => {
    const reponse = header.map((item: any, index: number) => {
      return (
        <td key={el.values[item.name] + "-" + index}>{el.values[item.name]}</td>
      );
    });
    return reponse;
  };

  return (
    <table>
      {header ? (
        <thead>
          <tr>
            {header.map((item: any, index: number) => (
              <th key={item + "-" + index}>{item.name}</th>
            ))}
          </tr>
        </thead>
      ) : (
        ""
      )}
      {data ? (
        <tbody>
          {data.map((line: any, index: number) => (
            <tr key={line + "-" + index}>
              <Col values={line} />
            </tr>
          ))}
        </tbody>
      ) : (
        "No Data"
      )}
    </table>
  );
};

export default Table;
