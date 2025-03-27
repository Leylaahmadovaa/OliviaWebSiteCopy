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
  const { products, loading, error } = useSelector(
    (state) => state.products.products
  );

  const fetchBanners = async () => {
    try {
      const res = await fetch("/api/banners");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setBanners(data.banners);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
          draggable={true}
        >
          {banners &&
            banners.map((banner) => (
              <img
                key={banner.id}
                className="pr-[15px]"
                src={banner.url}
                alt={`banner ` + banner.id}
              />
            ))}
        </Carousel>
      </div>
      {/* bannerdən sonrakı hissələr */}
      <div className="bg-[#eeeff1] py-[30px] mt-[20px]">
        {/* Satış liderləri */}
        <div className="ml-[75px] mt-[20px]">
          <h1 className="text-[25px] mb-[30px]">Satış liderləri</h1>
          {/* sub headers */}
          <ul className="flex gap-[30px] text-gray-500 text-[18px]">
            <li className="cursor-pointer text-black font-semibold">Kirpiklər üçün tuş</li>
            <li className="cursor-pointer">Dodaqlar üçün</li>
            <li className="cursor-pointer">Tonal kremlər</li>
            <li className="cursor-pointer">Konsilerlər</li>
            <li className="cursor-pointer">Göz laynerləri</li>
          </ul>
          {/* products */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {products && products.length && (
            <div className="mt-[30px]">
              <Carousel
                slidesToShow={6}
                arrows={true}
                slidesToScroll={1}
                draggable={true}
                className="w-[1400px]"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="pr-[15px] w-[217px] h-[450px] relative bg-white border-r-[18px] border-[#eeeff1]"
                  >
                    <div>
                    <FontAwesomeIcon
                      className="absolute right-[15px] z-[1] top-[15px] text-gray-400 text-[25px]"
                      width={20}
                      icon={faHeart}
                    />
                    <img
                      src={product.image}
                      alt="product"
                      className="translate-x-2 mt-[50px]"
                    />
                    <div className="bg-white h-[170px] flex flex-col justify-between pt-[50px] pl-[20px]">
                      <div>
                        <p className="text-gray-500 text-[12px]">
                          {product.brand}
                        </p>
                        <p className="font-semibold">{product.title}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-[11px]">
                            {product.weight}
                          </p>
                          <p className="font-bold mt-[2px] mb-[20px]">
                            {product.price} &#x20BC;
                          </p>
                        </div>
                        <FontAwesomeIcon
                          width={20}
                          icon={faCartShopping}
                          className="text-[20px] text-gray-400"
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {/* button */}
          <div className="flex justify-center">
            <Link href="/products">
              <p className="w-[300px] text-center bg-white mt-[20px] py-[10px] cursor-pointer">
                Bütün təklifləri gör
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
