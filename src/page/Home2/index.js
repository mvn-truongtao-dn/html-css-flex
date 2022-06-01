import { LeftOutlined, RightOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { ListImage } from "../../ListImage";

export default function Home2() {
  return (
    <main>
      <section className="section-category-product">
        <div className="container content-category-product">
          <p className="category-product">Categorías</p>
          <h3 className="title-section">Las favoritas</h3>
          <div className="list-category-product flex">
            <div className="item-cateogry">
              <div className="icon-item-category">
                <img src={ListImage.pizza}></img>
                <span className="qty-product-category">20</span>
              </div>
              <p className="title-item-category">Pizza</p>
              <p className="subtitle-item-category">Desde $60</p>
            </div>
            <div className="item-cateogry">
              <div className="icon-item-category">
                <img src={ListImage.cake}></img>
                <span className="qty-product-category">20</span>
              </div>
              <p className="title-item-category">Pizza</p>
              <p className="subtitle-item-category">Desde $60</p>
            </div>
            <div className="item-cateogry">
              <div className="icon-item-category">
                <img src={ListImage.sushi}></img>
                <span className="qty-product-category">20</span>
              </div>
              <p className="title-item-category">Pizza</p>
              <p className="subtitle-item-category">Desde $60</p>
            </div>
            <div className="item-cateogry">
              <div className="icon-item-category">
                <img src={ListImage.hamburger}></img>
                <span className="qty-product-category">20</span>
              </div>
              <p className="title-item-category">Pizza</p>
              <p className="subtitle-item-category">Desde $60</p>
            </div>
            <div className="item-cateogry">
              <div className="icon-item-category">
                <img src={ListImage.watermelon}></img>
                <span className="qty-product-category">20</span>
              </div>
              <p className="title-item-category">Pizza</p>
              <p className="subtitle-item-category">Desde $60</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-drinks-product">
        <div className="container">
          <p className="drinks-product">Fonditas</p>
          <h3 className="title-section">Las favoritas</h3>
          <div className="group-action-slider flex align-items-center">
            <p className="description-drinks-category">
              ‘Estás son las fondas que se encuentran cerca!
            </p>
            <div className="flex align-items-center p-5">
              <p className="btn-seenAll">Ver todas</p>
              <div className="btn-next-prev">
                <button className="btn btn-cart mr-5">
                  <LeftOutlined />
                </button>
                <button className="btn btn-cart">
                  <RightOutlined />
                </button>
              </div>
            </div>
          </div>

          <div className="list-drink-product">
            <div className="item-drink">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-drink">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className=" flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-drink">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className=" flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-drink">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__poster">
        <div className="poster__left">
          <img src={ListImage.map} className="img-map"></img>
          <img src={ListImage.filter} className="img-filter"></img>
        </div>
        <div className="poster__right">
          <p className="drinks-product">mapa</p>
          <h3 className="title-section">
            Encuentra en el mapa las mejores fondas
          </h3>
          <p className="description-drinks-category mb-10">
            Encuentra las fondas cercanas por sí quieres hacer pick up directo
            en las tiendas.
          </p>
          <div className="form-input-address flex aligin-items-center">
            <input type="text" placeholder="Tu código postal" />
            <button className="btn btn-search">Buscar en mapa</button>
          </div>
        </div>
      </section>
      <section className="section-drinks-product">
        <div className="container">
          <p className="drinks-product">Fonditas</p>
          <h3 className="title-section">Las favoritas</h3>
          <div className="group-action-slider flex align-items-center">
            <p className="description-drinks-category">
              ‘Estás son las fondas que se encuentran cerca!
            </p>
            <div className="flex align-items-center p-5">
              <p className="btn-seenAll">Ver todas</p>
              <div className="btn-next-prev">
                <button className="btn btn-cart mr-5">
                  <LeftOutlined />
                </button>
                <button className="btn btn-cart">
                  <RightOutlined />
                </button>
              </div>
            </div>
          </div>

          <div className="list-product">
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
            <div className="item-product">
              <div className="image-item-drink">
                <img src={ListImage.imageDrink}></img>
                <span className="rating-product-drink">
                  <StarOutlined /> 9.5
                </span>
              </div>
              <div className="content-card-drink">
                <p className="title-item-category">Pizza</p>
                <div className="flex justify-content-between align-items-center">
                  <p className="time-shipper">Desde $60</p>
                  <p className="category-card">Fonditas</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
}
