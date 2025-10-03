import {
  Box,
  Flex,
  Heading,
  Container,
  Button,
  VStack,
  Icon
} from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    { to: "/", label: "Κεντρική", end: true },
    { to: "/schedule", label: "Πρόγραμμα" },
    { to: "/catechetical", label: "Κατηχητικές Συνάξεις" },
    { to: "/churches", label: "Ναοί" },
    { to: "/contact", label: "Επικοινωνία" }
  ]

  const NavLinkComponent = ({ to, label, end = false, onClick }: { to: string, label: string, end?: boolean, onClick?: () => void }) => (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      {({ isActive }) => (
        <Button
          bg={isActive ? "blue.500" : "transparent"}
          color={isActive ? "white" : "gray.700"}
          px={{ base: 4, md: 6 }}
          py={{ base: 4, md: 5 }}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="600"
          transition="all 0.3s ease"
          size="sm"
          _hover={{
            transform: "translateY(-2px)",
            shadow: "md",
            bg: isActive ? "blue.600" : "gray.200",
          }}
        >
          {label}
        </Button>
      )}
    </NavLink>
  )

  return (
    <Box bg="white" shadow="md" position="sticky" top="0" zIndex="10">
      <Container>
        <Flex align="center" py={4}>
          <Heading
            as="h1"
            size={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color="#2B6CB0"
            flex="1"
            cursor="pointer"
            onClick={() => navigate('/')}
            _hover={{ color: "#1A365D" }}
            transition="color 0.2s"
          >
            <Box display={{ base: "block", lg: "none" }}>
              Εκκλησία Σωτήρας
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              Εκκλησία Σωτήρας Αμμοχώστου
            </Box>
          </Heading>

          {/* Desktop Navigation */}
          <Box display={{ base: "none", md: "flex" }} gap={4}>
            {navLinks.map((link) => (
              <NavLinkComponent
                key={link.label}
                to={link.to}
                label={link.label}
                end={link.end}
              />
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Button
            display={{ base: "block", md: "none" }}
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            size="sm"
            transition="all 0.3s ease"
            _hover={{ bg: "gray.100" }}
          >
            {isOpen ? (
              <Icon as={FaTimes} w={5} h={5} color="gray.600" />
            ) : (
              <Box>
                <Box w="20px" h="2px" bg="gray.600" mb="4px" />
                <Box w="20px" h="2px" bg="gray.600" mb="4px" />
                <Box w="20px" h="2px" bg="gray.600" />
              </Box>
            )}
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        <Box
          maxHeight={isOpen ? "300px" : "0"}
          overflow="hidden"
          transition="max-height 0.3s ease-in-out"
          display={{ base: "block", md: "none" }}
        >
          <Box pb={4} pt={2}>
            <VStack gap={2} align="stretch">
              {navLinks.map((link) => (
                <NavLinkComponent
                  key={link.label}
                  to={link.to}
                  label={link.label}
                  end={link.end}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}