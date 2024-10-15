import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, Heading } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ProductCard from '../landing/ProductCard';


const ProductCarousel = ({ heading, data = [] }) => {
  const sliderRef = useRef(null);


  const settings = {
    dots: true,
    infinite: false,
    speed: 1000, // Transition speed
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Box h="100%">
      <Heading size="md" fontWeight={'normal'} mb={5}>{heading}</Heading>
      <Slider ref={sliderRef} {...settings}>
        {data.map((product, ind) => (
          <ProductCard
            key={ind}
            _id={product._id.toString()}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            packageInfo={product.packageInfo}
            delivery={product.delivery}
            mrp={product.mrp}
            discountPercentage={product.discountPercentage}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </Slider >
    </Box >
  );
};

export default ProductCarousel;


