import React from "react";
import { Col } from "antd";

// 760 640
const style = { background: "#0092ff", padding: "8px 0", height: "300px" };
const CoffeePage_Product = ({ title, img }) => {
  return (
    <Col xs={12} sm={8} md={6}>
      <div className="wrapper" style={style}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </div>
    </Col>
  );
};

export default CoffeePage_Product;
