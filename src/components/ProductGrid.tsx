import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  // console.log(products)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
