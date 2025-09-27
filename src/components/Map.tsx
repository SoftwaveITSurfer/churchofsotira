import { Box } from '@chakra-ui/react'

/**
 * Google Maps Embed Component
 * 
 * Usage Examples:
 * 
 * // Basic Google Maps usage
 * <Map 
 *   googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=..."
 *   height="400px"
 *   markerText="Location Name"
 * />
 * 
 * // Custom height and title
 * <Map 
 *   googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=..."
 *   height="450px"
 *   markerText="Κατηχητικές Συνάξεις Σωτήρας"
 * />
 */

interface MapProps {
    height?: string
    markerText?: string
    googleMapsEmbedUrl: string
}

export const Map: React.FC<MapProps> = ({
    height = "300px",
    markerText = "Location",
    googleMapsEmbedUrl
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            borderRadius="md"
            overflow="hidden"
            w="full"
            minH={{ base: "250px", md: height }}
        >
            <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height={height.replace('px', '')}
                style={{ border: 0, borderRadius: '8px', maxWidth: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={markerText}
            />
        </Box>
    )
}

export default Map