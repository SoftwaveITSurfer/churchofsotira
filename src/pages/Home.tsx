import { Box, Container, Heading, Text, Button } from "@chakra-ui/react"
import HomeAboutUs from "../components/home/HomeAboutUs"

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

      {/* About Section */}
      <HomeAboutUs />

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