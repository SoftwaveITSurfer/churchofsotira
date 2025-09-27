import React from "react";
import { Map } from "../components/Map";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CatecheticalMeetings: React.FC = () => {
    const navigate = useNavigate();

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

            {/* About Us Section */}
            <Box id="about-section" py={{ base: 12, md: 16 }} bg="gray.50">
                <Container maxW="4xl" px={{ base: 4, md: 8 }}>
                    <Heading
                        as="h2"
                        size={{ base: "lg", md: "xl" }}
                        textAlign="center"
                        mb={{ base: 8, md: 12 }}
                        color="blue.600"
                        fontWeight="bold"
                    >
                        Η Ιστορία μας
                    </Heading>

                    <Box
                        bg="white"
                        borderRadius="xl"
                        p={{ base: 6, md: 10 }}
                        shadow="lg"
                        border="1px"
                        borderColor="gray.200"
                    >
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Οι Κατηχητικές Συνάξεις Σωτήρας ιδρύθηκαν το <Text as="span" fontWeight="bold" color="blue.600">1954</Text> από τον αείμνηστο π. Γεώργιο Ιωάννου, με όραμα να αποτελέσουν πνευματική εστία για τα παιδιά και τους νέους της κοινότητας. Από την πρώτη στιγμή της λειτουργίας τους, οι Συνάξεις είχαν διπλό σκοπό: την κατήχηση των πιστών σύμφωνα με την ορθόδοξη πίστη και παράδοση, καθώς και την ουσιαστική και δημιουργική απασχόληση των νέων μέσα σε ένα ασφαλές και υγιές περιβάλλον.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Στη διάρκεια των δεκαετιών, οι Κατηχητικές Συνάξεις ανέπτυξαν πλούσια δράση, καλλιεργώντας όχι μόνο τη γνώση της πίστεως αλλά και την κοινωνικότητα, τη συνεργασία και την πολιτιστική ταυτότητα της τοπικής κοινωνίας.
                        </Text>

                        <Box mb={6}>
                            <Heading
                                as="h3"
                                size={{ base: "md", md: "lg" }}
                                mb={4}
                                color="blue.600"
                                fontWeight="semibold"
                            >
                                Οι Δραστηριότητές μας
                            </Heading>

                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                lineHeight="1.8"
                                color="gray.700"
                                textAlign="justify"
                                mb={4}
                            >
                                Σήμερα, το οίκημα των Κατηχητικών Συνάξεων αποτελεί ζωντανό κέντρο δραστηριοτήτων. Φιλοξενεί:
                            </Text>

                            <Box as="ul" pl={6} color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                                <Box as="li" mb={2}>
                                    <Text as="span" fontWeight="semibold" color="blue.600">την Κατήχηση του Σαββάτου</Text>, όπου τα παιδιά διδάσκονται τα δόγματα της Εκκλησίας και συμμετέχουν σε δημιουργικές συζητήσεις,
                                </Box>
                                <Box as="li" mb={2}>
                                    <Text as="span" fontWeight="semibold" color="blue.600">το Εργαστήρι Παραδοσιακών Χορών</Text>, που μεταδίδει τη λαϊκή παράδοση από γενιά σε γενιά,
                                </Box>
                                <Box as="li" mb={2}>
                                    <Text as="span" fontWeight="semibold" color="blue.600">τη μουσική μπάντα «Σημαιοφόροι Χριστού»</Text>, η οποία συνοδεύει εθνικές και θρησκευτικές εκδηλώσεις,
                                </Box>
                                <Box as="li" mb={2}>
                                    <Text as="span" fontWeight="semibold" color="blue.600">το Εργαστήρι Θεάτρου</Text>, που καλλιεργεί τη δημιουργική έκφραση και την ομαδικότητα,
                                </Box>
                                <Box as="li" mb={2}>
                                    <Text as="span" fontWeight="semibold" color="blue.600">την Ορχήστρα</Text>, δίνοντας στους νέους τη δυνατότητα να αναπτύξουν μουσικές δεξιότητες,
                                </Box>
                            </Box>
                        </Box>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Πέρα από τις τακτικές τους δραστηριότητες, οι Κατηχητικές Συνάξεις συμβάλλουν ενεργά στην κοινωνική και φιλανθρωπική ζωή της Σωτήρας. Συμμετέχουν σε εορτασμούς, εθνικές επετείους και εκκλησιαστικές εκδηλώσεις, διοργανώνουν φιλανθρωπικές δράσεις, στηρίζουν οικογένειες που έχουν ανάγκη και ενισχύουν πνευματικά την κοινότητα σε δύσκολες στιγμές.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            fontWeight="medium"
                            fontStyle="italic"
                        >
                            Με τον τρόπο αυτό, οι Κατηχητικές Συνάξεις Σωτήρας συνεχίζουν να αποτελούν χώρο πνευματικής οικοδομής, πολιτιστικής καλλιέργειας και προσφοράς προς τον συνάνθρωπο, συμβάλλοντας στη διαμόρφωση της ταυτότητας και του ήθους της τοπικής κοινωνίας.
                        </Text>
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