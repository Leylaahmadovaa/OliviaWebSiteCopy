import { NextResponse } from "next/server";
 const products= [
        {
          id: 1,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qara",
          brand: "PAESE",
          weight: "10.5 ml",
          price: 17.99,
        },
        {
          id: 2,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0086-1.webp",
          title: "Tuş Vivienne Sabo Artistic Volume Cabaret Premiere 01",
          brand: "VIVIENNE SABO",
          weight: "9 ml",
          price: 11.39,
        },
        {
          id: 3,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0116-1.webp",
          title: "Tuş Maybelline Sky High Qara",
          brand: "MAYBELLINE",
          weight: "7.2 ml",
          price: 20.29,
        },
        {
          id: 4,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0122-1.webp",
          title: "Tuş Maybelline New York Lash Sensational Qara",
          brand: "MAYBELLINE",
          weight: "10.5 ml",
          price: 17.99,
        },
        {
          id: 5,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qara5",
          brand: "PAESE5",
          weight: "10.5 ml",
          price: 17.99,
        },
        {
          id: 6,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qar6",
          brand: "PAESE6",
          weight: "10.5 ml",
          price: 17.99,
        },
        {
          id: 7,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qar7",
          brand: "PAESE7",
          weight: "10.5 ml",
          price: 17.99,
        },
      ]

export async function GET(req, { params }) {
    const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
