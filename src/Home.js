import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_img"
        alt="home_title"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home_product">
        <div className="home_row">
          <Product
            id="1"
            title="Acer laptop"
            img="https://image.shutterstock.com/image-photo/kota-kinabalu-sabah-malaysia-feb-600w-1311152021.jpg"
            pricing={1200}
            rating={5}
          />
          <Product
            id="2"
            title="Redmi Note 7 pro"
            img="https://image.shutterstock.com/z/stock-photo-jakarta-indonesia-may-the-xiaomi-redmi-note-android-smartphone-in-space-black-1394815973.jpg"
            pricing={700}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Branded Handbags"
            img="https://image.shutterstock.com/image-photo/red-elegant-female-bag-two-600w-1032419707.jpg"
            pricing={50}
            rating={5}
          />{" "}
          <Product
            id="4"
            title="Nail polish"
            img="https://image.shutterstock.com/image-photo/nail-polish-splatter-on-what-600w-306941462.jpg"
            pricing={22}
            rating={5}
          />
          <Product
            id="5"
            title="shoes"
            img="https://image.shutterstock.com/image-photo/vintage-red-shoes-on-white-600w-92008067.jpg"
            pricing={99}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="led Tv"
            img="https://image.shutterstock.com/image-photo/3d-illustration-living-room-led-600w-728233795.jpg"
            pricing={2000}
            rating={5}
          />
          <Product
            id="7"
            title="Fridge"
            img="https://image.shutterstock.com/image-illustration/modern-side-by-stainless-steel-600w-1080200909.jpg"
            pricing={1500}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
