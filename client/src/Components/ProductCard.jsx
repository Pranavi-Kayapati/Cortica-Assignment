import React, { useEffect } from "react";
import { Box, Flex, Image, Text, Button, useToast } from "@chakra-ui/react";
import "../CSS/Products.css";
import { useDispatch, useSelector } from "react-redux";
import { cartGetProducts, cartPostProduct } from "../redux/cartReducer/action";

const ProductCard = ({ product, onView }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { cartProducts, isLoading, isError, error } = useSelector(
    (store) => store.cartReducer
  );

  useEffect(() => {
    dispatch(cartGetProducts());
  }, [dispatch]);

  const isProductInCart = async (productId) => {
    return await cartProducts.some((item) => item.menuItemId._id === productId);
  };

  const handleAddToCart = async () => {
    if (await isProductInCart(product._id)) {
      toast({
        title: "Product Already in Cart",
        description: "This product is already in your cart.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(cartPostProduct({ menuItemId: product._id, quantity: 1 }));
      toast({
        title: "Product Added",
        description: "The product has been added to your cart.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m={2}
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      className="product-card"
      mx="auto"
    >
      <Flex
        direction={{ base: "row", sm: "row", md: "column", lg: "row" }}
        align="center"
      >
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="md"
          boxSize={{ base: "full", md: "150px" }}
          objectFit="cover"
          mb={{ base: 4, md: 0 }}
          mr={{ base: 0, md: 4 }}
        />
        <Box flex="1" className="product-details">
          <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
            {product.name}
          </Text>
          <Text mb={2}>{product.description}</Text>
          <Text
            mb={4}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
          >
            ₹{product.price}
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap={2}>
            <Button
              colorScheme="tomato"
              onClick={handleAddToCart}
              width={{ base: "full", md: "auto" }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              colorScheme="tomato"
              onClick={() => onView(product)}
              width={{ base: "full", md: "auto" }}
            >
              View
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
