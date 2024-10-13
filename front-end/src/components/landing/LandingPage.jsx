import {
  Box,
  Flex,
  Input,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Container,
  InputGroup,
  InputLeftElement,
  IconButton,
} from '@chakra-ui/react'
// import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <Box>
      {/* Header */}
      <Box bg="white" boxShadow="sm" position="sticky" top={0} zIndex={1000}>
        <Container maxW="container.xl">
          <Flex py={4} alignItems="center">
            <Image src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="1mg Logo" h="36px" mr={4} />
            <InputGroup maxW="600px" flex={1}>
              <InputLeftElement pointerEvents="none">
                {/* <SearchIcon color="gray.300" /> */}
              </InputLeftElement>
              <Input placeholder="Search for Medicines and Health Products" />
            </InputGroup>
            <HStack spacing={4} ml={4}>
              <Button leftIcon={<FaUser />} variant="ghost">
                Login | Sign Up
              </Button>
              <IconButton
                aria-label="Cart"
                icon={<FaShoppingCart />}
                variant="ghost"
              />
              <IconButton
                aria-label="Menu"
                // icon={<HamburgerIcon />}
                display={{ base: 'flex', md: 'none' }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Navigation */}
      <Box bg="gray.100" display={{ base: 'none', md: 'block' }}>
        <Container maxW="container.xl">
          <HStack spacing={6} py={2}>
            {['Medicines', 'Lab Tests', 'Consult Doctors', 'COVID-19', 'Ayurveda', 'Care Plan'].map((item) => (
              <Text key={item} fontWeight="medium">
                {item}
              </Text>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        {/* Hero Section */}
        <Box mb={8}>
          <Image src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1625554538/qqwqzr4vcrtqizcxcvxg.png" alt="Hero Banner" w="100%" borderRadius="lg" />
        </Box>

        {/* Featured Categories */}
        <VStack spacing={4} align="stretch" mb={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Shop by Categories
          </Text>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4}>
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
        </VStack>

        {/* Featured Products */}
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">
            Featured Products
          </Text>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
            {[
              { name: 'Dabur Chyawanprash', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1600082177/cropped/hnbhc2qjbhfqypjgxcgc.jpg', price: '₹290' },
              { name: 'Cetaphil Gentle Skin Cleanser', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1600082177/cropped/hnbhc2qjbhfqypjgxcgc.jpg', price: '₹450' },
              { name: 'Dettol Antiseptic Liquid', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1600082177/cropped/hnbhc2qjbhfqypjgxcgc.jpg', price: '₹180' },
              { name: 'Baidyanath Chyawanprash', image: 'https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1600082177/cropped/hnbhc2qjbhfqypjgxcgc.jpg', price: '₹320' },
            ].map((product) => (
              <GridItem key={product.name} borderWidth={1} borderRadius="lg" p={4}>
                <VStack align="stretch">
                  <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" mx="auto" />
                  <Text fontWeight="medium">{product.name}</Text>
                  <Text color="green.500" fontWeight="bold">
                    {product.price}
                  </Text>
                  <Button colorScheme="blue" size="sm">
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" mt={8}>
        <Container maxW="container.xl" py={8}>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={8}>
            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Know Us
              </Text>
              <VStack align="start" spacing={2}>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Press Coverage</Text>
                <Text>Careers</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Our Policies
              </Text>
              <VStack align="start" spacing={2}>
                <Text>Privacy Policy</Text>
                <Text>Terms and Conditions</Text>
                <Text>Editorial Policy</Text>
                <Text>Return Policy</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Our Services
              </Text>
              <VStack align="start" spacing={2}>
                <Text>Order Medicines</Text>
                <Text>Book Lab Tests</Text>
                <Text>Consult a Doctor</Text>
                <Text>Ayurveda Articles</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold" mb={4}>
                Connect
              </Text>
              <VStack align="start" spacing={2}>
                <Text>Social Links</Text>
                <Text>Facebook</Text>
                <Text>Twitter</Text>
                <Text>LinkedIn</Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

