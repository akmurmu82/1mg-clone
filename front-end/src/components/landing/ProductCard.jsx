import { Box, Image, Text, VStack, Badge, Flex, HStack } from '@chakra-ui/react'

export default function ProductCard({
  imageUrl,
  title,
  description,
  packageInfo,
  delivery,
  mrp,
  discountPercentage,
  discountedPrice,
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mx={1} cursor={'pointer'}>
      <Image src={imageUrl} alt={title} height="200px" objectFit="contain" mx="auto" />
      <VStack align="start" mt={4} spacing={2}>
        <Text fontSize={'sm'} noOfLines={2}>
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600" noOfLines={2}>
          {description}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {packageInfo}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {delivery}
        </Text>
        <Flex justify="space-between" width="100%" align="center">
          <VStack spacing={1} alignItems={"flex-start"}>
            <HStack>
              <Text fontSize="sm" color="gray.500" textDecoration="line-through">
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
