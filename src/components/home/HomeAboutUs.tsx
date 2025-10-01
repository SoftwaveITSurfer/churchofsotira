import React from "react";
import { Text, Heading, Box, Container } from "@chakra-ui/react";

const HomeAboutUs: React.FC = () => {
    return (
        <>
            {/* About Us Section */}
            <Box bg="gray.50" id="about-section" py={{ base: 12, md: 16 }}>
                <Container px={{ base: 4, md: 8 }}>
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
                        minH="400px"
                    >
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Η Σωτήρα Αμμοχώστου είναι ιστορικό χωριό της Κύπρου, του οποίου η ονομασία έχει αγιολογική προέλευση και συνδέεται με τον Σωτήρα Χριστό. Ιδρύθηκε πιθανότατα κατά τη βυζαντινή περίοδο και αναφέρεται ήδη από την εποχή της Φραγκοκρατίας ως βασιλική ιδιοκτησία. Κύριος ναός της κοινότητας είναι η εκκλησία της <Text as="span" fontWeight="bold" color="blue.600">Μεταμορφώσεως του Σωτήρος</Text>, μνημείο του 16ου αιώνα, η οποία είναι κτισμένη πάνω σε θεμέλια παλαιότερης βυζαντινής βασιλικής.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Στην περιοχή σώζονται και άλλα σημαντικά εκκλησιαστικά μνημεία, όπως η εκκλησία του <Text as="span" fontWeight="semibold" color="blue.600">Αγίου Μάμα</Text> (πιθανότατα του 16ου αιώνα), η εκκλησία της <Text as="span" fontWeight="semibold" color="blue.600">Αγίας Βαρβάρας</Text> (τέλους 14ου – αρχών 15ου αιώνα), η εκκλησία του <Text as="span" fontWeight="semibold" color="blue.600">Αγίου Γεωργίου</Text> δυτικά του χωριού, καθώς και ερείπια της εκκλησίας του Αγίου Θεοδώρου στη θέση Χορτάκια. Η <Text as="span" fontWeight="semibold" color="blue.600">Παναγία η Χορδακιώτισσα</Text> αποτελεί επίσης ιδιαίτερα τιμώμενο ναό της περιοχής.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Σημαντικός φορέας διαφύλαξης της θρησκευτικής κληρονομιάς είναι το <Text as="span" fontWeight="bold" color="blue.600">Εκκλησιαστικό Μουσείο Σωτήρας</Text>, το οποίο στεγάζεται στο παρεκκλήσι του Αγίου Γεωργίου. Εκεί φυλάσσονται σπουδαίοι θησαυροί, όπως εικόνες (ανάμεσά τους μία του Χριστού του 15ου αιώνα), παλαιά Ευαγγέλια, βιβλία λειτουργίας, ιερά σκεύη, χειροποίητα αντικείμενα και ένα από τα τρία φορητά ξύλινα τέμπλα του 16ου αιώνα που σώζονται στην Κύπρο.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Η κοινότητα της Σωτήρας διατηρεί ζωντανές τις παραδόσεις της με πανηγύρια και θρησκευτικές εκδηλώσεις, κυριότερη από τις οποίες είναι το μεγάλο πανηγύρι της <Text as="span" fontWeight="bold" color="blue.600">6ης Αυγούστου</Text>, εορτή της Μεταμορφώσεως του Σωτήρος.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            mb={6}
                        >
                            Σημαντική μορφή για τη σύγχρονη πνευματική ζωή της Σωτήρας υπήρξε ο <Text as="span" fontWeight="bold" color="blue.600">Αρχιμανδρίτης Γεώργιος Ιωάννου</Text>, ο οποίος ίδρυσε το <Text as="span" fontWeight="bold" color="blue.600">1954</Text> τις Κατηχητικές Συνάξεις Σωτήρας. Μετά τον θάνατό του στις 25 Νοεμβρίου 2024, η ενορία συνεχίζει τη δράση της υπό τη διακονία των ιερέων: Πρωτοπρεσβυτέρου Αντώνιου Ιωάννου, Πρωτοπρεσβυτέρου Σταύρου Σταύρου, Πρωτοπρεσβυτέρου Γεωργίου Χατζηαδάμου και Πρωτοπρεσβυτέρου Κωνσταντίνου Γερμανού.
                        </Text>

                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="1.8"
                            color="gray.700"
                            textAlign="justify"
                            fontWeight="medium"
                            fontStyle="italic"
                        >
                            Με αυτόν τον τρόπο, η Σωτήρα Αμμοχώστου συνεχίζει να αποτελεί χώρο πνευματικής οικοδομής, πολιτιστικής καλλιέργειας και κοινωνικής προσφοράς, ενώ η ενορία και οι Κατηχητικές Συνάξεις διασφαλίζουν τη συνέχεια της ορθόδοξης παράδοσης στο χωριό.
                        </Text>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HomeAboutUs;