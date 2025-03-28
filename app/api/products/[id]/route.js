import { NextResponse } from "next/server";
const products = [
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
  {
    id: 13,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-lg-0131-1.png",
    title: "Dodaq Parladıcı Maybelline Lifter Gloss 002",
    brand: "MAYBELLINE",
    weight: "5.4 ml",
    price: 16.89,
    category: "Dodaqlar üçün",
  },
  {
    id: 14,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-lg-0133.png",
    title: "Dodaq Parladıcı Maybelline Lifter Gloss 009",
    brand: "MAYBELLINE",
    weight: "5.4 ml",
    price: 16.89,
    category: "Dodaqlar üçün",
  },
  {
    id: 15,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/d/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-136_png_1.png",
    title: "Tonal Krem Pierre Rene Advanced Lift Fluid 03",
    brand: "PIERRE RENE",
    weight: "30 ml",
    price: 29.99,
    category: "Tonal kremlər",
  },
  {
    id: 16,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/d/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-137_png_1.png",
    title: "Tonal Krem Pierre Rene Advanced Lift Fluid 04",
    brand: "PIERRE RENE",
    weight: "30 ml",
    price: 29.99,
    category: "Tonal kremlər",
  },
  {
    id: 17,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/d/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-139_png.png",
    title: "Tonal Krem Pierre Rene Skin Balance Cover 19",
    brand: "PIERRE RENE",
    weight: "30 ml",
    price: 26.99,
    category: "Tonal kremlər",
  },
  {
    id: 18,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/1/_18__12_4.png",
    title: "Tonal Krem Paese Long Cover Fluid Ivory 0.5",
    brand: "PAESE",
    weight: "30 ml",
    price: 24.99,
    category: "Tonal kremlər",
  },
  {
    id: 19,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-tk-0081-1.png",
    title: "Tonal Krem Belordesign BB Funhouse Skin Teen 51",
    brand: "BELORDESIGN",
    weight: "25 gr",
    price: 15.99,
    category: "Tonal kremlər",
  },
  {
    id: 20,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-tk-0136.png",
    title: "Tonal Krem Loreal Infaillible 130",
    brand: "LOREAL",
    weight: "30 ml",
    price: 22.79,
    category: "Tonal kremlər",
  },
  {
    id: 21,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-csm-1119-tk-0137.png",
    title: "Tonal Krem Loreal Infaillible 120",
    brand: "PIERRE RENE",
    weight: "30 ml",
    price: 22.79,
    category: "Tonal kremlər",
  },
  {
    id: 22,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/-/_-_2023-05-07t222044.758.png",
    title: "Konsiler Belordesign Soft Focus 102",
    brand: "BELORDESIGN",
    weight: "7 gr",
    price: 7.29,
    category: "Konsilerlər",
  },
  {
    id: 23,
    image:
      "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/_/d/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-2023-05-07t225906.938_png.webp",
    title: "Konsiler Eveline Magical Perfection 01",
    brand: "EVELINE",
    weight: "15 ml",
    price: 7.89,
    category: "Konsilerlər",
  },
  {
    id: 24,
    image:
      "https://olivia.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/_/3/_3__414_1.png",
    title: "Konsiler Eveline Magical Perfection 02",
    brand: "EVELINE",
    weight: "15 ml",
    price: 7.89,
    category: "Konsilerlər",
  },
];

export async function GET(req, { params }) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
