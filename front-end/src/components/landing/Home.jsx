import PropTypes from "prop-types";
import CarouselSlider from "./CarouselSlider";
import { Box, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";

function LandingPage() {

  const topSlides = [
    "https://onemg.gumlet.io/8ebddacf-a999-42b9-ab0f-2acf2897382e_1728235820.jpg?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/bba94753-2883-43af-93e9-d26a0523346c_1725600489.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/15e401ce-b9da-48d9-9854-97ea9e9db381_1723528642.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/3d9636d0-d22c-465c-9710-24d5519fa468_1712576949.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=899&h=200&format=auto",
    "https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=899&h=200&format=auto"
  ]
  return <div>
    <Flex>
      <CarouselSlider slides={topSlides} />
      <Image w={'500px'} src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" />
    </Flex>
    <Heading textAlign={'center'} fontSize={"md"} p={5} m={5}>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Heading>

    <Box p={10} bg={"#f3f3f3"}>
      <Image src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" cursor={'pointer'} marginBottom={5} />

      <Text mb={5}>Shop by Concerns</Text>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4} bg={'#ffffff'} p={5}>
        {[
          { name: 'Health Resource Center', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1638530481/xgxtaxmrphomivvwuwfv.png' },
          { name: 'Vitamins & Nutrition', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525304/kfyx5kvvn2ai5fwswhsa.png' },
          { name: 'Diabetes', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525269/cabpuknnlyyzgqfnb4x5.png' },
          { name: 'Healthcare Devices', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525147/p1blaka183nc1zlil8tq.png' },
          { name: 'Personal Care', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525320/j7ruar88gacbzksuadjn.png' },
          { name: 'Ayurveda Products', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525219/qjfdkz5njmk9n7vvrbb3.png' },
        ].map((category) => (
          <GridItem key={category.name}>
            <VStack>
              <Image src={category.image} alt={category.name} boxSize="100px" objectFit="cover" />
              <Text textAlign="center" fontSize="sm">
                {category.name}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  </div>;
}

LandingPage.propTypes = {
  props: PropTypes.any,
};

export default LandingPage;
