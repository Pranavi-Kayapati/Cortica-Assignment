import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Button,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import "../CSS/Navbar.css";
import { PiHamburgerDuotone } from "react-icons/pi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const display = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Box>
      <Flex
        as="nav"
        p={4}
        bg="tomato"
        color="white"
        align="center"
        justify="space-between"
        wrap="wrap"
        borderBottom="none"
      >
        <Heading size="lg">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            FlavorFeast
          </Link>
        </Heading>

        {/* Mobile Menu Button */}
        <Box display={{ base: "block", md: "none" }}>
          <Button
            onClick={onOpen}
            bg="tomato"
            color="white"
            _hover={{ bg: "darkred" }}
          >
            <PiHamburgerDuotone size={30} />
          </Button>
        </Box>

        {/* Desktop Navigation */}
        <Flex display={display} align="center" pr={"20"}>
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              color: "white",
              position: "relative",
              fontSize: "17px",
            }}
          >
            <span className="nav-link">Products</span>
          </Link>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "white",
              position: "relative",
              fontSize: "17px",
            }}
          >
            <span className="nav-link">Cart</span>
          </Link>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent bg="tomato" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link
                to="/products"
                onClick={onClose}
                style={{ textDecoration: "none", color: "white" }}
                background={"white"}
              >
                <Button
                  w="100%"
                  variant="none"
                  colorScheme="white"
                  borderBottom={"1px solid white"}
                >
                  Products
                </Button>
              </Link>
              <Link
                to="/cart"
                onClick={onClose}
                style={{ textDecoration: "none", color: "white" }}
                background={"white"}
              >
                <Button
                  w="100%"
                  variant="none"
                  colorScheme="white"
                  borderBottom={"1px solid white"}
                >
                  Cart
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
