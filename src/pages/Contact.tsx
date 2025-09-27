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
  Grid,
  GridItem,
  Link,
  Separator
} from "@chakra-ui/react"
import { useState } from "react"
import { Map } from "../components/Map"

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
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα μαζί σας.')
  }

  return (
    <Box py={12} bg="gray.50" minH="80vh">
      <Container maxW="800px">
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          <Heading as="h1" size="2xl" color="blue.600" mb={4}>
            Επικοινωνία
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            Μη διστάσετε να επικοινωνήσετε μαζί μας για οποιαδήποτε απορία ή βοήθεια χρειάζεστε.
            Είμαστε εδώ για εσάς.
          </Text>
        </Box>

        {/* Contact Information */}
        <VStack gap={6} align="stretch">
          <Box bg="white" p={8} borderRadius="lg" shadow="md" maxW="600px" mx="auto">
            <Heading size="md" color="blue.600" mb={6} textAlign="center">
              Στοιχεία Επικοινωνίας
            </Heading>
            <VStack align="center" gap={4}>
              <Box textAlign="center">
                <Text fontWeight="bold" color="gray.700">Διεύθυνση:</Text>
                <Text color="gray.600">
                  Κεντρική Πλατεία Αμμοχώστου<br />
                  5330 Αμμόχωστος, Κύπρος
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontWeight="bold" color="gray.700">Τηλέφωνο:</Text>
                <Link href="tel:+35723721234" color="blue.500">
                  +357 23 72 1234
                </Link>
              </Box>
              <Box textAlign="center">
                <Text fontWeight="bold" color="gray.700">Email:</Text>
                <Link href="mailto:info@churchofsotira.cy" color="blue.500">
                  info@churchofsotira.cy
                </Link>
              </Box>
            </VStack>
          </Box>

          {/* Map Section */}
          <Box mt={8} bg="white" p={6} borderRadius="lg" shadow="md">
            <Heading size="md" color="blue.600" mb={4} textAlign="center">
              Πώς να μας βρείτε
            </Heading>

            {/* Interactive Map */}
            <Map
              lat={35.028262}
              lng={33.953331}
              zoom={15}
              markerText="Εκκλησία Σωτήρας Αμμοχώστου"
              address="Κεντρική Πλατεία Αμμοχώστου"
              city="Σωτήρα Αμμοχώστου"
              country="Κύπρος"
              height="400px"
            />

            <Text mt={4} textAlign="center" color="gray.600">
              Βρισκόμαστε στην καρδιά της Αμμοχώστου, κοντά στην κεντρική πλατεία.
              Υπάρχει δημόσιος χώρος στάθμευσης.
            </Text>
          </Box>
        </VStack>

        {/* Contact Form */}
        {/* <GridItem>
            <Box bg="white" p={6} borderRadius="lg" shadow="md">
              <Heading size="md" color="blue.600" mb={6}>
                Στείλτε μας μήνυμα
              </Heading>
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <Box w="full">
                    <Text mb={2} color="gray.700" fontWeight="medium">
                      Ονοματεπώνυμο *
                    </Text>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Το όνομά σας"
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                    />
                  </Box>

                  <Box w="full">
                    <Text mb={2} color="gray.700" fontWeight="medium">
                      Email *
                    </Text>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                    />
                  </Box>

                  <Box w="full">
                    <Text mb={2} color="gray.700" fontWeight="medium">
                      Τηλέφωνο
                    </Text>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+357 99 123456"
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                    />
                  </Box>

                  <Box w="full">
                    <Text mb={2} color="gray.700" fontWeight="medium">
                      Μήνυμα *
                    </Text>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                      rows={6}
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                    />
                  </Box>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    mt={4}
                    _hover={{ transform: "translateY(-1px)", shadow: "lg" }}
                  >
                    Αποστολή Μηνύματος
                  </Button>
                </VStack>
              </form>
            </Box>
          </GridItem> */}
      </Container>
    </Box>
  )
}
