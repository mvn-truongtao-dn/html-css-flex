import {
  PlusCircleOutlined,
  PropertySafetyOutlined,
  SafetyOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="section-feature-content">
          <div className="block-feature-content">
            <h4 className="title-feature">
              OLY & BARK Napa Sofa in Full-Grain Pure-Aniline Italian Feather
            </h4>
            <div className="ratings">
              <StarOutlined className="rating" />
              <StarOutlined className="rating" />
              <StarOutlined className="rating" />
              <StarOutlined className="rating" />
              <StarOutlined className="rating" />
              <span className="qty-rating">(234)</span>
            </div>
            <div className="group-btn-feature flex">
              <div className="AddToCart">
                <button className="btn btn-AddToCart">
                  <ShoppingCartOutlined className="icon-cart" />
                  $15,230
                </button>
              </div>
              <div className="btn-favorite">
                <button className="btn">
                  <SafetyOutlined />
                </button>
              </div>
            </div>
            <p>
              <PropertySafetyOutlined /> Mone back guarantee
            </p>
          </div>
          <button className="btn btn-limited">Limited Product</button>
        </section>
        <section className="row">
          <div className="col-5 category-product1">
            <div className="category-product-content">
              <h4 className="">Chairs</h4>
              <span>12 brands, 9,4k products</span>
            </div>
          </div>
          <div className="col-7 category-product2">
          <div className="category-product-content">
              <h4 className="">Table</h4>
              <span>12 brands, 9,4k products</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
