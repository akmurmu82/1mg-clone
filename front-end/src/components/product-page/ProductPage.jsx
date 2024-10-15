import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    VStack,
    Button,
    Badge,
    Stack,
    RadioGroup,
    Radio,
    Divider,
    Progress,
    HStack,
    Icon,
    useToast,
} from '@chakra-ui/react';
import { FaBox, FaMoneyBillWave, FaThumbsUp, FaTruck } from 'react-icons/fa6';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { IoMdStar } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseBackendApi = import.meta.env.VITE_BASE_BACKEND_API;
let userCart = JSON.parse(localStorage.getItem("userCart")) || [];
const authUser = JSON.parse(localStorage.getItem("authUser"))
console.log(userCart)


const reviews = [
    {
        name: "Rani Sharma",
        rating: 5,
        date: "25 November 2022",
        comment: "This product is value for money Biotin is known for its value for helping skin nails and hair. Good buy"
    },
    {
        name: "Ridhi Sanjay Hemnani",
        rating: 5,
        date: "29 November 2022",
        comment: "Very good product and value for money"
    }
]

const RatingBar = ({ rating, percentage }) => (
    <Flex align="center" mb={1}>
        <Text width="15px" mr={2}>{rating}</Text>
        <IoMdStar color="orange.400" mr={2} />
        <Progress value={percentage} size="sm" width="full" colorScheme="green" />
        <Text width="40px" ml={2}>{percentage}%</Text>
    </Flex>
)


