import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <h1>Product List </h1>
      <Link href={`product/${productId}`}>
        <h1>Product 1 </h1>
      </Link>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
    </div>
  );
};

export default Products;
