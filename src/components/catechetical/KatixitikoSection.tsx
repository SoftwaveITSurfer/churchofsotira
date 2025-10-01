import React from 'react';
import { Text, Heading, Box } from "@chakra-ui/react";

const KatixitikoSection: React.FC = () => {
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
                Κατηχητικές Συναντήσεις
            </Heading>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Οι Κατηχητικές Συναντήσεις προσφέρουν στα παιδιά και τους νέους την ευκαιρία να γνωρίσουν την Ορθόδοξη πίστη, να συζητήσουν θέματα που τους απασχολούν και να συμμετέχουν σε δημιουργικές δραστηριότητες.
            </Text>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Πρόγραμμα και Δραστηριότητες
                </Heading>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={2}>
                        Κάθε Σάββατο πρωί για τα παιδιά του Δημοτικού και απόγευμα για τους μεγαλύτερους.
                    </Box>
                    <Box as="li" mb={2}>
                        Διδασκαλία, συζήτηση, παιχνίδια και δημιουργικές δραστηριότητες
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
                    Ηλιακές Ομάδες
                </Heading>

                <Box fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box mb={3}>
                        <Text fontWeight="semibold" color="blue.600" mb={1}>Μικρά Παιδιά (5-8 ετών):</Text>
                        <Text>Κάθε Κυριακή 10:00-11:00 π.μ. - Βασικές ιστορίες της πίστης μέσω παιχνιδιών</Text>
                    </Box>
                    <Box mb={3}>
                        <Text fontWeight="semibold" color="blue.600" mb={1}>Δημοτικό (9-12 ετών):</Text>
                        <Text>Κάθε Σάββατο 9:00-10:30 π.μ. - Κατήχηση, συζητήσεις, εργαστήρια</Text>
                    </Box>
                    <Box mb={3}>
                        <Text fontWeight="semibold" color="blue.600" mb={1}>Γυμνάσιο-Λύκειο (13-18 ετών):</Text>
                        <Text>Κάθε Σάββατο 5:00-6:30 μ.μ. - Θεολογία, ηθική, κοινωνικά θέματα</Text>
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
                    Θέματα που καλύπτονται
                </Heading>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={1}>Ιστορία της Ορθόδοξης Εκκλησίας</Box>
                    <Box as="li" mb={1}>Άγια Γραφή και ιστορίες από την Παλαιά και Καινή Διαθήκη</Box>
                    <Box as="li" mb={1}>Βίοι Αγίων και παραδείγματα ζωής</Box>
                    <Box as="li" mb={1}>Λειτουργική ζωή και μυστήρια</Box>
                    <Box as="li" mb={1}>Χριστιανική ηθική και αξίες</Box>
                    <Box as="li" mb={1}>Εορτές και παραδόσεις της Εκκλησίας</Box>
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
                    Ειδικές Εκδηλώσεις
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    color="gray.700"
                    textAlign="justify"
                    mb={4}
                >
                    Κατά τη διάρκεια του χρόνου οργανώνονται:
                </Text>

                <Box as="ul" pl={6} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box as="li" mb={1}>Κατασκηνώσεις καλοκαιρινές και χειμερινές</Box>
                    <Box as="li" mb={1}>Προσκυνηματικές εκδρομές σε Μονές και ιερούς τόπους</Box>
                    <Box as="li" mb={1}>Εορταστικές εκδηλώσεις για τα Χριστούγεννα και το Πάσχα</Box>
                    <Box as="li" mb={1}>Τελετές αποφοίτησης και αναγνώρισης των μαθητών</Box>
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
                Για περισσότερες πληροφορίες επικοινωνήστε με τον υπεύθυνο κατηχητή της ενορίας μας.
            </Text>
        </>
    );
};

export default KatixitikoSection;