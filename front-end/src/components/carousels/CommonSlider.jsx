import { useRef } from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";


const CommonSlider = ({ children, slidesToShow=7}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000, // Transition speed
    slidesToShow: slidesToShow,
    slidesToScroll: 6,
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
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        {children}
      </Slider >
    </Box >
  );
};

export default CommonSlider;