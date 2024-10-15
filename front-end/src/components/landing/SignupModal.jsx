import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Text,
  Input,
  Button,
  Link,
  Flex,
  HStack,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import axios from "axios";
import { useState } from 'react';
const baseBackendUrl = import.meta.env.VITE_BASE_BACKEND_API
console.log(baseBackendUrl)

const SignupModal = ({ isOpen, onClose, onOpenLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const toast = useToast();

  const handleSignup = async () => {
    console.log({ email, password })
    try {
      let res = await axios.post(`${baseBackendUrl}/auth/register`, { email, password })
      console.log(res)
      setErrorMessage("")
      toast({
        position: "top",
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose()
    } catch (error) {
      if (error.status == 409) {
        console.log('user already registered!')
        toast({
          position: "top",
          title: "Can't create account.",
          description: "user already registered!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setErrorMessage(error.response.data.message)
      }
      console.log(error)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0} display="flex" flexDirection="row">
            {/* Left Section */}
            <Box flex="1" bg="gray.50" p={8} textAlign="center" display="flex" flexDirection="column" justifyContent="center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Know Your Medicines"
                mx="auto"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Know Your Medicines
              </Text>
              <Text fontSize="sm" color="gray.600">
                View medicine information like usage, side effects, and cheaper substitutes before you take them.
              </Text>
              {/* Pagination Dots */}
              {/* Here should be sliders */}
              <Flex justifyContent="center" mt={4}>
                <Box as="span" w={2} h={2} bg="gray.400" borderRadius="full" mx={1} />
                <Box as="span" w={2} h={2} bg="gray.200" borderRadius="full" mx={1} />
                <Box as="span" w={2} h={2} bg="gray.200" borderRadius="full" mx={1} />
                <Box as="span" w={2} h={2} bg="gray.200" borderRadius="full" mx={1} />
              </Flex>
            </Box>

            {/* Right Section */}
            <Box flex="1" p={8}>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Sign Up
              </Text>
              <Text fontSize="sm" color="gray.600" mb={2}>
                Enter mobile number
              </Text>
              <Input
                placeholder="Enter Email ID or Mobile Number"
                mb={1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="red.500"
                focusBorderColor="red.500"
              />
              {errorMessage &&
                < Text fontSize="sm" color="red.600" mb={2}>
                  {errorMessage}
                </Text>}
              <Text fontSize="sm" color="gray.600" mb={2}>
                Enter password
              </Text>
              <Input
                placeholder="Enter Password"
                mb={4}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor="red.500"
                focusBorderColor="red.500"
              />

              <HStack alignItems="center" mb={6}>
                <Checkbox />
                <Text fontSize="sm" color="gray.600" >Are you a healthcare professional?</Text>
              </HStack>

              <Button colorScheme="red" width="100%" mb={4} onClick={handleSignup}>
                Sign Up
              </Button>
              <Text fontSize="sm" color="gray.600" mb={2}>
                Have an account? <Link color="red.500" cursor={'pointer'} onClick={() => {
                  onClose()
                  onOpenLogin()
                }}>Login</Link>
              </Text>
              <Text fontSize="xs" color="gray.500" mb={4}>
                By logging in, you agree to our{' '}
                <Link color="red.500">Terms and Conditions</Link> &{' '}
                <Link color="red.500">Privacy Policy</Link>
              </Text>
              <Text fontSize="sm" color="red.500" textAlign="center">
                Need Help? <Link>Get In Touch</Link>
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal >
    </>
  );
};

export default SignupModal;

SignupModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenLogin: PropTypes.func,
}