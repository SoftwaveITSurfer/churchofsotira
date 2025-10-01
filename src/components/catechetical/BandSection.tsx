import React from "react";
import { Text, Heading, Box } from "@chakra-ui/react";

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
                    <Box as="li" mb={1}>Τρομπόνια και Τούμπα</Box>
                    <Box as="li" mb={1}>Κλαρινέτα και Σαξόφωνα</Box>
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