export default async function ProductDetail({ params }) {
  const { id } = await params; // URL-dən gələn ID

  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store", // SSR üçün fresh data gətir
  });

  if (!res.ok) {
    return <div>Product not found</div>;
  }

  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.brand}</p>
      <img src={product.image} alt={product.title} />
      <p>{product.weight}</p>
      <p>{product.price} &#x20BC;</p>
    </div>
  );
}
