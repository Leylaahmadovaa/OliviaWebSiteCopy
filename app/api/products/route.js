export async function GET() {
  return new Response(
    JSON.stringify({
      products: [
        {
          id: 1,
          image: "https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t163100.055.webp",
          title: "Tuş Paese Liloosh Qara",
          brand: "PAESE",
          weight: "10.5 ml",
          price: 17.99,
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
