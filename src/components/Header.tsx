import {
  Box,
  Flex,
  Heading,
  Container,
  Button,
  VStack
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? '#2B6CB0' : '#4A5568',
        textDecoration: 'none',
        padding: '8px 12px',
        borderRadius: '6px',
        display: 'block',
        transition: 'all 0.2s'
      })}
    >
      {label}
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
          >
            <Box>
              <Box w="20px" h="2px" bg="gray.600" mb="4px" />
              <Box w="20px" h="2px" bg="gray.600" mb="4px" />
              <Box w="20px" h="2px" bg="gray.600" />
            </Box>
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ base: "block", md: "none" }}>
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
        )}
      </Container>
    </Box>
  )
}