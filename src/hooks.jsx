import { useState, useEffect } from "react";

const baseURL = "https://fakestoreapi.com";
export function useFetchProducts() {
  const [products, setProducts] = useState();
  async function fetchAllProducts() {
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  }
  const storedProducts = localStorage.getItem("products");
  useEffect(() => {
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      fetchAllProducts();
    }
  }, []);
  return products;
}
export function useFetchProduct(id) {
  console.log({ id });
  const [product, setProduct] = useState();
  console.log(`${baseURL}/products/${id}`);
  async function fetchProductByID(id) {
    const response = await fetch(`${baseURL}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }
  const storedProducts = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    if (storedProducts) {
      setProduct(storedProducts.find((product) => product.id === +id));
    } else {
      fetchProductByID(id);
    }
  }, []);
  return product;
}
