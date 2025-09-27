import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Badge,
} from "@chakra-ui/react"

// Mock data for church events
const upcomingEvents = [
  {
    date: "1 Νοεμβρίου 2025",
    title: "Αγιασμός Σχολικού Έτους",
    time: "08:30",
    description: "Ειδική ευλογία για τη νέα σχολική χρονιά. Όλοι οι μαθητές και οι οικογένειες είναι καλοδεχούμενες.",
    type: "blessing",
    location: "Κεντρικός Ναός"
  },
  {
    date: "20 Νοεμβρίου 2025",
    title: "Συναυλία Βυζαντινής Μουσικής",
    time: "19:30",
    description: "Βραδιά αφιερωμένη στη βυζαντινή μουσική με τη συμμετοχή της χορωδίας μας και καλεσμένων καλλιτεχνών.",
    type: "music",
    location: "Αίθουσα εκδηλώσεων"
  },
  {
    date: "5 Δεκεμβρίου 2025",
    title: "Εθελοντική Δράση Φαγητού",
    time: "12:00 - 16:00",
    description: "Μαγείρεμα και διανομή φαγητού σε άπορες οικογένειες της περιοχής. Χρειαζόμαστε εθελοντές!",
    type: "community",
    location: "Κουζίνα εκκλησίας"
  },
  {
    date: "15 Δεκεμβρίου 2025",
    title: "Χριστουγεννιάτικη Γιορτή Παιδιών",
    time: "16:00",
    description: "Γιορτή για τα παιδιά του κατηχητικού με θεατρικό, τραγούδια και δώρα από τον Άγιο Βασίλη.",
    type: "youth",
    location: "Αίθουσα εκδηλώσεων"
  },
  {
    date: "24 Δεκεμβρίου 2025",
    title: "Παραμονή Χριστουγέννων",
    time: "23:00",
    description: "Ιερή Αγρυπνία και Θεία Λειτουργία των Χριστουγέννων. Κάλαντα από τα παιδιά του κατηχητικού.",
    type: "feast",
    location: "Κεντρικός Ναός"
  },
]

const getEventColor = (type: string) => {
  switch (type) {
    case "feast": return "red"
    case "event": return "yellow"
    case "blessing": return "cyan"
    case "music": return "pink"
    case "community": return "teal"
    case "youth": return "orange"
    case "prayer": return "green"
    default: return "gray"
  }
}

const getEventIcon = (type: string) => {
  switch (type) {
    case "feast": return "✨"
    case "event": return "🎉"
    case "blessing": return "🕊️"
    case "music": return "🎵"
    case "community": return "🤝"
    case "youth": return "👥"
    case "prayer": return "🙏"
    default: return "📅"
  }
}

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case "feast": return "Γιορτή"
    case "event": return "Εκδήλωση"
    case "blessing": return "Αγιασμός"
    case "music": return "Μουσική"
    case "community": return "Κοινωνική Δράση"
    case "youth": return "Παιδική Εκδήλωση"
    case "prayer": return "Προσευχή"
    default: return "Εκδήλωση"
  }
}

export default function Schedule() {
  return (
    <Box py={{ base: 8, md: 12 }} bg="gray.50" minH="80vh">
      <Container maxW="1000px" px={{ base: 4, md: 8 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="blue.600"
            mb={4}
            lineHeight="1.2"
          >
            Προγραμματισμένες Εκδηλώσεις
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            maxW="700px"
            mx="auto"
            px={{ base: 2, md: 0 }}
            lineHeight="1.6"
          >
            Δείτε τις προσεχείς εκδηλώσεις και γιορτές της εκκλησίας μας.
            Όλοι είστε καλοδεχούμενοι να συμμετάσχετε!
          </Text>
        </Box>

        {/* Events List */}
        <VStack gap={6} align="stretch">
          {upcomingEvents.map((event, index) => (
            <Box
              key={index}
              bg="white"
              p={{ base: 4, md: 6 }}
              borderRadius="lg"
              shadow="md"
              borderLeft="6px solid"
              borderLeftColor={`${getEventColor(event.type)}.400`}
              _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Grid
                templateColumns={{ base: "1fr", md: "200px 1fr auto" }}
                gap={4}
                alignItems="start"
              >
                {/* Date and Time */}
                <GridItem>
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      color="gray.700"
                      lineHeight="1.3"
                    >
                      {event.date}
                    </Text>
                    <HStack>
                      <Text fontSize="sm" color="gray.500">🕐</Text>
                      <Text fontSize="sm" color="gray.500" fontWeight="medium">
                        {event.time}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text fontSize="sm" color="gray.500">📍</Text>
                      <Text fontSize="sm" color="gray.500">
                        {event.location}
                      </Text>
                    </HStack>
                  </VStack>
                </GridItem>

                {/* Event Details */}
                <GridItem>
                  <VStack align="start" gap={2}>
                    <HStack>
                      <Text fontSize={{ base: "md", md: "lg" }}>{getEventIcon(event.type)}</Text>
                      <Heading
                        size={{ base: "sm", md: "md" }}
                        color="gray.700"
                        lineHeight="1.3"
                      >
                        {event.title}
                      </Heading>
                    </HStack>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {event.description}
                    </Text>
                  </VStack>
                </GridItem>

                {/* Event Type Badge */}
                <GridItem>
                  <Badge
                    colorScheme={getEventColor(event.type)}
                    size={{ base: "md", md: "lg" }}
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {getEventTypeLabel(event.type)}
                  </Badge>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </VStack>

        {/* Info Section */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={12}>
          <Box bg="blue.50" p={6} borderRadius="lg" border="1px solid" borderColor="blue.200">
            <Heading size="md" color="blue.700" mb={4}>
              Πληροφορίες Επικοινωνίας
            </Heading>
            <VStack align="start" gap={2}>
              <Text fontSize="sm" color="blue.600">
                📞 +357 23 72 1234
              </Text>
              <Text fontSize="sm" color="blue.600">
                📧 info@churchofsotira.cy
              </Text>
              <Text fontSize="sm" color="blue.600">
                📍 Κεντρική Πλατεία Αμμοχώστου
              </Text>
            </VStack>
          </Box>

          <Box bg="green.50" p={6} borderRadius="lg" border="1px solid" borderColor="green.200">
            <Heading size="md" color="green.700" mb={4}>
              Συμμετοχή & Εθελοντισμός
            </Heading>
            <VStack align="start" gap={2}>
              <Text fontSize="sm" color="green.600">
                🤝 Καλοδεχούμε νέους εθελοντές
              </Text>
              <Text fontSize="sm" color="green.600">
                🎭 Συμμετοχή σε πολιτιστικές δράσεις
              </Text>
              <Text fontSize="sm" color="green.600">
                � Φιλανθρωπικές δραστηριότητες
              </Text>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
