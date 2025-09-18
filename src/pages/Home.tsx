import { Box, Container, Heading, Text, Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      {/* Hero με background */}
      <Box 
        backgroundImage="url('/src/images/churchs/church-bg.jpg')" 
        backgroundSize="cover"  
        backgroundPosition="top"
        backgroundRepeat="no-repeat" 
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
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
          maxW="800px"
        >
          <Heading as="h1" size="2xl" mb={4} fontWeight="bold">
            Εκκλησία Σωτήρας Αμμοχώστου
          </Heading>
          <Text fontSize="xl" mb={8} lineHeight="1.6">
            Καλώς ήρθες στην ιστοσελίδα μας. Εδώ θα βρεις τα νέα μας, τις εκδηλώσεις μας και όλες τις
            πληροφορίες για την κοινότητά μας.
          </Text>
          <Button 
            colorScheme="blue" 
            size="lg" 
            px={8} 
            py={6}
            fontSize="lg"
            _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
          >
            Μάθε περισσότερα
          </Button>
        </Container>
      </Box>

      {/* Άλλο περιεχόμενο μετά */}
      <Box py={20} bg="gray.50">
        <Container maxW="960px">
          <Heading as="h2" size="xl" mb={6} color="blue.600" textAlign="center">
            Νέα & Εκδηλώσεις
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="600px" mx="auto">
            Εδώ μπορείς να προσθέσεις κάρτες με περιεχόμενο, άρθρα ή ανακοινώσεις
            της εκκλησίας.
          </Text>
        </Container>
      </Box>
    </>
  )
}