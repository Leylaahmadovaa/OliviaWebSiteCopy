"use client";
import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Carousel } from "@node_modules/antd/es";
import Link from "@node_modules/next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { categoryAtSaleLeadersActions } from "../store/categoryAtSaleLeadersSlice";
export default function Home() {
  const [banners, setBanners] = useState([]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.products.products
  );
  const categoryAtSaleLeaders = useSelector(
    (state) => state.categoryAtSaleLeaders.currentCategoryAtSaleLeaders
  );

  const fetchBanners = async () => {
    try {
      const res = await fetch("/api/banners");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setBanners(data.banners);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  function handleChangeCategoryAtSatisLiderleri(category) {
    dispatch(categoryAtSaleLeadersActions.changeCategoryAtSaleLeaders(category));
    localStorage.setItem("selectedCategory", category);
  }

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      dispatch(categoryAtSaleLeadersActions.changeCategoryAtSaleLeaders(savedCategory));
    }
  }, [dispatch]);

  useEffect(() => {
    if (categoryAtSaleLeaders) {
      localStorage.setItem("selectedCategory", categoryAtSaleLeaders);
    }
  }, [categoryAtSaleLeaders]);

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
          <ul className="flex gap-[30px] text-[18px] h-[40px]">
            <li
            onClick={()=>handleChangeCategoryAtSatisLiderleri("Kirpiklər üçün tuş")}
            className="cursor-pointer hover:border-b-[1px] pb-[10px] border-black hover:text-black hover:translate-y-[-1px]"
            style={{
              color:categoryAtSaleLeaders=="Kirpiklər üçün tuş"?"black":"gray",
              fontWeight:categoryAtSaleLeaders=="Kirpiklər üçün tuş"?"600":"400"
            }}
            >Kirpiklər üçün tuş</li>
            <li
            onClick={()=>handleChangeCategoryAtSatisLiderleri("Dodaqlar üçün")}
            className="cursor-pointer hover:border-b-[1px] pb-[10px] border-black hover:text-black hover:translate-y-[-1px]"
            style={{
              color:categoryAtSaleLeaders=="Dodaqlar üçün"?"black":"gray",
              fontWeight:categoryAtSaleLeaders=="Dodaqlar üçün"?"600":"400"
            }}
            >Dodaqlar üçün</li>
            <li
            onClick={()=>handleChangeCategoryAtSatisLiderleri("Tonal kremlər")}
            className="cursor-pointer hover:border-b-[1px] pb-[10px] border-black hover:text-black hover:translate-y-[-1px]"
            style={{
              color:categoryAtSaleLeaders=="Tonal kremlər"?"black":"gray",
              fontWeight:categoryAtSaleLeaders=="Tonal kremlər"?"600":"400"
            }}
            >Tonal kremlər</li>
            <li
            onClick={()=>handleChangeCategoryAtSatisLiderleri("Konsilerlər")}
            className="cursor-pointer hover:border-b-[1px] pb-[10px] border-black hover:text-black hover:translate-y-[-1px]"
            style={{
              color:categoryAtSaleLeaders=="Konsilerlər"?"black":"gray",
              fontWeight:categoryAtSaleLeaders=="Konsilerlər"?"600":"400"
            }}
            >Konsilerlər</li>
            <li
            onClick={()=>handleChangeCategoryAtSatisLiderleri("Göz laynerləri")}
            className="cursor-pointer hover:border-b-[1px] pb-[10px] border-black hover:text-black hover:translate-y-[-1px]"
            style={{
              color:categoryAtSaleLeaders=="Göz laynerləri"?"black":"gray",
              fontWeight:categoryAtSaleLeaders=="Göz laynerləri"?"600":"400"
            }}
            >Göz laynerləri</li>
          </ul>

          {/* products */}
          <div className="h-[450px]">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {products && products.length && (
            <div className="mt-[30px]">
            {products.some(product => product.category === categoryAtSaleLeaders) ? (
              <Carousel
                slidesToShow={6}
                arrows={true}
                slidesToScroll={1}
                draggable={true}
                className="w-[1400px]"
              >
                {products
                  .filter(product => product.category === categoryAtSaleLeaders)
                  .map((product) => (
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
                            <p className="text-gray-500 text-[12px]">{product.brand}</p>
                            <p className="font-semibold">{product.title}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-gray-500 text-[11px]">{product.weight}</p>
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
            ) : (
              <p className="text-center text-gray-500 mt-5">Məhsul tapılmadı</p>
            )}
          </div>
          )}
          </div>

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
