import {
    Box,
    Flex,
    Button,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Text,
    Divider,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputRightElement,
    Badge,
} from '@chakra-ui/react';
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { MdMyLocation } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import LoginModal from "../landing/LoginModal"
import SignupModal from "../landing/SignupModal"
import { useEffect, useState } from 'react';
import { useModal } from '../../utils/ModalContext';
// import { isOpenLogin } from '../../';

const Navbar = () => {
    const navigate = useNavigate()
    const { loginDisclosure, signupDisclosure } = useModal()
    const [itemInCart, setItemInCart] = useState("")

    useEffect(() => {
        let userCart = JSON.parse(localStorage.getItem("userCart")) || [];
        setItemInCart(userCart.length)
    }, [])

    useEffect(() => {
        const handleUpdateStorage = () => {
            const updatedCart = JSON.parse(localStorage.getItem("userCart")) || [];
            setItemInCart(updatedCart.length)
        }

        window.addEventListener("storage", handleUpdateStorage)

        return () => { window.removeEventListener("storage", handleUpdateStorage) }
    }, [])

    return (
        <Box bg="white" boxShadow="sm">
            {/* Top Section */}
            <Flex justifyContent="center" alignItems="center" bg="black" color="white" px={4} py={1}>
                <Text>Limited Period Offer: Get up to 10% off + extra 15% off on medicines & more offers.</Text>
                <Button variant="link" colorScheme="whiteAlpha" size="sm">
                    Explore
                </Button>
            </Flex>

            {/* Main Navbar Section */}
            <Flex alignItems="center" justifyContent="space-between" px={4} py={2}>
                <Text fontWeight="bold">
                    TATA 1mg
                </Text>

                {/* Navbar Links */}
                <Flex>
                    {['MEDICINE', 'LAB TESTS', 'CONSULT DOCTORS', 'CANCER CARE', 'PARTNERSHIP', 'CARE PLAN'].map((item) => (
                        <Button key={item} variant="ghost" mr={2}>
                            {item}
                        </Button>
                    ))}
                </Flex>

                {/* Right Section (Offers, Login, Cart) */}
                <Flex alignItems="center" justifyContent="space-between" w={'26%'}>

                    <Button bg="transparent" _hover={{ bg: "transparent" }} onClick={loginDisclosure.onOpen}>
                        Login
                    </Button>
                    <LoginModal isOpen={loginDisclosure.isOpen} onClose={loginDisclosure.onClose} onOpenSignup={signupDisclosure.onOpen} />
                    <Divider color={'black'} orientation='vertical' h={'20px'} />
                    <Button bg="transparent" _hover={{ bg: "transparent" }} onClick={signupDisclosure.onOpen}>
                        Sign Up
                    </Button>
                    <SignupModal isOpen={signupDisclosure.isOpen} onOpen={signupDisclosure.onOpen} onOpenLogin={loginDisclosure.onOpen} onClose={signupDisclosure.onClose} />
                    <Link>
                        Offers
                    </Link>
                    <Flex mr={4}>
                        <IconButton color={'black'} aria-label="Cart" fontSize={'2xl'} variant={'link'} icon={<RiShoppingCart2Line />} onClick={() => navigate('/cart-page')} />
                        <Badge ml={-2} mb={2}>{itemInCart}</Badge>
                    </Flex>
                    <Link>Need Help?</Link>
                </Flex>
            </Flex>

            {/* Search and Location Section */}
            <Flex alignItems="center" justifyContent="space-between" p={1} px={5} borderTop={'1px'} borderBottom={'1px'} borderColor={'#f3f3f3'}>
                <Flex w={"65%"}>
                    <InputGroup size='sm' w={"30%"} bg="gray.100" mr={1}>
                        <InputLeftAddon bg={'transparent'} border={'none'}><IoLocationSharp /></InputLeftAddon>
                        <Input placeholder='Gurgaon' border={'none'} />
                        <InputRightAddon bg={'transparent'} border={'none'}><MdMyLocation /></InputRightAddon>
                    </InputGroup>
                    <InputGroup alignItems={'center'}>
                        <Input size='sm' variant={'filled'} placeholder="Search for Medicines and Health Products" />
                        <InputRightElement>
                            <CiSearch aria-label="Search" />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex>
                    <Text mr={4} fontSize={'sm'}>
                        QUICK BUY! Get 15% off on medicines*
                    </Text>
                    <Button colorScheme="red" size="sm" mr={4}>
                        Quick order
                    </Button>
                </Flex>

            </Flex>

            {/* Bottom Navbar Section */}
            <Flex px={2} py={2} justifyContent={"space-around"}>
                {[
                    'Health Resource Center',
                    'Vitamins & Nutrition',
                    'Nutritional Drinks',
                    'Fitness Supplements',
                    'Stomach Care',
                    'Feminine Care',
                    'Healthy Snacks',
                    'Diabetes',
                    'Immunity Boosters',
                ].map((category) => (
                    <Menu key={category}>
                        <MenuButton fontSize={'sm'} as={Text} variant="link" mx={2} _hover={{ color: "tomato", cursor: "pointer" }}>
                            <Flex alignItems={'center'} >
                                {category} <FiChevronDown />
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Option 1</MenuItem>
                            <MenuItem>Option 2</MenuItem>
                            <MenuItem>Option 3</MenuItem>
                        </MenuList>
                    </Menu>
                ))}
            </Flex>
        </Box>
    );
};

export default Navbar;
