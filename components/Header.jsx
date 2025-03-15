// "use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLessThan,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
// import { useEffect } from 'react';
export default function Header() {
  // const fetchCoins = async () => {
  //     try {
  //         const res = await fetch("http://localhost:3001/api/coins/2");
  //         if (!res.ok) {
  //             throw new Error("Network response was not ok");
  //         }
  //         const data = await res.json();
  //         console.log(data);
  //     } catch (error) {
  //         console.error("Fetch error:", error);
  //     }
  // };
  // useEffect(()=>{

  //     fetchCoins();
  // },[])

  return (
    <>
      {/* 1st */}
      <div className="bg-[#F8F6F9] w-full h-[44px] flex justify-between px-[80px] text-[18px] items-center">
        <ul className="flex gap-[25px]">
          <li>Mağazalar</li>
          <li>Korporativ Satışlar</li>
        </ul>
        <ul className="flex items-center gap-[20px]">
          <li className="flex items-center gap-[5px] text-[15px]">
            <FontAwesomeIcon icon={faUser} className="w-[15px]" /> Daxil ol
          </li>
          <li className="flex items-center gap-[5px]">
            AZ{" "}
            <FontAwesomeIcon
              icon={faLessThan}
              className="rotate-[-90deg] w-[8px]"
            />
          </li>
        </ul>
      </div>
      {/* 2nd */}
      <div className="flex justify-between px-[80px] py-[15px] items-center">
        <img
          src="https://olivia.az/media/logo/stores/2/Logo_desktop.png"
          alt="Olivia Logo"
          className="h-[30px]"
        />
        <div className="w-[830px] border-[1px] border-black  flex items-center px-[20px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[20px]" />
          <input
            placeholder="Axtarış..."
            type="text"
            className="border-none outline-none h-[41px] px-[10px]"
          />
        </div>
        <ul className="text-[14px] flex items-center gap-[30px]">
          <li className="flex gap-[10px]">
            <FontAwesomeIcon icon={faHeart} className="w-[20px]" />
            Seçilmişlər
          </li>
          <li className="flex gap-[10px]">
            <FontAwesomeIcon icon={faCartShopping} className="w-[20px]" />
            Səbət
          </li>
        </ul>
      </div>
      {/* 3rd */}
      <div className="border-t-2 border-b-2 h-[50px] w-full px-[50px] flex items-center">
        <ul className="flex gap-[22px] text-[15.5px]">
          <li className="cursor-pointer">Kampaniya</li>
          <li className="cursor-pointer">Brands</li>
          <li className="cursor-pointer">Makiyaj</li>
          <li className="cursor-pointer">Üzə qulluq</li>
          <li className="cursor-pointer">Bədənə qulluq və vanna</li>
          <li className="cursor-pointer">Saçlara qulluq</li>
          <li className="cursor-pointer">Sağlamlıq və baxım</li>
          <li className="cursor-pointer">Ətriyyat</li>
          <li className="cursor-pointer">Uşaqlar üçün</li>
          <li className="cursor-pointer">Kişilər üçün</li>
          <li className="cursor-pointer">Ev və bağ üçün</li>
          <li className="cursor-pointer">Geyim və aksesuarlar</li>
          <li className="cursor-pointer">Dəstlər</li>
        </ul>
      </div>
    </>
  );
}
