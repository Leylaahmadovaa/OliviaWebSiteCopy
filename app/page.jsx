

export default function Home() {
  return (
    <>
    {/* banners */}
      <div className="flex overflow-hidden gap-[15px] px-[30px] mr-[40px] mt-[20px]">
        <img className="w-[319px]" src="https://olivia.az/media/dinarys/banner/images/web-banner_600x600_az_1.webp" alt="baner1" />
        <img className="w-[319px]" src="https://olivia.az/media/dinarys/banner/images/Parf_ml_r-60_d_k-endiriml_-veb-banner-600x600-px_1.webp" alt="baner2" />
        <img className="w-[319px]" src="https://olivia.az/media/dinarys/banner/images/Xoncha-campaign-for-web-banner-600-x-600_1.webp" alt="baner3" />
        <img className="w-[319px]" src="https://olivia.az/media/dinarys/banner/images/IMG_5020_1.webp" alt="baner4" />
        <img className="w-[319px]" src="https://olivia.az/media/dinarys/banner/images/hk_1.webp" alt="baner5" />
      </div>
      {/* bannerdən sonrakı hissələr */}
      <div className="bg-[#eeeff1] pt-[30px]">
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
          <div>
            <div>
              <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0122-1.webp" alt="product" />
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
}
