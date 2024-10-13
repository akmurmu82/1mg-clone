import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSlider = ({ slides }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically change slides
    autoplaySpeed: 1000, // Time between each slide transition
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
