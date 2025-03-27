// app/products/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products.products);
   useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {products && products.length && (
      <div className="grid grid-cols-6 mt-[30px] bg-[#eeeff1] pt-[50px]">
        {products.map((product) => (
          <Link key={product.id} href={`/products/` + product.id}>
            <div className="pr-[15px] w-[217px] h-[427px] relative">
              <FontAwesomeIcon
                className="absolute right-[15px] top-[15px]"
                width={20}
                icon={faHeart}
              />
              {/* You can add the product image here */}
              <div className="bg-white">
                {/* You can display brand or other details here */}
                <p>{product.title}</p>
                <div className="flex justify-between">
                  <div>
                    {/* You can display weight here */}
                    <p>{product.price} &#x20BC;</p>
                  </div>
                  <FontAwesomeIcon width={20} icon={faCartShopping} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}</>
  );
};

export default Products;
