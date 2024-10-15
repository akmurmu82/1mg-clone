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
  useToast
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import axios from "axios";
const baseBackendUrl = import.meta.env.VITE_BASE_BACKEND_API

const LoginModal = ({ isOpen, onClose, onOpenSignup }) => {
  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async () => {
    try {
      let res = await axios.post(`${baseBackendUrl}/auth/login`, { email, password })
      console.log(res)
      if (res.status == 200) {
        localStorage.setItem("authUser", JSON.stringify(res.data))
        setErrorMessage("")
        toast({
          position: "top",
          title: "Login Succussful.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose()
      }
    } catch (error) {
      if (error.status == 404) {
        console.log('user not registered!')
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
                Login
              </Text>
              <Text fontSize="sm" color="gray.600" mb={6}>
                Get access to your orders, lab tests & doctor consultations
              </Text>
              <Input
                placeholder="Enter Email ID or Mobile Number"
                mb={1}
                name={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="red.500"
                focusBorderColor="red.500"
              />
              {errorMessage &&
                <Text fontSize="sm" color="red.600" mb={6}>
                  Oops! We could not find an account associated with your email address. Please try with a different email/number
                </Text>}
              <Input
                placeholder="Enter Password"
                name={"password"}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                mb={4}
                borderColor="red.500"
                focusBorderColor="red.500"
              />
              <Button colorScheme="red" width="100%" mb={4} onClick={handleLogin}>
                LOGIN
              </Button>
              <Text fontSize="sm" color="gray.600" mb={2}>
                New on 1mg? <Link color="red.500" cursor={'pointer'} onClick={() => {
                  onClose()
                  onOpenSignup()
                }}>Sign Up</Link>
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
      </Modal>
    </>
  );
};

export default LoginModal;


LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenSignup: PropTypes.func,
}