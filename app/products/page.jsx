"use client";
import React from "react";
import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    products && (
      <div className="grid grid-cols-6 mt-[30px] bg-[#eeeff1] pt-[50px]">
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
      </div>
    )
  );
};

export default Products;
