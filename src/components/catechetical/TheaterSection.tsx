import React from "react";
import { Text, Heading, Box } from "@chakra-ui/react";

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

                <Box as="ul" pl={6} color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
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