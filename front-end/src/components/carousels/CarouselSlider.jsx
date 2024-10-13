import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image, IconButton } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const CarouselSlider = ({ slides, slidesToShow, autoplay, infinite  }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: infinite,
    speed: 1000, // Transition speed
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay, // Automatically change slides
    autoplaySpeed: 1000, // Time between each slide transition
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box maxW="900px">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        {slides.map((slide, ind) => (

          < Box key={ind} >
            <Image
              src={slide}
              alt={`Slide ${ind}`}
            />
          </Box>
        ))
        }
      </Slider >
    </Box >
  );
};

export default CarouselSlider;