function ProductPage() {
    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const toast = useToast()

    const handleAddToCart = () => {
        if (!userCart.includes(product)) {
            userCart.push(product)
            toast({
                position: "top",
                title: "Product added to cart.",
                description: "",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            localStorage.setItem("userCart", JSON.stringify(userCart))
        } else {
            toast({
                position: "top",
                title: "Product is already in the cart.",
                description: "",
                status: "warning",
                duration: 9000,
                isClosable: true,
            });
        }
    }

    useEffect(() => {
        const getProductData = async () => {
            try {
                let res = await axios.get(`${baseBackendApi}/products/${_id}`, {
                    headers: {
                        'Authorization': `Bearer ${authUser.token}`
                    }
                })
                console.log(res.data.data)
                setProduct(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductData()
    }, [])

    return (
        <Box p={5} bg="gray.50">
            {/* Main Product Section */}
            <Flex flexWrap="wrap" maxW="1200px" mx="auto">
                {/* Image Gallery */}
                <VStack w="10%" spacing={3}>
                    <Image src={product.imageUrl} alt="Product Image 1" boxSize="70px" objectFit="contain" />
                    <Image src={product.imageUrl} alt="Product Image 2" boxSize="70px" objectFit="contain" />
                    <Image src={product.imageUrl} alt="Product Image 3" boxSize="70px" objectFit="contain" />
                    <Image src={product.imageUrl} alt="Product Image 4" boxSize="70px" objectFit="contain" />
                </VStack>

                {/* Main Product Image */}
                <Box w="auto" mr={5}>
                    <Image src={product.imageUrl} alt="Main Product" boxSize="300px" objectFit="contain" />
                    {/* <Image src="discount-banner.jpg" alt="Discount Banner" mt={4} /> */}
                </Box>

                {/* Product Details */}
                <VStack w="35%" mr={3} align="flex-start" spacing={4} >
                    <Heading size="md">{product.name}</Heading>
                    <Text fontSize="sm" color="gray.500">Adthera Consumer Brands Pvt Ltd</Text>
                    <Badge colorScheme="green" p={1}>4 ★</Badge>
                    <Text fontSize="sm" color="gray.500">220 Ratings & 41 Reviews</Text>
                    <Badge colorScheme="orange" variant="subtle">Best Seller</Badge>
                    <Text fontWeight="bold">Product Highlights</Text>
                    <Text fontSize="sm">
                        • Improves hair follicle growth<br />
                        • Stimulates keratin production<br />
                        • Reduces hair fall and thinning<br />
                        • Reduces acne and blemishes<br />
                        • Improves skin elasticity<br />
                        • Promotes healthy nail growth<br />
                        • Vegan, gluten-free, and non-GMO
                    </Text>
                </VStack>



                {/* Price and Offers Section */}
                <VStack w="25%" borderRadius={"20px"} bg="white" p={4} boxShadow="md" spacing={3}>
                    <Text fontSize="2xl" fontWeight="bold">₹{product.mrp}</Text>
                    <Text fontSize="sm" color="gray.500">Inclusive of all taxes</Text>
                    <RadioGroup defaultValue="1">
                        <Stack direction="row" spacing={5}>
                            <Radio value="1">1 Bottle</Radio>
                            <Radio value="2">2 Bottles</Radio>
                        </Stack>
                    </RadioGroup>
                    <Button colorScheme="red" w="full" onClick={handleAddToCart}>Add to Cart</Button>

                    {/* Delivery Information Section */}
                    <Box bg="green.50" p={3} mt={5} maxW="1200px" mx="auto" boxShadow="md">
                        <Text fontWeight="bold" color="green.800">Get it delivered by 10pm, Today</Text>
                        <Text fontSize="sm" color="gray.600">Delivering to: 122019, Gurgaon</Text>
                    </Box>
                </VStack>
            </Flex>

            <Divider my={5} />

            {/* Combo Offers Section */}
            <Box bg="white" p={5} mx="auto" my={2} boxShadow="md">
                <Heading size="sm">Combo Offers for this Product</Heading>
                <Flex justify="space-between" mt={3}>
                    <VStack align="flex-start" spacing={1}>
                        <Badge colorScheme="green">Additional Discount</Badge>
                        <Text>Pack of 2 - ₹360 (74% off MRP ₹1388)</Text>
                        <Button size="sm" colorScheme="orange">Buy Pack</Button>
                    </VStack>
                    <VStack align="flex-start" spacing={1}>
                        <Badge colorScheme="green">Additional Discount</Badge>
                        <Text>Pack of 3 - ₹435 (79% off MRP ₹2097)</Text>
                        <Button size="sm" colorScheme="orange">Buy Pack</Button>
                    </VStack>
                </Flex>
            </Box>

            <Flex direction={{ base: 'column', md: 'row' }} gap={8} bg="gray.50" justifyContent={'space-around'}>
                <Box w="60%" bg="#fff" p={5}>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>Ratings & Reviews</Text>
                    <Flex align="center" mb={4}>
                        <Text fontSize="4xl" fontWeight="bold" color="green.500" mr={2}>4</Text>
                        <IoMdStar color="green.500" w={6} h={6} />
                    </Flex>
                    <Text color="gray.500" mb={4}>220 Ratings & 41 Reviews</Text>
                    <VStack align="stretch" mb={6}>
                        <RatingBar rating={5} percentage={57} />
                        <RatingBar rating={4} percentage={18} />
                        <RatingBar rating={3} percentage={11} />
                        <RatingBar rating={2} percentage={4} />
                        <RatingBar rating={1} percentage={10} />
                    </VStack>
                    {reviews.map((review, index) => (
                        <Box key={index} mb={6}>
                            <Flex align="center" mb={2}>
                                <IoMdStar color="green.500" mr={1} />
                                <Text fontWeight="bold" mr={2}>{review.rating}</Text>
                                <Text color="green.500" fontWeight="bold" fontSize="sm" mr={2}>verified buyer</Text>
                                <Text color="gray.500" fontSize="sm">{review.date}</Text>
                            </Flex>
                            <Text mb={2}>{review.comment}</Text>
                            <Flex>
                                <Button leftIcon={<FaThumbsUp />} variant="ghost" size="sm" mr={2}>
                                    Helpful
                                </Button>
                                <Button leftIcon={<IoNotificationsCircleOutline />} variant="ghost" size="sm">
                                    Report
                                </Button>
                            </Flex>
                            {index < reviews.length - 1 && <Divider my={4} />}
                        </Box>
                    ))}
                </Box>
                <VStack align="stretch" width={{ base: 'full', md: '300px' }} spacing={4}>
                    <Box borderWidth={1} borderRadius="md" p={4}>
                        <Text fontWeight="bold" mb={2}>Stressful life?</Text>
                        <Text mb={2}>Stay on top of your Health with our</Text>
                        <Text fontWeight="bold" mb={4}>Preventive Health Packages</Text>
                        <Image src="https://example.com/health-package-image.jpg" alt="Health Package" mb={4} />
                        <Button colorScheme="red" width="full">BOOK A LAB TEST ONLINE</Button>
                    </Box>
                    <Box textAlign="center">
                        <Image src="https://example.com/doctor-image.jpg" alt="Doctor" mb={4} />
                        <Button colorScheme="red" variant="outline" width="full">
                            CONSULT A DOCTOR ONLINE
                        </Button>
                    </Box>
                    <HStack justify="space-between" mt={4}>
                        <VStack>
                            <Icon as={FaBox} boxSize={6} color="blue.500" />
                            <Text fontSize="sm">Authentic Products</Text>
                        </VStack>
                        <VStack>
                            <Icon as={FaMoneyBillWave} boxSize={6} color="green.500" />
                            <Text fontSize="sm">Great Savings</Text>
                        </VStack>
                        <VStack>
                            <Icon as={FaTruck} boxSize={6} color="orange.500" />
                            <Text fontSize="sm">Home Delivery</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Flex></Box>

    );
}

export default ProductPage;
