import React, { useState } from "react";
import {
  CaretDownOutlined,
  FilterOutlined,
  HeartOutlined,
  HolderOutlined,
  MenuOutlined,
  PhoneOutlined,
  RadarChartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="page-header">
      <div className="page-header-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="">
              <span>Get 25% discount on a first purchase</span>
            </div>
            <div className="justify-content-between align-items-center block-menu">
                <div className="item-header">
                  <ul className="list-support">
                    <li className="item-support">
                      <a className="link-item-support">Career</a>
                    </li>
                    <li className="item-support">
                      <a className="link-item-support">Help</a>
                    </li>
                    <li className="item-support">
                      <a className="link-item-support">Buyer Protection</a>
                    </li>
                  </ul>
                </div>

                <div className="item-header">
                  <HolderOutlined /> Download Mobile app
                </div>
                <div className="item-header">
                  <PhoneOutlined /> +0123 222 112 123
                </div>
                <div className="block-select-country item-header">
                  <select className="select-country" autofocus>
                    <option value="japan">🇯🇵 JAV</option>
                    <option value="vietnam">🇻🇳 VN</option>
                  </select>
                  <CaretDownOutlined className="icon-downoutlined" />
                </div>
              </div>
            {openMenu ? (
              <div className="justify-content-between align-items-center block-menu active-menu-small">
                <div className="item-header">
                  <ul className="list-support">
                    <li className="item-support">
                      <a className="link-item-support">Career</a>
                    </li>
                    <li className="item-support">
                      <a className="link-item-support">Help</a>
                    </li>
                    <li className="item-support">
                      <a className="link-item-support">Buyer Protection</a>
                    </li>
                  </ul>
                </div>

                <div className="item-header">
                  <HolderOutlined /> Download Mobile app
                </div>
                <div className="item-header">
                  <PhoneOutlined /> +0123 222 112 123
                </div>
                <div className="block-select-country item-header">
                  <select className="select-country" autofocus>
                    <option value="japan">🇯🇵 JAV</option>
                    <option value="vietnam">🇻🇳 VN</option>
                  </select>
                  <CaretDownOutlined className="icon-downoutlined" />
                </div>
              </div>
            ) : null}

            <MenuOutlined
              className="button-menu-small"
              onClick={handleOpenMenu}
            />
          </div>
        </div>
      </div>
      {/* <div className="page-header-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <RadarChartOutlined /> <strong>Chair</strong>way
            </div>
            <div className="col-5 block-form-search">
              <form className="form-search">
                <SearchOutlined className="icon-search" />
                <input placeholder="Search..."></input>
                <FilterOutlined className="icon-filter" />
              </form>
            </div>
            <div className="col-5">
              <div className="block-operation">
                <a href="">
                  <span className="quantily">0</span>
                  <HeartOutlined className="icon"></HeartOutlined>
                  <p className="content-operation">Wishlist</p>
                </a>
              </div>
              <div className="block-operation">
                <a href="">
                  <span className="quantily">0</span>
                  <ShoppingCartOutlined className="icon" />
                  <p className="content-operation">Cart</p>
                </a>
              </div>
              <div className="block-operation">
                <p className="content-operation">Categories</p>
              </div>
              <div className="block-operation">
                <UserOutlined className="icon" />
                <p className="content-operation">taoquangtruong</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}
