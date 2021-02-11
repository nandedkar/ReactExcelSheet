import React, { Component } from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const dataSet1 = [
  {
    columns: [
      { title: "Headings", width: { wpx: 80 } }, //pixels width
      { title: "Text Style", width: { wch: 40 } }, //char width
      { title: "Colors", width: { wpx: 90 } },
    ],
    data: [
      {
        name: "Johson",
        amount: 30000,
        sex: "M",
        is_married: true,
      },
      {
        name: "Monika",
        amount: 355000,
        sex: "F",
        is_married: false,
      },
      {
        name: "John",
        amount: 250000,
        sex: "M",
        is_married: false,
      },
      {
        name: "Josef",
        amount: 450500,
        sex: "M",
        is_married: true,
      },
    ],
  },
];

const multiDataSet = [
  {
    columns: [
      {
        title: "Name",
        width: { wpx: 80 },
        style: { font: { sz: "16", bold: true },border:{top:{style: "thick", rgb: "FFFFAA00"}} },
      }, //pixels width
      {
        title: "Age",
        width: { wch: 40 },
        style: {
          font: { sz: "16", bold: true },
          alignment: { horizontal: "center" },
        },
      }, //char width
      {
        title: "Country",
        width: { wpx: 90 },
        style: {
          font: { sz: "16", bold: true },
          alignment: { horizontal: "center" },
        },
      },
    ],
    data: [
      [
        { value: "H1", style: { font: { sz: "24", bold: true } } },
        { value: "Bold", style: { font: { bold: true } } },
        {
          value: "Red",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFFF0000" } },
          },
        },
      ],
      [{ value: "Manoj" }, { value: "Ucchekar" }, { value: "Red" }],
      [
        { value: "H2", style: { font: { sz: "18", bold: true } } },
        { value: "underline", style: { font: { underline: true } } },
        {
          value: "Blue",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FF0000FF" } },
          },
        },
      ],
      [
        { value: "H3", style: { font: { sz: "14", bold: true } } },
        { value: "italic", style: { font: { italic: true } } },
        {
          value: "Green",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FF00FF00" } },
          },
        },
      ],
      [
        { value: "H4", style: { font: { sz: "12", bold: true } } },
        { value: "strike", style: { font: { strike: true } } },
        {
          value: "Orange",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
          },
        },
      ],
      [
        { value: "H5", style: { font: { sz: "10.5", bold: true } } },
        { value: "outline", style: { font: { outline: true } } },
        {
          value: "Yellow",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFFFFF00" } },
          },
        },
      ],
      [
        { value: "H6", style: { font: { sz: "7.5", bold: true } } },
        { value: "shadow", style: { font: { shadow: true } } },
        {
          value: "Light Blue",
          style: {
            fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } },
          },
        },
      ],
    ],
  },
];

class AppExcel extends Component {
  render() {
    return (
      <div>
        <ExcelFile element={<button>Download Data With Styles</button>}>
          <ExcelSheet dataSet={multiDataSet} name="Organization" />
        </ExcelFile>
      </div>
    );
  }
}

export default AppExcel;
