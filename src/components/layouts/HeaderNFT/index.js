import React from "react";
import { ListImage } from "../../../ListImage";
import { BorderOutlined } from "@ant-design/icons";
export default function HeaderNFT() {
  return (
    <header className="page-headerNFT">
      <div className="header__content container flex align-items-center justify-content-between">
        <div className="flex align-items-center">
          <div className="logo flex align-items-center mr-10">
            <img src={ListImage.logo}></img>
            <h1>Ultra NFT</h1>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="flex align-items-center">
          <nav>
            <ul className="list__item-menu">
              <li className="item__menu">
                <a href="#" className="link__item">
                  Home
                </a>
              </li>
              <li className="item__menu">
                <a href="#" className="link__item">
                  Explore
                </a>
              </li>
              <li className="item__menu">
                <a href="#" className="link__item">
                  Pages
                </a>
              </li>
              <li className="item__menu">
                <a href="#" className="link__item">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <button className="btn btn__NFT">
            <BorderOutlined /> Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
