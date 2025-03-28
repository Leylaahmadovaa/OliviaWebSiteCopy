export async function GET() {
  return new Response(
    JSON.stringify({
      products: [
        {
          id: 1,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qara",
          brand: "PAESE",
          weight: "10.5 ml",
          price: 17.99,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 2,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0086-1.webp",
          title: "Tuş Vivienne Sabo Artistic Volume Cabaret Premiere 01",
          brand: "VIVIENNE SABO",
          weight: "9 ml",
          price: 11.39,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 3,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0116-1.webp",
          title: "Tuş Maybelline Sky High Qara",
          brand: "MAYBELLINE",
          weight: "7.2 ml",
          price: 20.29,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 4,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0122-1.webp",
          title: "Tuş Maybelline New York Lash Sensational Qara",
          brand: "MAYBELLINE",
          weight: "10.5 ml",
          price: 17.99,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 5,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/0/0/00-00015037_1.webp",
          title: "Tuş Wet N Wild Mega Volume Mascara Very Black",
          brand: "Wet N Wild",
          weight: "6 ml",
          price: 10.99,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 6,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0106-1.webp",
          title: "Tuş Loreal Telescopic Qara",
          brand: "LOREAL",
          weight: "7 ml",
          price: 25.79,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 7,
          image:
            "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-mc-0128.png",
          title: "Tuş Loreal Telescopic Lift Ekstra Qara",
          brand: "LOREAL",
          weight: "9.9 ml",
          price: 28.39,
          category: "Kirpiklər üçün tuş",
        },
        {
          id: 8,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-11t102943.825.webp",
          title: "Dodaq Boyası Luxvisage Pin Up Ultra Matt 504",
          brand: "LUXVISAGE",
          weight: "4 gr",
          price: 4.99,
          category: "Dodaqlar üçün",
        },
        {
          id: 9,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-08t113838.230.webp",
          title: "Dodaq Karandaşı Luxvisage 54",
          brand: "LUXVISAGE",
          weight: "1.75 gr",
          price: 6.99,
          category: "Dodaqlar üçün",
        },
        {
          id: 10,
          image:
            "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/-/_-_2023-05-15t113100.522.png",
          title: "Dodaq Parladıcı Eveline Fruity Smoothie Böyürtkən 12 ml",
          brand: "EVELINE",
          weight: "12 ml",
          price: 3.79,
          category: "Dodaqlar üçün",
        },
        {
          id: 11,
          image:
            "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-dp-0290-1.png",
          title: "Dodaq Boyası Maybelline Super Stay Vinyl Ink 15",
          brand: "MAYBELLINE",
          weight: "4.2 ml",
          price: 20.69,
          category: "Dodaqlar üçün",
        },
        {
          id: 12,
          image:
            "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/0/0/00-00008536_1.webp",
          title: "Dodaq Boyası Maybelline Super Stay Vinyl Ink 35",
          brand: "MAYBELLINE",
          weight: "4.2 ml",
          price: 20.69,
          category: "Dodaqlar üçün",
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
