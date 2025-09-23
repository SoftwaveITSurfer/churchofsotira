import { 
  Box, 
  Container, 
  Grid, 
  GridItem, 
  Heading, 
  Text, 
  Link,
  Icon,
  VStack} from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa" 
import { GiRotaryPhone } from "react-icons/gi"
import { MdEmail } from 'react-icons/md'
import { FaLocationPin } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <Box bg="blue.600" color="white" py={8} mt="auto">
      <Container>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          <GridItem>
            <VStack align="start">
              <Heading as="h4" size="xl" mb={2}>Εκκλησία Σωτήρας</Heading>
              <Text fontSize="md">
                Η εκκλησία της Σωτήρας Αμμοχώστου σας καλωσορίζει στην ιστοσελίδα της.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start">
              <Heading as="h4" size="xl" mb={2}>Χρήσιμοι Σύνδεσμοι</Heading>
              <Box fontSize="md">
                <Text mb={2}>
                  <Link href="https://churchofcyprus.org.cy" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>
                    Εκκλησία της Κύπρου
                  </Link>
                </Text>
                <Text mb={2}>
                  <Link href="https://churchofcyprus.org.cy" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>Ιερά Μητρόπολις Κωνσταντίας και Αμμοχώστου</Link>
                </Text>
                <Text mb={2}>
                  <Link href="/schedule" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>Εκκλησιαστικό Πρόγραμμα</Link>
                </Text>
                <Text>
                  <Link href="/schedule" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>Πρόγραμμα Εκδηλώσεων</Link>
                </Text>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start">
              <Heading as="h4" size="xl" mb={2}>Επικοινωνία</Heading>
              <Box fontSize="md">
                <Text mb={1}><Icon as={FaLocationPin}/> Σωτήρας Αμμοχώστου 5390, Κύπρος</Text>
                <Text mb={1}><Icon as={GiRotaryPhone}/> +357 24 000 000</Text>
                <Text><Icon as={MdEmail}/> info@sotiraschurch.com</Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
        
        {/* Divider */}
        <Box height="1px" bg="blue.400" mt={6} mb={2}/>

        <Text textAlign="center" fontSize="sm" color="blue.100">
          © {new Date().getFullYear()} Εκκλησία Σωτήρας Αμμοχώστου | Διατηρώντας κάθε δικαίωμα
        </Text>
        
        <Text textAlign="center" fontSize="sm" mt={0.5} color="blue.100">
          Φτιάχτηκε με{" "}<Icon as={FaHeart} color="red.400" mx={1}/>{" "}από τον{" "}
          <Link href="https://zartilas.me" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>Ζάρτηλα</Link>
          {" "}και τον{" "}
          <Link href="https://serafm.me" target="_blank" rel="noopener noreferrer" fontWeight="bold" color="white" _hover={{ color: "blue.200" }}>Σεραφείμ</Link>
        </Text>
      </Container>
    </Box>
  )
}