import { useState, useEffect } from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    VStack,
    HStack,
    Input,
    Checkbox,
    Grid,
    GridItem,
    Icon,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { FaTrash, FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const topDeals = [
    { name: "Himalaya Wellness Pure Herbs Vasaka", image: "https://example.com/himalaya-vasaka.jpg" },
    { name: "Combo Pack of Himalaya Confido", image: "https://example.com/himalaya-confido.jpg" },
    { name: "Himalaya Wellness Himalaya Guduchi", image: "https://example.com/himalaya-guduchi.jpg" },
    { name: "Himalaya Wellness Pure Herbs Meshashringi", image: "https://example.com/himalaya-meshashringi.jpg" },
    { name: "Himalaya Wellness I-Sure Wellness", image: "https://example.com/himalaya-i-sure.jpg" }
]

export default function CartPage() {
    const [cartItems, setCartItems] = useState([])
    const [cartItemsTotal, setCartItemsTotal] = useState(0)
    const navigate = useNavigate()

    const handlePlaceOrder = () => {
        localStorage.setItem('userCart', JSON.stringify([]))
        navigate("/order-confirmation")
    }

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('userCart')) || []
        if (storedCart.length >= 1) {
            setCartItems(storedCart)
        }
    }, [])

    useEffect(() => {
        let total = cartItems.reduce((acc, item) => {
            return acc + item.mrp;
        }, 0)
        setCartItemsTotal(total)
    }, [cartItems])

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        )
        setCartItems(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id)
        setCartItems(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    return (
        <Flex direction={{ base: 'column', lg: 'row' }} p={4} maxWidth="1200px" margin="auto">
            <Box flex={2} mr={{ base: 0, lg: 8 }} mb={{ base: 8, lg: 0 }}>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>{cartItems.length} items added</Text>
                <Text fontSize="sm" color="gray.500" mb={4}>Items not requiring prescription</Text>

                <VStack spacing={4} align="stretch" mb={8}>
                    {cartItems.map((item) => (
                        <Box key={item._id} borderWidth={1} borderRadius="lg" p={4}>
                            <Flex>
                                <Image src={item.imageUrl} alt={item.name} boxSize="100px" objectFit="cover" mr={4} />
                                <Box flex={1}>
                                    <Text fontWeight="bold" mb={2}>{item.name}</Text>
                                    <Text fontSize="sm" color="gray.500" mb={2}>{item.packageInfo}</Text>
                                    <Flex justify="space-between" align="center">
                                        <HStack>
                                            <Text fontWeight="bold">₹{item.mrp}</Text>
                                            <Text fontSize="sm" color="gray.500" textDecoration="line-through">₹{item.originalPrice}</Text>
                                            <Text fontSize="sm" color="green.500">{item.discount}% off</Text>
                                        </HStack>
                                        <HStack>
                                            <Button size="sm" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} leftIcon={item.quantity === 1 ? <Icon as={FaTrash} /> : <MinusIcon />} />
                                            <Input value={1} readOnly textAlign="center" width="40px" />
                                            <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)} leftIcon={<AddIcon />} />
                                        </HStack>
                                    </Flex>
                                    <Button variant="link" colorScheme="red" size="sm" mt={2} onClick={() => removeItem(item.id)}>Remove</Button>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                    <Box>
                        <Text fontSize={'large'} fontWeight={'semibold'}>To be paid: ₹{cartItemsTotal}</Text>
                    </Box>
                </VStack>

                <Box mb={8}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>Himalaya healthcare top deals</Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                        {topDeals.map((deal, index) => (
                            <GridItem key={index}>
                                <Image src={deal.image} alt={deal.name} mb={2} />
                                <Text fontSize="sm">{deal.name}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box flex={1}>
                <Box borderWidth={1} borderRadius="lg" p={4} mb={4} bg="red.50">
                    <Text fontWeight="bold" color="red.500" mb={2}>Care Plan</Text>
                    <Text fontWeight="bold" mb={2}>You can save extra ₹264 on this order</Text>
                    <Text fontSize="sm" mb={2}>Become a careplan member</Text>
                    <Text fontSize="sm" mb={4}>3 months membership for only ₹165 ₹549 70% off</Text>
                    <Flex>
                        <Button variant="outline" colorScheme="red" mr={2}>Know more</Button>
                        <Button colorScheme="red">Add membership</Button>
                    </Flex>
                </Box>

                <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
                    <Flex justify="space-between" align="center">
                        <Text>Apply coupon</Text>
                        <ChevronRightIcon />
                    </Flex>
                </Box>

                <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
                    <Flex align="start" mb={2}>
                        <Checkbox mr={2} mt={1} />
                        <Box>
                            <Text fontWeight="bold">Check the health of your vital organs</Text>
                            <Text fontSize="sm">Book Good Health Silver Package for just ₹649</Text>
                            <Text fontSize="sm" color="gray.500">Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
                    <Flex justify="space-between" align="center" mb={2}>
                        <HStack>
                            <Icon as={FaHome} />
                            <Text fontWeight="bold">Delivering to</Text>
                        </HStack>
                        <Button variant="link" colorScheme="red">Add Address</Button>
                    </Flex>
                    <Text>Gurgaon</Text>
                </Box>

                <Button colorScheme="red" width="100%" onClick={handlePlaceOrder}>Continue</Button>
            </Box>
        </Flex>
    )
}