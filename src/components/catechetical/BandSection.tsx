import React from "react";
import { Text, Heading, Box, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import { FiActivity, FiCalendar, FiMapPin } from "react-icons/fi";

const BandSection: React.FC = () => {
    return (
        <>
            <Heading
                as="h3"
                size={{ base: "lg", md: "xl" }}
                mb={6}
                color="blue.600"
                fontWeight="bold"
                textAlign="center"
            >
                Μπάντα «Σημαιοφόροι Χριστού»
            </Heading>

            {/* Info Cards - Έτος ίδρυσης & Τοποθεσία */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mb={8}>
                <Flex
                    align="center"
                    bg="blue.50"
                    p={3}
                    borderRadius="md"
                    borderLeft="3px solid"
                    borderColor="blue.500"
                >
                    <Icon as={FiCalendar} boxSize={5} color="blue.600" mr={2} />
                    <Box>
                        <Text fontSize="xs" color="gray.600" fontWeight="semibold">
                            Έτος ίδρυσης
                        </Text>
                        <Text fontSize="md" fontWeight="bold" color="blue.700">
                            1988
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    align="center"
                    bg="blue.50"
                    p={3}
                    borderRadius="md"
                    borderLeft="3px solid"
                    borderColor="blue.500"
                >
                    <Icon as={FiActivity} boxSize={5} color="blue.600" mr={2} />
                    <Box>
                        <Text fontSize="xs" color="gray.600" fontWeight="semibold">
                            Χρόνια λειτουργίας
                        </Text>
                        <Text fontSize="md" fontWeight="bold" color="blue.700">
                            {new Date().getFullYear() - 1988} χρόνια
                        </Text>
                    </Box>
                </Flex>

                <Flex
                    align="center"
                    bg="blue.50"
                    p={3}
                    borderRadius="md"
                    borderLeft="3px solid"
                    borderColor="blue.500"
                >
                    <Icon as={FiMapPin} boxSize={5} color="blue.600" mr={2} />
                    <Box>
                        <Text fontSize="xs" color="gray.600" fontWeight="semibold">
                            Τοποθεσία
                        </Text>
                        <Text fontSize="md" fontWeight="bold" color="blue.700">
                            Κατηχητικές Συνάξεις Σωτήρας
                        </Text>
                    </Box>
                </Flex>
            </SimpleGrid>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Η μουσική μπάντα «Σημαιοφόροι Χριστού» αποτελεί μία από τις πιο χαρακτηριστικές δραστηριότητες των Κατηχητικών Συνάξεων. Ιδρύθηκε με στόχο να καλλιεργήσει τη μουσική παιδεία των νέων και να συμβάλει στη διατήρηση της εθνικής και θρησκευτικής μας παράδοσης.
            </Text>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Η μπάντα συμμετέχει ενεργά σε όλες τις σημαντικές εκδηλώσεις της κοινότητας, από εθνικές επετείους και θρησκευτικές εορτές, μέχρι πολιτιστικές εκδηλώσεις και φιλανθρωπικές δράσεις. Τα μέλη της μπάντας εκπαιδεύονται σε διάφορα όργανα και αναπτύσσουν τόσο τις μουσικές τους δεξιότητες όσο και το αίσθημα της συλλογικότητας.
            </Text>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Δραστηριότητες της Μπάντας
                </Heading>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={2}>
                        Συνοδεία εθνικών και θρησκευτικών εορτών
                    </Box>
                    <Box as="li" mb={2}>
                        Συμμετοχή σε παρελάσεις και εκδηλώσεις μνήμης
                    </Box>
                    <Box as="li" mb={2}>
                        Μουσική υπόκρουση σε πολιτιστικές εκδηλώσεις
                    </Box>
                </Box>
            </Box>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Όργανα της Μπάντας
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Η μπάντα διαθέτει πλήρη οργανολογικό σύνολο που περιλαμβάνει χάλκινα, ξύλινα όργανα και κρουστά:
                </Text>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={1}>Τρομπέτες και Κόρνα</Box>
                    <Box as="li" mb={1}>Τύμπανα και Κρουστά</Box>
                </Box>
            </Box>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Επιτυχίες και Διακρίσεις
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Κατά τη διάρκεια των δεκαετιών λειτουργίας της, η μπάντα έχει λάβει αναγνώριση για την υψηλή ποιότητα των εμφανίσεών της και τη συμβολή της στην πολιτιστική ζωή της κοινότητας. Έχει συμμετάσχει σε περισσότερες από 100 επίσημες εκδηλώσεις και έχει τιμηθεί από τοπικούς φορείς για την προσφορά της.
                </Text>
            </Box>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                fontWeight="medium"
                fontStyle="italic"
            >
                Μέσα από τη μουσική, η μπάντα «Σημαιοφόροι Χριστού» συνεχίζει να διατηρεί ζωντανή την παράδοση και να εμπνέει τις νεότερες γενιές.
            </Text>
        </>
    );
};

export default BandSection;