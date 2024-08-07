import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  Divider,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import CartItem from "../Components/CartItem";
import { cartGetProducts } from "../redux/cartReducer/action";
import "../CSS/Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartProducts, isLoading, isError, error } = useSelector(
    (store) => store.cartReducer
  );

  useEffect(() => {
    dispatch(cartGetProducts());
  }, [dispatch]);

  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.quantity * item.menuItemId.price,
    0
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <div className="cart-container">
      <Flex
        direction={{ base: "column", md: "row" }}
        spacing={4}
        width={"100%"}
      >
        <Box flex="2" p={4}>
          <VStack spacing={4} align="start">
            {cartProducts.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Bill Summary
            </Text>
            <Divider />
            <Text fontSize="md" fontWeight="bold">
              Total Products: {cartProducts.length}
            </Text>
            {cartProducts.map((item) => (
              <Text key={item._id}>
                {item.menuItemId.name} - ₹{item.menuItemId.price} x{" "}
                {item.quantity}
              </Text>
            ))}
            <Divider />
            <Text fontSize="lg" fontWeight="bold">
              Total Price: ₹{totalPrice.toFixed(2)}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
