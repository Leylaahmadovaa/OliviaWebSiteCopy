// app/products/[id]/page.js (or /app/products/[id]/page.tsx if using TypeScript)
async function getProduct(id) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: "no-store" });
  
    if (!res.ok) {
      return null; // Handle 404 case
    }
  
    return res.json();
  }
  
  export default async function ProductDetail({ params }) {
    const product = await getProduct(params.id);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h1>{product.brand}</h1>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: {product.price} &#x20BC;</p>
      </div>
    );
  }
  