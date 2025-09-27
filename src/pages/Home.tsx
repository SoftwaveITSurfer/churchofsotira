import { Box, Container, Heading, Text, Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      {/* Hero με background */}
      <Box
        backgroundImage="url('/images/churches/metamorfosis-church-old-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="top"
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
            Εκκλησία Σωτήρας Αμμοχώστου
          </Heading>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            mb={8}
            lineHeight="1.6"
            px={{ base: 0, md: 4 }}
          >
            Καλώς ήρθες στην ιστοσελίδα μας. Εδώ θα βρεις τα νέα μας, τις εκδηλώσεις μας και όλες τις
            πληροφορίες για την κοινότητά μας.
          </Text>
          <Button
            colorScheme="blue"
            size={{ base: "md", md: "lg" }}
            px={{ base: 6, md: 8 }}
            py={{ base: 4, md: 6 }}
            fontSize={{ base: "md", md: "lg" }}
            _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
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

      {/* Άλλο περιεχόμενο μετά */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="960px" px={{ base: 4, md: 8 }}>
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            mb={6}
            color="blue.600"
            textAlign="center"
            lineHeight="1.3"
          >
            Νέα & Εκδηλώσεις
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign="center"
            maxW={{ base: "100%", md: "600px" }}
            mx="auto"
            lineHeight="1.6"
            px={{ base: 2, md: 0 }}
          >
            Εδώ μπορείς να προσθέσεις κάρτες με περιεχόμενο, άρθρα ή ανακοινώσεις
            της εκκλησίας.
          </Text>
        </Container>
      </Box>
    </>
  )
}