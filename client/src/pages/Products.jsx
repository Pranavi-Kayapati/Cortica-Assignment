import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, Button } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import ProductModal from "../Components/ProductModal";
import { getProducts } from "../redux/porductReducer/action";
import { cartPostProduct } from "../redux/cartReducer/action";
import "../CSS/Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = useSelector(
    (store) => store.productReducer
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(cartPostProduct(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <Box width={"100%"}>
      <div className="products-container">
        <div
          width="100%"
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={6}
          className="products-grid"
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
              onView={setSelectedProduct}
            />
          ))}
        </div>
        {selectedProduct && (
          <ProductModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            product={selectedProduct}
          />
        )}
      </div>
    </Box>
  );
};

export default Products;
