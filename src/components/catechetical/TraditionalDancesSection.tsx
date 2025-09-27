import React from "react";
import { Text, Heading, Box, SimpleGrid } from "@chakra-ui/react";

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

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Το εργαστήρι παραδοσιακών χορών αποτελεί έναν από τους πιο αυθεντικούς τρόπους διατήρησης και μετάδοσης της πολιτιστικής μας κληρονομιάς. Μέσα από τη μάθηση των παραδοσιακών χορών της Κύπρου και της ευρύτερης ελληνικής παράδοσης, τα παιδιά συνδέονται με τις ρίζες τους.
            </Text>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Κάθε χορός που διδάσκεται φέρει μαζί του μια ιστορία, μια παράδοση, έναν τρόπο ζωής. Τα παιδιά μαθαίνουν όχι μόνο τα βήματα, αλλά και τη σημασία κάθε χορού, τις περιστάσεις που χορεύεται και τη σχέση του με την κυπριακή ταυτότητα.
            </Text>

            <Box mb={6}>
                <Heading
                    as="h4"
                    size={{ base: "md", md: "lg" }}
                    mb={4}
                    color="blue.600"
                    fontWeight="semibold"
                >
                    Παραδοσιακοί Χοροί που διδάσκονται
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    <Box>
                        <Text fontWeight="semibold" color="blue.600" mb={1}>Κυπριακοί Χοροί:</Text>
                        <Text>• Συρτός</Text>
                        <Text>• Μαλεβυζιώτικος</Text>
                        <Text>• Τζιαι Ντάμα</Text>
                        <Text>• Σούστα</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="semibold" color="blue.600" mb={1}>Ελληνικοί Χοροί:</Text>
                        <Text>• Καλαματιανός</Text>
                        <Text>• Τσάμικος</Text>
                        <Text>• Ζεϊμπέκικος</Text>
                        <Text>• Κρητικοί χοροί</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                mb={6}
            >
                Το εργαστήρι συμμετέχει τακτικά σε πολιτιστικές εκδηλώσεις, φεστιβάλ και εορτασμούς, παρουσιάζοντας στο κοινό την ομορφιά και τον πλούτο της παραδοσιακής μας κουλτούρας.
            </Text>

            <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                color="gray.700"
                textAlign="justify"
                fontWeight="medium"
                fontStyle="italic"
            >
                Μέσα από τον παραδοσιακό χορό, οι νέες γενιές μαθαίνουν να αγαπούν και να σέβονται την πολιτιστική τους κληρονομιά, διατηρώντας τη ζωντανή για το μέλλον.
            </Text>
        </>
    );
};

export default TraditionalDancesSection;