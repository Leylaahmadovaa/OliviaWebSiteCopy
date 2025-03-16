"use client";
import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Carousel } from "@node_modules/antd/es";
import Link from "@node_modules/next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
export default function Home() {
  const [banners, setBanners] = useState([]);

  const dispatch = useDispatch();

  // Step 1: Access product state using useSelector
  const { products, loading, error } = useSelector((state) => state.products);

  // Step 2: Dispatch the fetchProducts action when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const fetchBanners = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/banners");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      setBanners(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <>
      {/* banners */}
      <div className="flex gap-[15px] px-[30px] ml-[40px] mt-[20px]">
        <Carousel
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          className="w-[1380px]"
        >
          {banners &&
            banners.map((banner) => (
              <img
                key={banner.id}
                className="pr-[15px]"
                src={banner.img}
                alt={`banner ` + banner.id}
              />
            ))}
        </Carousel>
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

          {loading&&<div>Loading...</div>}
          {error &&<div>Error: {error}</div>}
          {!products.length&& <div>No products available</div>}
          {products.length && (
            <div className="mt-[30px]">
              <Carousel
                slidesToShow={6}
                arrows={true}
                slidesToScroll={1}
                draggable={true}
                className="w-[1480px] px-[20px]"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="pr-[15px] w-[217px] h-[427px] relative"
                  >
                    <FontAwesomeIcon
                      className="absolute right-[15px] top-[15px]"
                      width={20}
                      icon={faHeart}
                    />
                    <img src={product.img} alt="product" />
                    <div className="bg-white">
                      <p>{product.brand}</p>
                      <p>{product.title}</p>
                      <div className="flex justify-between">
                        <div>
                          <p>{product.weight} ml</p>
                          <p>{product.price} &#x20BC;</p>
                        </div>
                        <FontAwesomeIcon width={20} icon={faCartShopping} />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {/* button */}
          <Link href="/products">
            <div className="flex justify-center">
              <p className="w-[300px] text-center bg-white mt-[20px] py-[10px] cursor-pointer">
                Bütün təklifləri gör
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
