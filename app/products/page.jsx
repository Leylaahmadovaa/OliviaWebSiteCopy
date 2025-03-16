"use client";
import React from "react";
import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import Link from "@node_modules/next/link";
const Products = () => {
    const dispatch = useDispatch();

    // Step 1: Access product state using useSelector
    const { products, loading, error } = useSelector((state) => state.products);
  
    // Step 2: Dispatch the fetchProducts action when the component mounts
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!products.length) {
        return <div>No products available</div>;
      }
  return (
    products && (
      <div className="grid grid-cols-6 mt-[30px] bg-[#eeeff1] pt-[50px]">
          {products.map((product) => (
            <Link 
            key={product.id}
            href={`/products/`+product.id}>
            <div
              
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
            </Link>
          ))}
      </div>
    )
  );
};

export default Products;
