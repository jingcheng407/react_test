import React from "react";
import ReactDOM from "react-dom";
import { Input } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { data_list, category_list } from "./data";

function ProductRows(props) {
  return (
    <text>
      {props.data.name} {props.data.price}
    </text>
  );
}

function ProductCategoryRow(props) {
  if (props.category === props.data.category) {
    return (
      <div>
        <ProductRows data={props.data}></ProductRows>
      </div>
    );
  } else {
    return null;
  }
}
function ProductTable(props) {
  const list = props.c.map((v) => (
    <div key={v}>
      <h3>{v}</h3>
      {props.d.map((vd) => (
        <ProductCategoryRow category={v} data={vd}></ProductCategoryRow>
      ))}
    </div>
  ));
  return (
    <div>
      <h2>Name Price</h2>
      <ul>{list}</ul>
    </div>
  );
}
class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  }
}
ReactDOM.render(
  <ProductTable d={data_list} c={category_list} />,
  document.getElementById("root")
);
