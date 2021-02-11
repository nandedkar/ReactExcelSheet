import React, { Component } from "react";
import Example from "./ExcelWorkBook";
import Download from "./ExportExcel";
import NewExcel from "./ExportExcel1";
import AppExcel from "./ExportExcel2";
import FormatExcel from "./FormatExcel";
import ReactJsonExcel from "./ReactJsonExcel";

class App extends Component {
  constructor(props) {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.myRef.current);
  }
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Download />
        <NewExcel />
        <AppExcel />
        <FormatExcel />
        <Example />
        <ReactJsonExcel /> 
      </>
    );
  }
}
export default App;
