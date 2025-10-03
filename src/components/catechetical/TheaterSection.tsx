import React from "react";
import { Text, Heading, Box, SimpleGrid, Icon, Flex } from "@chakra-ui/react";
import { FiActivity, FiCalendar, FiMapPin } from "react-icons/fi";

const TheaterSection: React.FC = () => {
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
                Εργαστήρι Θεάτρου
            </Heading>

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
                            2000
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
                            {new Date().getFullYear() - 2000} χρόνια
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
                Το εργαστήρι θεάτρου των Κατηχητικών Συνάξεων αποτελεί έναν από τους πιο δημιουργικούς χώρους έκφρασης για τα παιδιά και τους νέους. Μέσα από τη θεατρική τέχνη, τα μέλη αναπτύσσουν την αυτοπεποίθησή τους, τη δημιουργικότητά τους και μαθαίνουν να συνεργάζονται αρμονικά.
            </Text>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Κάθε χρόνο, το εργαστήρι παρουσιάζει θεατρικές παραστάσεις που πραγματεύονται θέματα θρησκευτικά, ιστορικά και κοινωνικά. Οι παραστάσεις αυτές αποτελούν σημαντικές πολιτιστικές εκδηλώσεις για την κοινότητα και προσφέρουν στους συμμετέχοντες μια ολοκληρωμένη θεατρική εμπειρία.
            </Text>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Τι μαθαίνουν τα παιδιά
                </Heading>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={2}>
                        Τεχνικές υποκριτικής και σκηνικής παρουσίας
                    </Box>
                    <Box as="li" mb={2}>
                        Φωνητική και σωστή προφορά
                    </Box>
                    <Box as="li" mb={2}>
                        Κινητικότητα και σωματική έκφραση
                    </Box>
                    <Box as="li" mb={2}>
                        Συνεργασία και ομαδικότητα
                    </Box>
                    <Box as="li" mb={2}>
                        Αυτοπεποίθηση και δημόσια ομιλία
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
                    Πρόσφατες Παραστάσεις
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Τα τελευταία χρόνια το εργαστήρι έχει παρουσιάσει:
                </Text>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={1}>"Ο Άγιος Νικόλαος" - Θρησκευτική παράσταση</Box>
                    <Box as="li" mb={1}>"Οι Ήρωες του '21" - Ιστορικό δράμα</Box>
                    <Box as="li" mb={1}>"Το Μήλο της Ερημού" - Κοινωνικό θέατρο</Box>
                    <Box as="li" mb={1}>"Τα Κάλαντα των Χριστουγέννων" - Εορταστική παράσταση</Box>
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
                    Πώς να Συμμετέχετε
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Το εργαστήρι θεάτρου δέχεται παιδιά και νέους ηλικίας 8-18 ετών. Δεν απαιτείται προηγούμενη εμπειρία - μόνο ενθουσιασμός και διάθεση για συμμετοχή! Οι πρόβες γίνονται κάθε Σάββατο απόγευμα στο κτήριο των Κατηχητικών Συνάξεων.
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
                Το θέατρο γίνεται έτσι μέσο καλλιέργειας της προσωπικότητας και ανάπτυξης δεξιοτήτων που θα συνοδεύσουν τα παιδιά σε όλη τους τη ζωή.
            </Text>
        </>
    );
};

export default TheaterSection;