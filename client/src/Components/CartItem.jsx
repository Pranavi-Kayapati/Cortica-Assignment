import React from "react";
import { Box, Button, Text, Flex, IconButton, Image } from "@chakra-ui/react";
import { MdOutlineDeleteOutline, MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  cartDeleteProduct,
  cartUpdateProduct,
} from "../redux/cartReducer/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    const updatedQuantity = item.quantity + 1;
    dispatch(cartUpdateProduct({ quantity: updatedQuantity }, item._id));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      dispatch(cartUpdateProduct({ quantity: updatedQuantity }, item._id));
    }
  };

  const handleDelete = () => {
    dispatch(cartDeleteProduct(item._id));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
      <Flex direction={{ base: "column", sm: "row", md: "row" }} align="center">
        <Image src={item.menuItemId.image} boxSize="150px" objectFit="cover" />
        <Box flex="1" ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">{item.menuItemId.name}</Text>
          <Text>{item.menuItemId.description}</Text>
          <Text mt={2}>₹{item.menuItemId.price}</Text>
        </Box>
        <Flex
          direction={{ base: "row", md: "row" }}
          align="center"
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          <Flex direction={{ base: "row" }} align={"center"}>
            <IconButton
              aria-label="Decrease quantity"
              icon={<MdRemove />}
              onClick={handleDecreaseQuantity}
              mr={2}
            />
            <Text mr={4}> {item.quantity}</Text>
            <IconButton
              aria-label="Increase quantity"
              icon={<MdAdd />}
              onClick={handleIncreaseQuantity}
              mr={2}
            />
          </Flex>
          <Button colorScheme="red" onClick={handleDelete}>
            <MdOutlineDeleteOutline />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartItem;
