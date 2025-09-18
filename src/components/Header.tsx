import { 
  Box, 
  Flex, 
  Heading, 
  Spacer,
  Container
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Box bg="white" shadow="md" position="sticky" top="0" zIndex="10">
      <Container>
        <Flex align="center" py={4}>
          <Heading as="h1" size="lg" fontWeight="bold" color="#2B6CB0">
            Εκκλησία Σωτήρας Αμμοχώστου
          </Heading>
          <Spacer />
          <Box display="flex" gap={6}>
            <NavLink 
              to="/" 
              end
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#2B6CB0' : '#4A5568',
                textDecoration: 'none'
              })}
            >
              Κεντρική
            </NavLink>
            <NavLink 
              to="/schedule"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#2B6CB0' : '#4A5568',
                textDecoration: 'none'
              })}
            >
              Πρόγραμμα
            </NavLink>
               <NavLink 
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#2B6CB0' : '#4A5568',
                textDecoration: 'none'
              })}
            >
              Κατηχητικές Συνάξεις
            </NavLink>
            
            <NavLink 
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#2B6CB0' : '#4A5568',
                textDecoration: 'none'
              })}
            >
              Ναοί
            </NavLink>
            <NavLink 
              to="/contact"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#2B6CB0' : '#4A5568',
                textDecoration: 'none'
              })}
            >
              Επικοινωνία
            </NavLink>

          </Box>
        </Flex>
      </Container>
    </Box>
  )
}