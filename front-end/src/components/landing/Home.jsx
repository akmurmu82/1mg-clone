import PropTypes from "prop-types";
import CarouselSlider from "../carousels/CarouselSlider";
import CommonSlider from "../carousels/CommonSlider";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductCarousel from "../carousels/ProductCarousel";
import { products } from "../../assets/db.json";
import { collagenProducts } from "../../assets/collagen.json";
console.log(products)

function LandingPage() {
  const topSlides = [
    "https://onemg.gumlet.io/8ebddacf-a999-42b9-ab0f-2acf2897382e_1728235820.jpg?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/bba94753-2883-43af-93e9-d26a0523346c_1725600489.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/15e401ce-b9da-48d9-9854-97ea9e9db381_1723528642.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/3d9636d0-d22c-465c-9710-24d5519fa468_1712576949.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=899&h=200&format=auto"
  ];

  const healthConcernsSlides = [
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto" },
    { title: "lakjsd", imgSrc: "https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto" }
  ];

  const featureBrand = [
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728633069_sugarfree.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728882706_MuscleBlaze.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728882740_ContourPlus+Elite.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728633078_Zandu.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728882803_Goqii.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/2024-10%2F1728537010_Dabur.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206984_Tata+1mg.png?format=auto' },
    { imgSrc: 'https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206972_tejasya.png?format=auto' },
  ]

  return (
    <div>
      {/* Carousel and Adjacent Image Section */}
      <Flex>
        <Box w="65%">
          <CarouselSlider slides={topSlides} slidesToShow={1} autoplay={true} infinite={true} />
        </Box>
        <Image w="33%" src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" objectFit="cover" />
      </Flex>

      <Heading textAlign="center" fontSize="md" p={5} m={5}>
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </Heading>

      <Box p={10} bg="#f3f3f3">
        <Image
          src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png"
          cursor="pointer"
          marginBottom={5}
        />

        <Text mb={5}>Shop by health concerns</Text>

        {/* <ProductCarousel /> */}

        <Box p={10}>
          <CommonSlider>
            {healthConcernsSlides.map(({ title, imgSrc }, ind) => (
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
            ))}
          </CommonSlider>
        </Box>

        <Text mb={5}>Featured brands</Text>
        <Box p={2} bg="#fff">
          <CommonSlider slidesToShow={7}>
            {featureBrand.map(({ imgSrc }, ind) => (
              <Image p={10} key={ind} src={imgSrc} alt={ind} />
            ))}
          </CommonSlider>
        </Box>

        {/* Product Cards Section */}
        <Box p={5}>
          <ProductCarousel heading="Products" data={products} />
        </Box>


        {/* Product Cards Section */}
        <Box p={5}>
          <ProductCarousel heading="Collagen | supplement of the week" data={collagenProducts} />
        </Box>
      </Box>
    </div>
  );
}

LandingPage.propTypes = {
  products: PropTypes.array,
};

export default LandingPage;
