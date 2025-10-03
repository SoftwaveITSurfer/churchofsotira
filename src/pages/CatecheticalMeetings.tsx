import React, { useState } from "react";
import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Map } from "../components/Map";
import AboutSection from "../components/catechetical/AboutSection";
import BandSection from "../components/catechetical/BandSection";
import TheaterSection from "../components/catechetical/TheaterSection";
import TraditionalDancesSection from "../components/catechetical/TraditionalDancesSection";
import KatixitikoSection from "../components/catechetical/KatixitikoSection";

const CatecheticalMeetings: React.FC = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('about');

    return (
        <>
            {/* Hero με background */}
            <Box
                backgroundImage="url('/images/katixitiko/kss-bg.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                minH={{ base: "70vh", md: "100vh" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                px={{ base: 4, md: 0 }}
            >
                {/* Σκούρο overlay */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.600"
                />

                <Container
                    position="relative"
                    zIndex={1}
                    textAlign="center"
                    color="white"
                    maxW={{ base: "100%", md: "800px" }}
                    px={{ base: 4, md: 8 }}
                >
                    <Heading
                        as="h1"
                        size={{ base: "xl", md: "2xl" }}
                        mb={4}
                        fontWeight="bold"
                        lineHeight="1.2"
                    >
                        Κατηχητικές Συνάξεις Σωτήρας Αμμοχώστου
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "xl" }}
                        mb={8}
                        lineHeight="1.6"
                        px={{ base: 0, md: 4 }}
                    >
                        Εδώ θα βρεις όλες τις πληροφορίες για τις Κατηχητικές Συνάξεις.
                    </Text>
                    <Button
                        colorScheme="blue"
                        size={{ base: "md", md: "lg" }}
                        px={{ base: 6, md: 8 }}
                        py={{ base: 4, md: 6 }}
                        fontSize={{ base: "md", md: "lg" }}
                        _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                        onClick={() => {
                            document.getElementById('about-section')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                    Μάθε περισσότερα
                    </Button>
                </Container>
            </Box>

            {/* Sections */}
            <Box id="about-section" py={{ base: 12, md: 16 }} bg="gray.50" scrollMarginTop="100px">
                <Container maxW="container.xl" px={{ base: 4, md: 8 }}>

                    {/* Modern Pills Navigation */}
                    <Flex
                        justify="center"
                        mb={10}
                        wrap="wrap"
                        gap={{ base: 3, md: 4 }}
                        px={{ base: 2, md: 0 }}
                    >
                        <Button
                            onClick={() => setActiveSection("about")}
                            borderRadius="full"
                            bg={activeSection === "about" ? "blue.500" : "gray.100"}
                            color={activeSection === "about" ? "white" : "gray.700"}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 5, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="600"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-3px)",
                                shadow: "md",
                                bg: activeSection === "about" ? "blue.600" : "gray.200",
                            }}
                        >
                            Η Ιστορία μας
                        </Button>

                        <Button
                            onClick={() => setActiveSection("katixitiko")}
                            borderRadius="full"
                            bg={activeSection === "katixitiko" ? "blue.500" : "gray.100"}
                            color={activeSection === "katixitiko" ? "white" : "gray.700"}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 5, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="600"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-3px)",
                                shadow: "md",
                                bg: activeSection === "katixitiko" ? "blue.600" : "gray.200",
                            }}
                        >
                            Κατηχητικές Συνάξεις
                        </Button>

                        <Button
                            onClick={() => setActiveSection("banda")}
                            borderRadius="full"
                            bg={activeSection === "banda" ? "blue.500" : "gray.100"}
                            color={activeSection === "banda" ? "white" : "gray.700"}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 5, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="600"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-3px)",
                                shadow: "md",
                                bg: activeSection === "banda" ? "blue.600" : "gray.200",
                            }}
                        >
                            Μπάντα «Σημαιοφόροι Χριστού»
                        </Button>

                        <Button
                            onClick={() => setActiveSection("theater")}
                            borderRadius="full"
                            bg={activeSection === "theater" ? "blue.500" : "gray.100"}
                            color={activeSection === "theater" ? "white" : "gray.700"}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 5, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="600"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-3px)",
                                shadow: "md",
                                bg: activeSection === "theater" ? "blue.600" : "gray.200",
                            }}
                        >
                            Εργαστήρι Θεάτρου
                        </Button>

                        <Button
                            onClick={() => setActiveSection("dances")}
                            borderRadius="full"
                            bg={activeSection === "dances" ? "blue.500" : "gray.100"}
                            color={activeSection === "dances" ? "white" : "gray.700"}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 5, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="600"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "translateY(-3px)",
                                shadow: "md",
                                bg: activeSection === "dances" ? "blue.600" : "gray.200",
                            }}
                        >
                            Εργαστήρι Παραδοσιακών Χορών
                        </Button>
                    </Flex>

                    {/* Content Sections - No card wrapper, just content */}
                    <Box>
                        {activeSection === 'about' && <AboutSection />}
                        {activeSection === 'katixitiko' && <KatixitikoSection />}
                        {activeSection === 'banda' && <BandSection />}
                        {activeSection === 'theater' && <TheaterSection />}
                        {activeSection === 'dances' && <TraditionalDancesSection />}
                    </Box>
                </Container>
            </Box>

            {/* Θα μας βρείτε Section */}
            <Box textAlign="center" py={{ base: 12, md: 16 }} bg="white">
                <Container maxW="container.xl">
                    <Heading
                        as="h2"
                        size={{ base: "lg", md: "xl" }}
                        mb={4}
                        color="blue.600"
                        fontWeight="bold"
                    >
                        Θα μας βρείτε
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.600"
                        lineHeight="1.6"
                        maxW="600px"
                        mx="auto"
                        mb={8}
                    >
                        Επισκεφτείτε μας στο κτίριο των Κατηχητικών Συνάξεων στην καρδιά της Σωτήρας.
                        Εδώ φιλοξενούνται όλες οι δραστηριότητές μας και περιμένουμε να σας υποδεχτούμε!
                    </Text>
                </Container>
            </Box>

            {/* Map Section */}
            <Box bg="white" pb={16} px={{ base: 4, md: 0 }}>
                <Container maxW="container.xl">
                    <Map
                        googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.3511241010661!2d33.95238204448627!3d35.02726365609426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfcf12b33c5ed9%3A0x670a8cab4967f491!2zzpvOtc-Jz4YuIM6czrHOus6xz4HOr86_z4UgzpMgOCwgzqPPic-Ezq7Pgc6xIDUzOTAsIM6az43PgM-Bzr_Pgg!5e1!3m2!1sel!2sgr!4v1759001707547!5m2!1sel!2sgr"
                        height="450px"
                        markerText="Κατηχητικές Συνάξεις Σωτήρας"
                    />
                </Container>
            </Box>
        </>
    );
};

export default CatecheticalMeetings;