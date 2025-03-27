"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.products.products
  );
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
              <div className="mt-[30px]">
                <div
                  key={product.id}
                  className="pr-[15px] w-[217px] h-[440px] relative bg-white"
                >
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
