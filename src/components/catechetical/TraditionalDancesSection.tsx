import React from "react";
import { Text, Heading, Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FiCalendar, FiMapPin, FiActivity } from "react-icons/fi";

const TraditionalDancesSection: React.FC = () => {
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
                Εργαστήρι Παραδοσιακών Χορών
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
                            2011
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
                            {new Date().getFullYear() - 2011} χρόνια
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

            {/* Περιγραφή */}
            <Box mb={8}>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                >
                    Το Εργαστήρι Παραδοσιακών χορών συνδράμει ουσιαστικά στη διατήρηση και διάδοση της χορευτικής μας κληρονομιάς, προσφέροντας στα παιδιά και στους νέους δημιουργική απασχόληση, πνευματική καλλιέργεια και κοινωνική συναναστροφή. Μέσα από τον παραδοσιακό χορό καλλιεργείται ο σεβασμός στην ιστορία και στις ρίζες μας, ενώ παράλληλα ενισχύεται η συνοχή της κοινότητας και η γέφυρα επικοινωνίας ανάμεσα στις γενιές.
                </Text>
            </Box>

            {/* Ιστορία */}
            <Box mb={8}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Ιστορική Αναδρομή
                </Heading>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Η προσπάθεια αναβίωσης του Χορευτικού των Κατηχητικών ξεκίνησε τον Σεπτέμβριο του 2011, με όραμα να δώσει στα παιδιά και στους νέους την ευκαιρία να γνωρίσουν και να αγαπήσουν τον ανεξάντλητο πλούτο της ελληνικής και κυπριακής χορευτικής μας παράδοσης.
                </Text>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Πρωταρχικός στόχος μας είναι η υγιής και δημιουργική απασχόληση των παιδιών μέσα από την τέχνη του χορού, αλλά και η καλλιέργεια του σεβασμού προς τη λαϊκή μας κληρονομιά. Η βασική αρχή που διέπει το Χορευτικό είναι η πιστή και η αυθεντική απόδοση των ελληνικών και κυπριακών παραδοσιακών χορών, όπως αυτοί μεταδόθηκαν από γενιά σε γενιά, κρατώντας αναλλοίωτη τη γνησιότητά τους.
                </Text>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Στα δεκατέσσερα χρόνια συνεχούς λειτουργίας του, το Εργαστήρι Παραδοσιακών Χορών έχει καταφέρει να συγκεντρώσει στις τάξεις του μέλη όλων των ηλικιών – από μικρά παιδιά μέχρι ενήλικες – αποδεικνύοντας πως ο χορός δεν γνωρίζει όρια ηλικίας, αλλά αποτελεί γέφυρα που ενώνει το χθες με το σήμερα.
                </Text>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Ως ένδειξη τιμής για τα 70 χρόνια αδιάκοπης λειτουργίας των Κατηχητικών, οι χορευτικές μας ομάδες φέρουν τα ονόματα αρχαίων ναών του τόπου μας, συνδέοντας με αυτόν τον τρόπο την πίστη, την παράδοση και τον πολιτισμό με την καθημερινή μας δράση.
                </Text>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    fontWeight="medium"
                    fontStyle="italic"
                >
                    Με μεράκι, αγάπη και αφοσίωση, συνεχίζουμε να κρατούμε ζωντανή την παράδοση, μεταδίδοντας στις νεότερες γενιές τη χαρά του χορού και την περηφάνια για την πολιτιστική μας ταυτότητα.
                </Text>
            </Box>
        </>
    );
};

export default TraditionalDancesSection;