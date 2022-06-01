import { Col, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { ListItem } from "../../../ListImage";
export default function Header2() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src={ListItem.Frame} alt="" />
          </div>
          <div className="col-4 input-search">
            <span>All Categories</span>
            <input type="text" placeholder="Search for items..." />
          </div>
          <div className="col-4">
            b
          </div>
        </div>
      </div>
    </header>
  );
}
