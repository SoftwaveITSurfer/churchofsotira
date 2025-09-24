import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const galleryImages = [
    { src: "/images/katixitiko/3G0A4094.JPG", alt: "Δραστηριότητες Κατηχητικών Συνάξεων" },
    { src: "/images/katixitiko/paidia.jpg", alt: "Ομαδική συναντήσεις" },
    { src: "/images/katixitiko/IMG-9816aa3dc523bde7074fc12830843c3d-V.jpg", alt: "Εκκλησία" },
    { src: "/images/katixitiko/parelasi.jpg", alt: "Σημαιοφόροι Χριστού" },
];

const Gallery: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                bg="gradient-to-r"
                bgGradient="linear(to-r, blue.600, blue.800)"
                py={{ base: 16, md: 24 }}
                color="white"
            >
                <Container maxW="4xl" textAlign="center">
                    <Heading
                        as="h1"
                        size={{ base: "xl", md: "2xl" }}
                        mb={4}
                        fontWeight="bold"
                    >
                        Συλλογή Φωτογραφιών
                    </Heading>
                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        lineHeight="1.6"
                        maxW="2xl"
                        mx="auto"
                    >
                        Στιγμιότυπα από τις δραστηριότητες και τις εκδηλώσεις των Κατηχητικών Συνάξεων Σωτήρας
                    </Text>
                </Container>
            </Box>

            {/* Gallery Section */}
            <Box py={{ base: 12, md: 16 }}>
                <Container maxW="6xl">
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        gap={{ base: 6, md: 8 }}
                    >
                        {galleryImages.map((img, idx) => (
                            <Box
                                key={idx}
                                borderRadius="lg"
                                overflow="hidden"
                                shadow="lg"
                                transition="transform 0.3s ease, shadow 0.3s ease"
                                _hover={{
                                    transform: "translateY(-8px)",
                                    shadow: "2xl"
                                }}
                                bg="white"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    w="full"
                                    h={{ base: "250px", md: "300px" }}
                                    objectFit="cover"
                                    loading="lazy"
                                />
                                <Box p={4}>
                                    <Text
                                        fontSize="md"
                                        color="gray.600"
                                        textAlign="center"
                                        fontWeight="medium"
                                    >
                                        {img.alt}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>

                    {/* Add more photos message */}
                    <Box
                        textAlign="center"
                        mt={{ base: 12, md: 16 }}
                        p={8}
                        bg="gray.50"
                        borderRadius="xl"
                    >
                        <Heading
                            as="h3"
                            size="lg"
                            mb={4}
                            color="blue.600"
                        >
                            Περισσότερες φωτογραφίες σύντομα!
                        </Heading>
                        <Text
                            fontSize="lg"
                            color="gray.600"
                            lineHeight="1.6"
                        >
                            Συνεχώς προσθέτουμε νέες φωτογραφίες από τις δραστηριότητές μας.
                            Επισκεφτείτε μας ξανά για να δείτε περισσότερα στιγμιότυπα!
                        </Text>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Gallery;