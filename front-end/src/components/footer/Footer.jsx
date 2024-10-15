import { Box, Flex, Heading, Text, Input, Button, Link, Grid, VStack, HStack, Divider, Image, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaShieldAlt, FaLock, FaWallet } from 'react-icons/fa';

function FooterSection() {
    return (<>
        <Box bg="gray.50" py={10} px={5}>
            {/* Statistics Section */}
            <Flex justify="space-around" textAlign="center" py={5}>
                <Box>
                    <Heading size="lg">260m+</Heading>
                    <Text>Visitors</Text>
                </Box>
                <Box>
                    <Heading size="lg">31m+</Heading>
                    <Text>Orders Delivered</Text>
                </Box>
                <Box>
                    <Heading size="lg">1800+</Heading>
                    <Text>Cities</Text>
                </Box>
            </Flex>

            <Divider my={5} />

            {/* App Download Section */}
            <Flex justify="center" align="center" py={5} direction="column">
                <Text mb={3}>Get the link to download App</Text>
                <HStack>
                    <Input placeholder="Enter Phone Number" maxW="300px" />
                    <Button colorScheme="red">Send Link</Button>
                </HStack>
            </Flex>

            <Divider my={5} />

            {/* Footer Section */}
            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8} py={10}>
                {/* Know Us Section */}
                <VStack align="flex-start">
                    <Heading size="sm">Know Us</Heading>
                    <Link>About Us</Link>
                    <Link>Contact Us</Link>
                    <Link>Press Coverage</Link>
                    <Link>Careers</Link>
                    <Link>Business Partnership</Link>
                    <Link>Become a Health Partner</Link>
                    <Link>Corporate Governance</Link>
                </VStack>

                {/* Our Policies Section */}
                <VStack align="flex-start">
                    <Heading size="sm">Our Policies</Heading>
                    <Link>Privacy Policy</Link>
                    <Link>Terms and Conditions</Link>
                    <Link>Editorial Policy</Link>
                    <Link>Return Policy</Link>
                    <Link>IP Policy</Link>
                    <Link>Grievance Redressal Policy</Link>
                    <Link>Fake Jobs and Fraud Disclaimer</Link>
                </VStack>

                {/* Our Services Section */}
                <VStack align="flex-start">
                    <Heading size="sm">Our Services</Heading>
                    <Link>Order Medicines</Link>
                    <Link>Book Lab Tests</Link>
                    <Link>Consult a Doctor</Link>
                    <Link>Ayurveda Articles</Link>
                    <Link>Hindi Articles</Link>
                    <Link>Care Plan</Link>
                </VStack>

                {/* Connect Section */}
                <VStack align="flex-start">
                    <Heading size="sm">Connect</Heading>
                    <HStack spacing={4}>
                        <FaFacebook size="24" />
                        <FaInstagram size="24" />
                        <FaTwitter size="24" />
                        <FaYoutube size="24" />
                        <FaLinkedin size="24" />
                    </HStack>
                    <Button colorScheme="red" mt={4}>SIGN UP</Button>
                    <Text>Download App</Text>
                    <Flex gap={2}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="100px" />
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple_app_store_badge.svg" alt="App Store" width="85px" />
                    </Flex>
                </VStack>
            </Grid>
        </Box>
        <Box bg="gray.50" py={10} px={5}>
            {/* Trust Badges Section */}
            <Flex justify="space-around" textAlign="center" py={5} flexWrap="wrap">
                <VStack>
                    <Icon as={FaShieldAlt} boxSize={10} color="red.500" />
                    <Heading size="md">Reliable</Heading>
                    <Text maxW="250px">
                        All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.
                    </Text>
                </VStack>
                <VStack>
                    <Icon as={FaLock} boxSize={10} color="red.500" />
                    <Heading size="md">Secure</Heading>
                    <Text maxW="250px">
                        Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant.
                    </Text>
                </VStack>
                <VStack>
                    <Icon as={FaWallet} boxSize={10} color="red.500" />
                    <Heading size="md">Affordable</Heading>
                    <Text maxW="250px">
                        Find affordable medicine substitutes, save up to 50% on health products, up to 80% on lab tests and free doctor consultations.
                    </Text>
                </VStack>
            </Flex>

            <Divider my={5} />

            {/* Certification Section */}
            <Flex justify="center" align="center" direction="column" py={1}>
                <HStack spacing={8}>
                    <Image src="https://static.legitscript.com/seals/729605.png" alt="LegitScript Certified" boxSize="60px" />
                    <Image src="https://onemg.gumlet.io/iso_certification_03_07_2024.jpg" alt="ISO Certified" boxSize="60px" />
                </HStack>
                <Text mt={3} fontWeight="semibold">
                    India&apos;s only LegitScript and ISO/IEC 27001:2022 certified online healthcare platform
                </Text>
            </Flex>

            <Divider my={5} />

            {/* Copyright and Compliance Section */}
            <Flex justify="space-between" align="center" flexWrap="wrap" py={1}>
                <Text fontSize="xs">
                    © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945.
                </Text>
                <HStack spacing={4}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" boxSize="40px" />
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" boxSize="40px" />
                </HStack>
            </Flex>
        </Box>
    </>
    );
}

export default FooterSection;
