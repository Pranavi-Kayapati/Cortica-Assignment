import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        width="100%"
        height={{ base: "300px", md: "500px" }}
        backgroundImage="url('https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=Qoj0rPQNDGT8VdvMhGfXwW-dV0fYVjRCGvH027RyKyg=')"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        textAlign="center"
        p={4}
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" size={{ base: "lg", md: "2xl" }}>
          Welcome to Our E-Commerce Store
        </Heading>
        <Text mt={4} fontSize={{ base: "sm", md: "lg" }}>
          Discover a wide range of products to suit your needs and preferences.
        </Text>
        <Button mt={4} colorScheme="teal" size="lg">
          <Link to="/products">Shop Now</Link>
        </Button>
      </Box>

      {/* Carousel Section */}
      <Box my={8} p={4}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay
          infiniteLoop
          centerMode
          centerSlidePercentage={25} // Show 4 images at a time
          interval={3000}
          transitionTime={500}
          emulateTouch
          swipeable
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-prev"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-next"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
        >
          <Box className="carousel-item">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsLFnymVNnYANnhrLOgfdbMYGkEXeTW1N0w&s"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
          <Box className="carousel-item">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKvutl9qtxWYdiwPoUPcN8tq3GUeCNeOwNw&s"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
          <Box className="carousel-item">
            <Image
              src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
          <Box className="carousel-item">
            <Image
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
          <Box className="carousel-item">
            <Image
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
          <Box className="carousel-item">
            <Image
              src="https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg"
              objectFit="cover"
              height="200px"
              width="300px"
            />
          </Box>
        </Carousel>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="tomato"
        color="white"
        py={4}
        textAlign="center"
        position="relative"
        bottom={0}
        width="100%"
      >
        <Text>
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights
          reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
