import {
    Box,
    VStack,
    Text,
    Button,
    Icon,
    Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';


export default function OrderConfirmation() {
    const navigate = useNavigate()
    return (
        <Box maxWidth="600px" margin="auto" textAlign="center">
            <Box
                bg="rgb(255, 111, 97)"
                color="white"
                py={12}
                mb={8}
                borderRadius="md"
            >
                <VStack spacing={4}>
                    <Flex
                        bg="white"
                        borderRadius="full"
                        w={16}
                        h={16}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Icon as={CheckIcon} w={8} h={8} color="rgb(255, 111, 97)" />
                    </Flex>
                    <Text fontSize="2xl" fontWeight="bold">
                        Order Placed
                    </Text>
                </VStack>
            </Box>

            <VStack spacing={4} mb={8}>
                <Text fontSize="sm" color="gray.600">
                    Order ID : PO2882451244862
                </Text>
                <Text fontSize="sm">
                    You have earned <Text as="span" fontWeight="bold">3.38 NeuCoins</Text>.
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                    Your order has been placed!
                </Text>
            </VStack>

            <Flex justifyContent="center" gap={4}>
                <Button variant="outline" colorScheme="red">
                    Track order
                </Button>
                <Button colorScheme="red" onClick={() => navigate('/')}>
                    Continue exploring
                </Button>
            </Flex>
        </Box>
    )
}