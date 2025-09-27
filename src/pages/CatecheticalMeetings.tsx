import React, { useState } from "react";
import { Map } from "../components/Map";
import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
                        Εδώ θα βρεις τα νέα μας, τις εκδηλώσεις μας και όλες τις
                        πληροφορίες για τις Κατηχητικές Συνάξεις.
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
            <Box id="about-section" py={{ base: 12, md: 16 }} bg="gray.50">
                <Container maxW="4xl" px={{ base: 4, md: 8 }}>

                    {/* Section Navigation Buttons */}
                    <Flex
                        justify="center"
                        mb={8}
                        wrap="wrap"
                        gap={{ base: 2, md: 4 }}
                        px={{ base: 2, md: 0 }}
                    >
                        <Button
                            onClick={() => setActiveSection('about')}
                            colorScheme={activeSection === 'about' ? 'blue' : 'gray'}
                            variant={activeSection === 'about' ? 'solid' : 'outline'}
                            size={{ base: "sm", md: "md" }}
                            px={{ base: 4, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            _hover={{ transform: "translateY(-2px)" }}
                        >
                            Η Ιστορία μας
                        </Button>
                        <Button
                            onClick={() => setActiveSection('katixitiko')}
                            colorScheme={activeSection === 'katixitiko' ? 'blue' : 'gray'}
                            variant={activeSection === 'katixitiko' ? 'solid' : 'outline'}
                            size={{ base: "sm", md: "md" }}
                            px={{ base: 4, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            _hover={{ transform: "translateY(-2px)" }}
                        >
                            Κατηχητικό
                        </Button>
                        <Button
                            onClick={() => setActiveSection('banda')}
                            colorScheme={activeSection === 'banda' ? 'blue' : 'gray'}
                            variant={activeSection === 'banda' ? 'solid' : 'outline'}
                            size={{ base: "sm", md: "md" }}
                            px={{ base: 4, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            _hover={{ transform: "translateY(-2px)" }}
                        >
                            Μπάντα
                        </Button>
                        <Button
                            onClick={() => setActiveSection('theater')}
                            colorScheme={activeSection === 'theater' ? 'blue' : 'gray'}
                            variant={activeSection === 'theater' ? 'solid' : 'outline'}
                            size={{ base: "sm", md: "md" }}
                            px={{ base: 4, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            _hover={{ transform: "translateY(-2px)" }}
                        >
                            Θέατρο
                        </Button>
                        <Button
                            onClick={() => setActiveSection('dances')}
                            colorScheme={activeSection === 'dances' ? 'blue' : 'gray'}
                            variant={activeSection === 'dances' ? 'solid' : 'outline'}
                            size={{ base: "sm", md: "md" }}
                            px={{ base: 4, md: 6 }}
                            fontSize={{ base: "sm", md: "md" }}
                            _hover={{ transform: "translateY(-2px)" }}
                        >
                            Παραδοσιακοί Χοροί
                        </Button>
                    </Flex>

                    {/* Content Sections */}
                    <Box
                        bg="white"
                        minH="400px"
                    >
                        {activeSection === 'about' && <AboutSection />}
                        {activeSection === 'katixitiko' && <KatixitikoSection />}
                        {activeSection === 'banda' && <BandSection />}
                        {activeSection === 'theater' && <TheaterSection />}
                        {activeSection === 'dances' && <TraditionalDancesSection />}
                    </Box>
                </Container>
            </Box>

            <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
                <section style={{ margin: "2rem 0" }}>
                    <Box textAlign="center" mb={8}>
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
                        >
                            Επισκεφτείτε μας στο κτίριο των Κατηχητικών Συνάξεων στην καρδιά της Σωτήρας.
                            Εδώ φιλοξενούνται όλες οι δραστηριότητές μας και περιμένουμε να σας υποδεχτούμε!
                        </Text>
                    </Box>
                    <Map
                        lat={35.027125}
                        lng={33.952617}
                        zoom={15}
                        height="350px"
                        markerText="Κατηχητικές Συνάξεις"
                        city="Σωτήρα Αμμοχώστου"
                        country="Κύπρος"
                    />
                </section>

                <Box textAlign="center" mt={8}>
                    <Button
                        onClick={() => navigate('/gallery')}
                        colorScheme="blue"
                        size="lg"
                        px={8}
                        py={4}
                        fontSize="lg"
                        _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                    >
                        Δείτε τη Συλλογή μας
                    </Button>
                </Box>
            </div>
        </>
    );
};

export default CatecheticalMeetings;