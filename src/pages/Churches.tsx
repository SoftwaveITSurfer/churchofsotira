import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Badge,
    Button,
    Icon,
    Skeleton,
    SkeletonText,
    Flex
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaHistory, FaStar, FaChurch, FaStamp, FaOpenid, FaMapMarker, FaMapMarked, FaMapMarkedAlt, FaMapSigns } from "react-icons/fa";
import ChurchModal from "../components/ChurchModal";
import { FiActivity, FiCalendar, FiMap, FiType } from "react-icons/fi";
import { BsMapFill } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";

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

const Churches: React.FC = () => {
    const navigate = useNavigate();
    const [churches, setChurches] = useState<Church[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bgColor = "white";
    const borderColor = "gray.200";

    useEffect(() => {
        const loadChurches = async () => {
            try {
                const response = await fetch('/data/churches.json');
                const data = await response.json();
                setChurches(data.churches);
            } catch (error) {
                console.error('Error loading churches:', error);
            } finally {
                setLoading(false);
            }
        };

        loadChurches();
    }, []);

    const handleChurchClick = (church: Church) => {
        setSelectedChurch(church);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedChurch(null);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Ενεργός': return 'green';
            case 'Μουσείο': return 'blue';
            case 'Ιστορικό μνημείο': return 'purple';
            case 'Ερείπια': return 'orange';
            default: return 'gray';
        }
    };

    if (loading) {
        return (
            <Box py={{ base: 8, md: 16 }}>
                <Container maxW="6xl">
                    <Box mb={12} textAlign="center">
                        <Skeleton height="40px" width="300px" mx="auto" mb={4} />
                        <SkeletonText mt="4" noOfLines={2} width="500px" mx="auto" />
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                        {[...Array(6)].map((_, i) => (
                            <Box key={i} bg={bgColor} borderRadius="xl" overflow="hidden" shadow="lg">
                                <Skeleton height="250px" />
                                <Box p={6}>
                                    <Skeleton height="20px" mb={2} />
                                    <SkeletonText mt="4" noOfLines={3} />
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        );
    }

    return (
        <Box py={12} bg="gray.50" minH="80vh">
            <Container>
                {/* Header Section */}
                <Box textAlign="center" mb={12}>
                    <Icon as={FaChurch} color="blue.600" boxSize={12} mb={1} />
                    <Heading as="h1" size="2xl" color="blue.600" mb={4}>
                        Ναοί Σωτήρας Αμμοχώστου
                    </Heading>
                    <Text fontSize="lg" color="gray.600" maxW="680px" mx="auto">
                        Ανακαλύψτε τους ιστορικούς ναούς και τα εκκλησιαστικά μνημεία της Σωτήρας,<br />
                        κάθε ένας με τη δική του μοναδική ιστορία και πνευματική κληρονομιά.
                    </Text>
                </Box>

                {/* Churches Grid */}
                <Box py={{ base: 8, md: 12 }}>
                    <Container maxW="6xl">
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            {churches.map((church) => (
                                <Flex
                                    key={church.id}
                                    direction="column"
                                    bg={bgColor}
                                    borderRadius="xl"
                                    overflow="hidden"
                                    shadow="lg"
                                    border="1px"
                                    borderColor={borderColor}
                                    cursor="pointer"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        transform: "translateY(-8px)",
                                        shadow: "2xl"
                                    }}
                                    onClick={() => handleChurchClick(church)}
                                >
                                    <Image
                                        src={church.image}
                                        alt={church.name}
                                        w="full"
                                        h="220px"
                                        objectFit="cover"
                                    />

                                    {/* Κύριο περιεχόμενο */}
                                    <Flex direction="column" flex="1" p={6}>
                                        {/* Τίτλος + Τύπος */}
                                        <Box mb={3}>
                                            <Heading
                                                as="h4"
                                                size="md"
                                                color="blue.600"
                                                lineHeight="1.3"
                                                mb={1}
                                            >
                                                {church.name}
                                            </Heading>
                                            <Text
                                                fontSize="sm"
                                                color="gray.500"
                                                fontStyle="italic"
                                            >
                                                {church.nameEn}
                                            </Text>
                                        </Box>

                                        {/* Info (περίοδος & τοποθεσία) */}
                                        <Box fontSize="xs" color="gray.500" mb={3}>
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


                                    </Flex>
                                    {/* Footer */}
                                    <Box p={6} pt={0}>
                                        <Flex gap={2} w="full" justify="flex-end">
                                            <Button size="xs"
                                                bg="blue.600"
                                                colorScheme="blue"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(
                                                        church.location.map,
                                                        "_blank"
                                                    );
                                                }}
                                            >
                                                <Icon as={FaMapMarkerAlt} mr={1} />
                                                Οδηγίες
                                            </Button>
                                        </Flex>
                                    </Box>
                                </Flex>

                            ))}
                        </SimpleGrid>

                        {/* Call to Action */}
                        <Box textAlign="center" mt={16} p={8} bg="gray.50" borderRadius="xl">
                            <Icon as={FaChurch} color="blue.600" boxSize={12} mb={1} />
                            <Heading as="h3" size="lg" mb={4} color="blue.600">
                                Επισκεφτείτε τους ναούς μας
                            </Heading>
                            <Text fontSize="lg" color="gray.600" mb={6} maxW="2xl" mx="auto">
                                Κάθε εκκλησία έχει τη δική της μοναδική ιστορία και πνευματική σημασία.<br />
                                Ελάτε να τους γνωρίσετε από κοντά και να βιώσετε την πλούσια κληρονομιά μας.
                            </Text>
                        </Box>
                    </Container>
                </Box>

                {/* Church Modal */}
                <ChurchModal
                    church={selectedChurch}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </Container>
        </Box>
    );
};

export default Churches;