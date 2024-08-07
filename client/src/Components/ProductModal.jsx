import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
  Button,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import "../CSS/ProductModal.css";
import { useDispatch, useSelector } from "react-redux";
import { cartPostProduct } from "../redux/cartReducer/action";

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  // Static data for demonstration
  const staticData = {
    rating: 4.5,
    reviews: "Based on 120 reviews",
    ingredients: "Wheat, Sugar, Cocoa, etc.",
  };
  const dispatch = useDispatch();
  const toast = useToast();
  const { cartProducts, isLoading, isError, error } = useSelector(
    (store) => store.cartReducer
  );

  const productData = {
    ...product,
    rating: product.rating || staticData.rating,
    reviews: product.reviews || staticData.reviews,
    ingredients: product.ingredients || staticData.ingredients,
  };

  const isProductInCart = async (productId) => {
    return await cartProducts.some((item) => item.menuItemId._id === productId);
  };

  const handleAddToCart = async () => {
    if (await isProductInCart(product._id)) {
      toast({
        title: "Product Already in Cart",
        description: "This product is already in your cart.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(cartPostProduct({ menuItemId: product._id, quantity: 1 }));
      toast({
        title: "Product Added",
        description: "The product has been added to your cart.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="product-modal">
      <ModalOverlay />
      <ModalContent className="modal-content">
        <ModalHeader className="modal-header">{productData.name}</ModalHeader>
        <ModalCloseButton className="modal-close-button" />
        <ModalBody className="modal-body">
          <Image
            src={productData.image}
            alt={productData.name}
            className="product-image"
          />
          <Box className="modal-details">
            <Flex className="detail-row">
              <Text className="detail-heading">Description</Text>
              <Text className="detail-colan">:</Text>
              <Text className="detail-data">{productData.description}</Text>
            </Flex>
            <Flex className="detail-row">
              <Text className="detail-heading">Rating</Text>
              <Text className="detail-colan">:</Text>
              <Text className="detail-data">{productData.rating} ⭐</Text>
            </Flex>
            <Flex className="detail-row">
              <Text className="detail-heading">Reviews</Text>
              <Text className="detail-colan">:</Text>
              <Text className="detail-data">{productData.reviews}</Text>
            </Flex>
            <Flex className="detail-row">
              <Text className="detail-heading">Ingredients</Text>
              <Text className="detail-colan">:</Text>
              <Text className="detail-data">{productData.ingredients}</Text>
            </Flex>
            <Box mt={4} textAlign="center">
              <Button
                colorScheme="tomato"
                onClick={handleAddToCart}
                className="add-to-cart-button"
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
