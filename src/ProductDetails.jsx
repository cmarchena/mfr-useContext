import { useParams, Link } from "react-router-dom";
import { useFetchProduct } from "./hooks";
export default function ProductDetails() {
  const { id: productID } = useParams();
  console.log({ productID });
  const product = useFetchProduct(productID);
  console.log({ product });
  return (
    <div data-cy="product-item" className="product-item">
      <h2>Product Details</h2>
      {product ? (
        <>
          <p>Product ID: {product.id}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <Link to="/products">Go back</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
