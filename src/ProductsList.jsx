import { Link } from "react-router-dom";
import { useFetchProducts } from "./hooks";
export default function ProductsList() {
  // In this version we fetch them from the API and store in localstorage to avoid unnecessary
  // API calls.
  const products = useFetchProducts();
  return (
    <div data-cy="product-list" className="product-list">
      {products?.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <p className="product-title">{product.title}</p>
          <p>Price: {product.price}</p>
          <Link to={`/products/${product.id}`}>Go to details</Link>
        </div>
      ))}
    </div>
  );
}
