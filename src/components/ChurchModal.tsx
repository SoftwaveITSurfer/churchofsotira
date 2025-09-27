import React from "react";
import {
    Box,
    Image,
    Text,
    Badge,
    Button,
    Heading,
    Icon,
    Flex,
    Stack,
    Grid,
    GridItem,
    CloseButton
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaHistory, FaStar, FaCalendarAlt, FaTimes } from "react-icons/fa";

interface Church {
    id: string;
    name: string;
    nameEn: string;
    description: string;
    period: string;
    status: string;
    image: string;
    location: {
        map: string;
        address: string;
    };
    features: string[];
}

interface ChurchModalProps {
    church: Church | null;
    isOpen: boolean;
    onClose: () => void;
}

const ChurchModal: React.FC<ChurchModalProps> = ({ church, isOpen, onClose }) => {
    if (!church || !isOpen) return null;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Ενεργός': return 'green';
            case 'Μουσείο': return 'blue';
            case 'Ιστορικό μνημείο': return 'purple';
            case 'Ερείπια': return 'orange';
            default: return 'gray';
        }
    };

    const handleDirections = () => {
        const url = church.location.map;
        window.open(url, '_blank');
    };

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bg="blackAlpha.600"
            backdropFilter="blur(10px)"
            zIndex="1000"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={onClose}
        >
            <Box
                bg="white"
                borderRadius="xl"
                maxW="900px"
                w="90%"
                maxH="90vh"
                overflow="auto"
                onClick={(e) => e.stopPropagation()}
                shadow="2xl"
                mx={4}
            >
                {/* Header */}
                <Box p={6} pb={0}>
                    <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
                        <Box>
                            <Heading as="h2" size="lg" color="blue.600" lineHeight="1.2">
                                {church.name}
                            </Heading>
                            <Text fontSize="md" color="gray.500" fontStyle="italic" mt={1}>
                                {church.nameEn}
                            </Text>
                        </Box>
                        <Flex align="center" gap={3}>
                            <Badge
                                colorScheme={getStatusColor(church.status)}
                                variant="subtle"
                                fontSize="sm"
                                px={3}
                                py={1}
                            >
                                {church.status}
                            </Badge>
                            <CloseButton onClick={onClose} />
                        </Flex>
                    </Flex>
                </Box>

                {/* Body */}
                <Box p={6}>
                    <Stack gap={6}>
                        {/* Church Image */}
                        <Box>
                            <Image
                                src={church.image}
                                alt={church.name}
                                w="full"
                                h="300px"
                                objectFit="cover"
                                borderRadius="lg"
                                shadow="md"
                            />
                        </Box>

                        {/* Basic Info Grid */}
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                            <GridItem>
                                <Box bg="gray.50" p={4} borderRadius="lg">
                                    <Flex align="center" mb={2}>
                                        <Icon color="blue.500" mr={2}>
                                            <FaCalendarAlt />
                                        </Icon>
                                        <Text fontWeight="semibold" fontSize="sm" color="gray.700">
                                            Περίοδος
                                        </Text>
                                    </Flex>
                                    <Text fontSize="lg" fontWeight="medium">
                                        {church.period}
                                    </Text>
                                </Box>
                            </GridItem>

                            <GridItem>
                                <Box bg="gray.50" p={4} borderRadius="lg">
                                    <Flex align="center" mb={2}>
                                        <Icon color="red.500" mr={2}>
                                            <FaMapMarkerAlt />
                                        </Icon>
                                        <Text fontWeight="semibold" fontSize="sm" color="gray.700">
                                            Τοποθεσία
                                        </Text>
                                    </Flex>
                                    <Text fontSize="lg" fontWeight="medium">
                                        {church.location.address}
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>

                        {/* Divider */}
                        <Box h="1px" bg="gray.200" />

                        {/* Description */}
                        <Box>
                            <Heading as="h3" size="md" mb={3} color="blue.600">
                                Περιγραφή
                            </Heading>
                            <Text fontSize="md" lineHeight="1.7" color="gray.700">
                                {church.description}
                            </Text>
                        </Box>

                        {/* Divider */}
                        <Box h="1px" bg="gray.200" />

                        {/* Features */}
                        <Box>
                            <Heading as="h3" size="md" mb={4} color="blue.600">
                                Χαρακτηριστικά
                            </Heading>
                            <Flex wrap="wrap" gap={2}>
                                {church.features.map((feature, index) => (
                                    <Badge
                                        key={index}
                                        colorScheme="blue"
                                        variant="subtle"
                                        fontSize="sm"
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <Icon mr={1} fontSize="xs">
                                            <FaStar />
                                        </Icon>
                                        {feature}
                                    </Badge>
                                ))}
                            </Flex>
                        </Box>
                    </Stack>
                </Box>

                {/* Footer */}
                <Box p={6} pt={0}>
                    <Flex gap={3} w="full" justify="flex-end">
                        <Button variant="ghost" onClick={onClose}>
                            Κλείσιμο
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleDirections}
                        >
                            <Icon mr={2}>
                                <FaMapMarkerAlt />
                            </Icon>
                            Οδηγίες
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default ChurchModal;