import React from "react";
import { JsonToCsv, useJsonToCsv } from "react-json-csv";

const filename = "Csv-file",
  fields = {
    index: "Index",
    guid: "GUID",
    address: "FirstName"
  },
  style = {
    padding: "5px",
  },
  data = [
    {
      index: 0,
      guid: "asdf231234",
      address: { name: "Manoj", lastName: "Ucchekar" },
    },
    { index: 1, guid: "wetr2343af" },
  ],
  text = "Convert Json to Csv";

export default class ReactJsonExcel extends React.Component {
  render() {
    return (
      <>
        <JsonToCsv
          data={data}
          filename={filename}
          fields={fields}
          style={style}
          text={text}
        />
      </>
    );
  }
}
