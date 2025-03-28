"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { categoryAtSaleLeadersActions } from "../../store/categoryAtSaleLeadersSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products.products);
  const categoryAtSaleLeaders = useSelector(
    (state) => state.categoryAtSaleLeaders.currentCategoryAtSaleLeaders
  );
  
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      dispatch(categoryAtSaleLeadersActions.changeCategoryAtSaleLeaders(savedCategory));
    }
  }, [dispatch]);
  

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Seçilmiş category:", categoryAtSaleLeaders);
  
    if (Array.isArray(products)) {
      setFilteredProducts(
        products.filter((product) => product.category === categoryAtSaleLeaders)
      );
    } else {
      setFilteredProducts([]);
    }
  }, [products, categoryAtSaleLeaders]);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-6 bg-[#eeeff1] pt-[50px]">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="pr-[15px] w-[217px] h-[450px] relative bg-white border-r-[18px] border-[#eeeff1]"
          >
            <Link href={`/products/${product.id}`}>
              <div>
                <FontAwesomeIcon
                  className="absolute right-[15px] z-[1] top-[15px] text-gray-400 text-[25px]"
                  width={20}
                  icon={faHeart}
                />
                <img
                  src={product.image}
                  alt={product.title}
                  className="translate-x-2 mt-[50px]"
                />
                <div className="bg-white h-[170px] flex flex-col justify-between pt-[50px] pl-[20px]">
                  <div>
                    <p className="text-gray-500 text-[12px]">{product.brand}</p>
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
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-5 col-span-6">
          Məhsul tapılmadı
        </p>
      )}
    </div>
  );
};

export default Products;
