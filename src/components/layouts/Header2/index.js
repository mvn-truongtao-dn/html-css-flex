import {
  FacebookOutlined,
  InstagramOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import { ListImage } from "../../../ListImage";
export default function Header2() {
  return (
    <header className="page-header">
      <div className="container ">
        <div className="flex justify-content-between p-10 align-items-center">
          <h1 className="logo">Fonditas</h1>
          <nav>
            <ul className="list-item-menu">
              <li className="item-menu">
                <a href="#" className="link-menu">
                  Nosotros
                </a>
              </li>
              <li className="item-menu">
                <a href="#" className="link-menu">
                  Nosotros
                </a>
              </li>
              <li className="item-menu">
                <a href="#" className="link-menu">
                  Nosotros
                </a>
              </li>
              <li className="item-menu">
                <a href="#" className="link-menu">
                  Nosotros
                </a>
              </li>
            </ul>
          </nav>
          <div className="group-action">
            <button className="btn-login">Inicia sesión</button>
            <button className="btn-cart">
              <ShoppingCartOutlined className="icon" />
            </button>
          </div>
          <MenuOutlined className="icon btn-menu-respond"/>
        </div>
        <div className="block-feature">
          <div className="content-feature">
            <h3 className="title-feature">De tu fonda favorita</h3>
            <h2 className="content">
              La comida que ya conoces al mejor precio
            </h2>
            <div className="form-input-favorite">
              <input
                type="text"
                placeholder="Busca tu platillo favorito"
              ></input>
              <button className="btn btn-search">Buscar</button>
            </div>
          </div>
          <img src={ListImage.food2} alt="food2" className="food2"></img>
          <img src={ListImage.food1} alt="food1" className="food1"></img>
          <img src={ListImage.food3} alt="food3" className="food3"></img>
          <div></div>
        </div>
        <div className="group-contact">
          <button className="btn-cart">
            <FacebookOutlined className="icon" />
          </button>
          <button className="btn-cart">
            <InstagramOutlined className="icon" />
          </button>
          <button className="btn-cart">
            <TwitterOutlined className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
