import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  VStack,
  HStack,
  Flex,
  Icon,
  Link
} from "@chakra-ui/react"
import { useState } from "react"
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi"
import { Map } from "../components/Map"
import { FaContao, FaMailBulk, FaPersonBooth, FaSeedling } from "react-icons/fa"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα μαζί σας.')
  }

  return (
    <Box py={12} bg="gray.50" minH="80vh">
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          <Icon as={FiMail} color="blue.600" boxSize={12} mb={1} />
          <Heading as="h1" size="2xl" color="blue.600" mb={4}>
            Επικοινωνήστε μαζί μας
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="680px" mx="auto">
            Μη διστάσετε να επικοινωνήσετε μαζί μας για οτιδήποτε χρειάζεστε.
          </Text>
        </Box>

      <Container maxW="6xl" py={16}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10} 
          align="flex-start"
        >
          {/* Contact Details */}
          <VStack align="stretch" flex="1" gap={6}>
            <Heading size="lg" color="blue.600">
              Στοιχεία Επικοινωνίας
            </Heading>

            <HStack gap={4} align="flex-start">
              <Icon as={FiMapPin} boxSize={6} color="blue.500" />
              <Box>
                <Text fontWeight="bold">Διεύθυνση:</Text>
                <Text color="gray.600">
                  Κεντρική Πλατεία Σωτήρας Αμμοχώστου <br /> 5330 Αμμόχωστος, Κύπρος
                </Text>
              </Box>
            </HStack>

            <HStack gap={4} align="flex-start">
              <Icon as={FiMail} boxSize={6} color="blue.500" />
              <Box>
                <Text fontWeight="bold">Email:</Text>
                <Link href="mailto:info@sotiraschurch.com" color="blue.500">
                  info@sotiraschurch.com
                </Link>
              </Box>
            </HStack>
          </VStack>

          {/* Map - Full width κάτω, πριν το footer */}
          <Box flex="1">
              <Map
                googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.728800431289!2d33.95286981466366!3d35.02821135037582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfcf6d2f32fc21%3A0x4bf9877943394329!2zzpnOtc-Bz4zPgiDOnc6xz4zPgiDOnM61z4TOsc68zr_Pgc-Gz47Pg861z4nPgg!5e1!3m2!1sel!2sgr!4v1759002160246!5m2!1sel!2sgr"
                markerText="Εκκλησία Σωτήρας Αμμοχώστου"
              />
          </Box>

          {/* Contact Form */}
          {/* <Box flex="1" bg="white" p={8} borderRadius="lg" shadow="md">
            <Heading size="lg" color="blue.600" mb={6}>
              Στείλτε μας μήνυμα
            </Heading>
            <form onSubmit={handleSubmit}>
              <VStack gap={4}>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ονοματεπώνυμο *"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  required
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Τηλέφωνο"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Το μήνυμά σας *"
                  rows={6}
                  required
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  _hover={{ transform: "translateY(-1px)", shadow: "lg" }}
                >
                  Αποστολή
                </Button>
              </VStack>
            </form>
          </Box> */}
        </Flex>
      </Container>
    </Box>
    
  )
}