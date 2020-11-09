import React from "react";
import ReactDOM from "react-dom";
import { Input, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { data_list, category_list } from "./data";

function ProductRows(props) {
  return (
    <text>
      {props.data.name} {props.data.price} {props.data.stocked.toString()}
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
      {list}
    </div>
  );
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }

  onCheckboxChange() {
    this.setState((input) => ({
      input: input,
    }));
  }
  render() {
    return (
      <div>
        <Input
          placeholder="Search"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <Checkbox onChange={this.onCheckboxChange}>只显示有库存</Checkbox>
      </div>
    );
  }
}

function FilterableProductTable(props) {
  
  return (
    <div>
      <SearchBar></SearchBar>

      <ProductTable d={props.d} c={props.c} />
    </div>
  );
}
ReactDOM.render(
  <FilterableProductTable d={data_list} c={category_list} />,
  document.getElementById("root")
);
