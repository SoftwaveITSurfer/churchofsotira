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