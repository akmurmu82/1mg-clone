import { FaChevronRight } from "react-icons/fa6";
import { IconButton } from '@chakra-ui/react';

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
      <IconButton
        aria-label="Next"
        icon={<FaChevronRight />}
        onClick={onClick}
        position="absolute"
        right="-15px"
        top="50%"
        transform="translate(0, -50%)"
        zIndex="1"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        _hover={{ bg: 'gray.200' }}
      />
    );
  };

  export default NextArrow;