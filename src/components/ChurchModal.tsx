import React, { useState } from "react";
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
    CloseButton,
    SimpleGrid,
    Skeleton
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaHistory, FaStar, FaChurch, FaTimes } from "react-icons/fa";
import { FiActivity, FiCalendar, FiMap } from "react-icons/fi";

interface Church {
    id: string;
    name: string;
    nameEn: string;
    description: string;
    period: string;
    status: string;
    type: string;
    celebration: string;
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
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Reset image state when church changes
    React.useEffect(() => {
        if (church) {
            setImageLoaded(false);
            setImageError(false);
        }
    }, [church?.id]);

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
                bg="gray.50"
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
                    <Flex justify="space-between" align="flex-start" gap={2}>
                        <Box>
                            <Heading as="h2" size="lg" color="blue.600" lineHeight="1.2">
                                {church.name}
                            </Heading>
                            <Text fontSize="md" color="gray.500" fontStyle="italic" mt={1}>
                                {church.nameEn}
                            </Text>
                        </Box>
                        <CloseButton onClick={onClose} />
                    </Flex>

                </Box>

                {/* Body */}
                <Box p={6}>
                    <Stack gap={6}>
                        {/* Church Image */}
                        <Box position="relative">
                            {!imageLoaded && !imageError && (
                                <Skeleton
                                    w="full"
                                    h={["200px", null, "500px"]}
                                    borderRadius="lg"
                                />
                            )}
                            <Image
                                src={church.image}
                                alt={church.name}
                                w="full"
                                h={["200px", null, "500px"]} // mobile first
                                objectFit="cover"
                                borderRadius="lg"
                                loading="lazy"
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                opacity={imageLoaded ? 1 : 0}
                                transition="opacity 0.3s ease"
                            />
                            {imageError && (
                                <Box
                                    w="full"
                                    h={["200px", null, "500px"]}
                                    bg="gray.100"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    color="gray.500"
                                    borderRadius="lg"
                                >
                                    <Icon as={FaChurch} boxSize={12} />
                                </Box>
                            )}
                        </Box>

                        {/* Basic Info Grid */}
                        <Box>
                            <Heading as="h3" size="md" mb={4} color="blue.600">
                                Πληροφορίες
                            </Heading>

                            {/* Info (περίοδος & τοποθεσία) */}
                            <Box fontSize="md" color="gray.500" mb={3}>
                                <SimpleGrid columns={2} gap={2}>
                                    <Flex align="center">
                                        <Icon as={FaChurch} mr={1} />
                                        <Text lineClamp={1}>{church.type}</Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Icon as={FaHistory} mr={1} />
                                        <Text lineClamp={1}>{church.period}</Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Icon as={FiCalendar} mr={1} />
                                        <Text lineClamp={1}>{church.celebration}</Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Icon as={FiActivity} mr={1} />
                                        <Text lineClamp={1}>{church.status}</Text>
                                    </Flex>
                                </SimpleGrid>
                                <Box display="flex" mt={2} alignItems="center">
                                    <Icon as={FiMap} mr={1} />
                                    <Text lineClamp={1}>{church.location.address}</Text>
                                </Box>
                            </Box>

                        </Box>

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
                            bg="blue.600"
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