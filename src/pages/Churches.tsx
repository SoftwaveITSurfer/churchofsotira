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
    SkeletonText
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaHistory, FaStar } from "react-icons/fa";

interface Church {
    id: string;
    name: string;
    nameEn: string;
    description: string;
    period: string;
    status: string;
    image: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    features: string[];
}

const Churches: React.FC = () => {
    const navigate = useNavigate();
    const [churches, setChurches] = useState<Church[]>([]);
    const [loading, setLoading] = useState(true);
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

    const handleChurchClick = (id: string) => {
        navigate(`/churches/${id}`);
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
        <>
            {/* Hero Section */}
            <Box
                bg="gradient-to-r"
                bgGradient="linear(to-r, blue.600, blue.800)"
                py={{ base: 16, md: 24 }}
                color="white"
            >
                <Container maxW="4xl" textAlign="center">
                    <Heading
                        as="h1"
                        size={{ base: "xl", md: "2xl" }}
                        mb={4}
                        fontWeight="bold"
                    >
                        Ναοί Σωτήρας Αμμοχώστου
                    </Heading>
                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        lineHeight="1.6"
                        maxW="2xl"
                        mx="auto"
                    >
                        Ανακαλύψτε τους ιστορικούς ναούς και τα εκκλησιαστικά μνημεία της Σωτήρας,
                        κάθε ένας με τη δική του μοναδική ιστορία και πνευματική κληρονομιά
                    </Text>
                </Container>
            </Box>

            {/* Churches Grid */}
            <Box py={{ base: 12, md: 16 }}>
                <Container maxW="6xl">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                        {churches.map((church) => (
                            <Box
                                key={church.id}
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
                                onClick={() => handleChurchClick(church.id)}
                            >
                                <Image
                                    src={church.image}
                                    alt={church.name}
                                    w="full"
                                    h="250px"
                                    objectFit="cover"
                                />

                                <Box p={6}>
                                    <Box>
                                        <Box w="full">
                                            <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                                                <Heading
                                                    as="h3"
                                                    size="md"
                                                    color="blue.600"
                                                    lineHeight="1.2"
                                                >
                                                    {church.name}
                                                </Heading>
                                                <Badge
                                                    colorScheme={getStatusColor(church.status)}
                                                    variant="subtle"
                                                    fontSize="xs"
                                                >
                                                    {church.status}
                                                </Badge>
                                            </Box>

                                            <Text
                                                fontSize="sm"
                                                color="gray.500"
                                                mb={3}
                                                fontStyle="italic"
                                            >
                                                {church.nameEn}
                                            </Text>
                                        </Box>

                                        <Box mt={4}>
                                            <Text
                                                fontSize="sm"
                                                color="gray.600"
                                                lineHeight="1.6"
                                                h="4.5rem"
                                                overflow="hidden"
                                            >
                                                {church.description.length > 120
                                                    ? `${church.description.substring(0, 120)}...`
                                                    : church.description}
                                            </Text>
                                        </Box>

                                        <Box mt={4} fontSize="xs" color="gray.500">
                                            <Box display="flex" alignItems="center" mb={2}>
                                                <Icon as={FaHistory} mr={1} />
                                                <Text>{church.period}</Text>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <Icon as={FaMapMarkerAlt} mr={1} />
                                                <Text>{church.location.address}</Text>
                                            </Box>
                                        </Box>

                                        <Box mt={4}>
                                            <Text fontSize="xs" fontWeight="semibold" color="blue.600" mb={2}>
                                                Χαρακτηριστικά:
                                            </Text>
                                            <Box>
                                                {church.features.slice(0, 2).map((feature, index) => (
                                                    <Badge
                                                        key={index}
                                                        size="sm"
                                                        colorScheme="blue"
                                                        variant="outline"
                                                        fontSize="xs"
                                                        mr={2}
                                                        mb={1}
                                                    >
                                                        {feature}
                                                    </Badge>
                                                ))}
                                                {church.features.length > 2 && (
                                                    <Badge
                                                        size="sm"
                                                        colorScheme="gray"
                                                        variant="outline"
                                                        fontSize="xs"
                                                    >
                                                        +{church.features.length - 2}
                                                    </Badge>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>

                    {/* Call to Action */}
                    <Box textAlign="center" mt={16} p={8} bg="gray.50" borderRadius="xl">
                        <Icon as={FaStar} color="yellow.400" boxSize={8} mb={4} />
                        <Heading as="h3" size="lg" mb={4} color="blue.600">
                            Επισκεφτείτε τους ναούς μας
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={6} maxW="2xl" mx="auto">
                            Κάθε εκκλησία έχει τη δική της μοναδική ιστορία και πνευματική σημασία.
                            Ελάτε να τους γνωρίσετε από κοντά και να βιώσετε την πλούσια κληρονομιά μας.
                        </Text>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => navigate('/contact')}
                        >
                            Επικοινωνήστε μαζί μας
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Churches;