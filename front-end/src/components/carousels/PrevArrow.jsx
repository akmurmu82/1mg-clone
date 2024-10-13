import { FaChevronLeft } from "react-icons/fa6";
import { IconButton } from '@chakra-ui/react';

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        onClick={onClick}
        position="absolute"
        left="-15px"
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

  export default PrevArrow;