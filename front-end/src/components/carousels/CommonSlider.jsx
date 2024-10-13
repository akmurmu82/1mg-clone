import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image, Text, IconButton } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const CommonSlider = ({ slides, slidesToShow  }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000, // Transition speed
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false, // Automatically change slides
    autoplaySpeed: 1000, // Time between each slide transition
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        
        {slides.map(({title, imgSrc}, ind) => (

          < Box key={ind} p={2} textAlign="center">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={3}
              bg="white"
              boxShadow="md"
            >
              <Image src={imgSrc} alt={title} mb={2} />
              <Text mt={2} fontWeight="medium">{title}</Text>
            </Box>
            </Box>
        ))
        }
      </Slider >
    </Box >
  );
};

export default CommonSlider;
