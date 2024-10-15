import { Box, Image, Text, VStack, Badge, Flex, HStack } from '@chakra-ui/react'

export default function ProductCard({
  imageUrl,
  name,
  description,
  packageInfo,
  delivery,
  mrp,
  discountPercentage,
  discountedPrice,
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mx={1} cursor={'pointer'} bg="#fff">
      <Image src={imageUrl} alt={name} height="200px" objectFit="contain"/>
      <VStack align="start" mt={4} spacing={2}>
        <Text fontSize={'sm'} noOfLines={2}>
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600" noOfLines={2}>
          {description}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {packageInfo}
        </Text>
        <Text fontSize="xs">
          {delivery}
        </Text>
        <Flex justify="space-between" width="100%" align="center">
          <VStack spacing={1} alignItems={"flex-start"}>
            <HStack>
              <Text fontSize="xs" color="gray.500" textDecoration="line-through">
                MRP ₹{mrp}
              </Text>
              <Badge colorScheme="green">{discountPercentage}% off</Badge>
            </HStack>
            <Text fontSize="lg" color="gray.800">
              ₹{discountedPrice}
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  )
}
