import { PlusOutlined, ThunderboltOutlined } from "@ant-design/icons";
import React from "react";
import { ListImage } from "../../ListImage";

export default function Home3() {
  return (
    <main>
      <section className="section__hero">
        <div className="container">
          <div className="hero__content">
            <h3 className="hero__title">
              Discover, collect, and sell extraordinary{" "}
              <span className="sub__title">NFTs</span>
            </h3>
            <p className="hero__description">
              NFT is the world's first and largest NFT marketplace
            </p>
            <div className="group_btnHero">
              <button className="btn__NFT">
                <ThunderboltOutlined /> Explore
              </button>
              <button className="btn btn__create">
                <PlusOutlined /> Create
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section__help">
        <div className="container">
          <h2 className="title__section">How it Works</h2>
          <div className="list__iconBox">
            <div className="item__iconBox">
              <div className="item__icon">
                <img src={ListImage.wallet}></img>
              </div>
              <h3 className="title__box">Set up your Wallet</h3>
              <p className="description__box">
                Once you’ve set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
            <div className="item__iconBox">
              <div className="item__icon">
                <img src={ListImage.wallet}></img>
              </div>
              <h3 className="title__box">Set up your Wallet</h3>
              <p className="description__box">
                Once you’ve set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
            <div className="item__iconBox">
              <div className="item__icon">
                <img src={ListImage.wallet}></img>
              </div>
              <h3 className="title__box">Set up your Wallet</h3>
              <p className="description__box">
                Once you’ve set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
            <div className="item__iconBox">
              <div className="item__icon">
                <img src={ListImage.wallet}></img>
              </div>
              <h3 className="title__box">Set up your Wallet</h3>
              <p className="description__box">
                Once you’ve set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__silder">
        <div className="container flex align-items-center justify-content-between">
          <h2 className="title__section">Live Auctions</h2>
          <button className="btn__NFT"><ThunderboltOutlined /> Explore</button>
        </div>
        <div className="slider__content">
          
        </div>
      </section>
    </main>
  );
}
