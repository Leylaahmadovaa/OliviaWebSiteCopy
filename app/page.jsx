"use client"

import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function Home() {
  const [products,setProducts]=useState([])
    const fetchCoins = async () => {
      try {
          const res = await fetch("http://localhost:3000/api/products");
          if (!res.ok) {
              throw new Error("Network response was not ok");
          }
          const data = await res.json();
          console.log(data);
          setProducts(data)
      } catch (error) {
          console.error("Fetch error:", error);
      }
  };
  useEffect(()=>{
      fetchCoins();
  },[])
  return (
    <>
      {/* banners */}
      <div className="flex overflow-hidden gap-[15px] px-[30px] mr-[40px] mt-[20px]">
        <img
          className="w-[319px]"
          src="https://olivia.az/media/dinarys/banner/images/web-banner_600x600_az_1.webp"
          alt="baner1"
        />
        <img
          className="w-[319px]"
          src="https://olivia.az/media/dinarys/banner/images/Parf_ml_r-60_d_k-endiriml_-veb-banner-600x600-px_1.webp"
          alt="baner2"
        />
        <img
          className="w-[319px]"
          src="https://olivia.az/media/dinarys/banner/images/Xoncha-campaign-for-web-banner-600-x-600_1.webp"
          alt="baner3"
        />
        <img
          className="w-[319px]"
          src="https://olivia.az/media/dinarys/banner/images/IMG_5020_1.webp"
          alt="baner4"
        />
        <img
          className="w-[319px]"
          src="https://olivia.az/media/dinarys/banner/images/hk_1.webp"
          alt="baner5"
        />
      </div>
      {/* bannerdən sonrakı hissələr */}
      <div className="bg-[#eeeff1] py-[30px]">
        {/* Satış liderləri */}
        <div className="ml-[30px] mt-[20px]">
          <h1 className="text-[25px] mb-[30px]">Satış liderləri</h1>
          {/* sub headers */}
          <ul className="flex gap-[30px] text-[18px]">
            <li>Kirpiklər üçün tuş</li>
            <li>Dodaqlar üçün</li>
            <li>Tonal kremlər</li>
            <li>Konsilerlər</li>
            <li>Göz laynerləri</li>
          </ul>
          {/* products */}
          {products&&
          <div className="grid grid-cols-6 mt-[30px]">
            {products.map(product=><div
            key={product.id}
            className="w-[217px] h-[427px] relative bg-white">
              <FontAwesomeIcon
                className="absolute right-[15px] top-[15px]"
                width={20}
                icon={faHeart}
              />
              <img
                src={product.img}
                alt="product"
              />
              <p>{product.brand}</p>
              <p>{product.title}</p>
              <div className="flex justify-between">
                <div>
                  <p>{product.weight} ml</p>
                  <p>{product.price} &#x20BC;</p>
                </div>
                <FontAwesomeIcon width={20} icon={faCartShopping} />
              </div>
            </div>)}
          </div>}
          {/* button */}
          <div className="flex justify-center">
            <p className="w-[300px] text-center bg-white mt-[20px] py-[10px] cursor-pointer">
            Bütün təklifləri gör
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
