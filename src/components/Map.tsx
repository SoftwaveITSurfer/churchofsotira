import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'

/**
 * Generic Map Component using OpenStreetMap and Leaflet
 * 
 * Usage Examples:
 * 
 * // Basic usage (church default location)
 * <Map />
 * 
 * // Custom location with all details
 * <Map 
 *   lat={35.1675}
 *   lng={33.3823}
 *   zoom={12}
 *   height="400px"
 *   markerText="Λευκωσία"
 *   address="Κεντρική Πλατεία"
 *   city="Λευκωσία"
 *   country="Κύπρος"
 * />
 * 
 * // Simple marker without popup
 * <Map 
 *   lat={34.7767}
 *   lng={32.4239}
 *   showPopup={false}
 *   markerText="Λάρνακα"
 * />
 * 
 * // Interactive map with scroll zoom
 * <Map 
 *   scrollWheelZoom={true}
 *   zoom={10}
 *   height="500px"
 * />
 */

interface MapProps {
    height?: string
    lat?: number
    lng?: number
    zoom?: number
    markerText?: string
    address?: string
    city?: string
    country?: string
    showPopup?: boolean
    scrollWheelZoom?: boolean
    showZoomControl?: boolean
}

export const Map: React.FC<MapProps> = ({
    height = "300px",
    lat,
    lng,
    zoom,
    markerText = "",
    address = "",
    city = "",
    country = "",
    showPopup = true,
    scrollWheelZoom = false,
    showZoomControl = true
}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [MapComponents, setMapComponents] = useState<any>(null)

    useEffect(() => {
        const loadMap = async () => {
            try {
                // Dynamically import react-leaflet and leaflet
                const [
                    { MapContainer, TileLayer, Marker, Popup },
                    L
                ] = await Promise.all([
                    import('react-leaflet'),
                    import('leaflet')
                ])

                // Import CSS (handled in main.tsx instead)
                // import('leaflet/dist/leaflet.css')

                // Fix for default markers in React Leaflet
                delete (L.Icon.Default.prototype as any)._getIconUrl
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                })

                setMapComponents({ MapContainer, TileLayer, Marker, Popup })
                setIsLoaded(true)
            } catch (error) {
                console.error('Error loading map:', error)
            }
        }

        loadMap()
    }, [])

    if (!isLoaded || !MapComponents) {
        return (
            <Box
                height={height}
                borderRadius="md"
                overflow="hidden"
                w="full"
                minH={{ base: "250px", md: height }}
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text color="gray.500">Φόρτωση χάρτη...</Text>
            </Box>
        )
    }

    const { MapContainer, TileLayer, Marker, Popup } = MapComponents

    return (
        <Box
            height={height}
            borderRadius="md"
            overflow="hidden"
            w="full"
            minH={{ base: "250px", md: height }}
        >
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={scrollWheelZoom}
                zoomControl={showZoomControl}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    {showPopup && (
                        <Popup maxWidth={200} minWidth={150}>
                            <div style={{ padding: '8px' }}>
                                <strong style={{ fontSize: '14px' }}>
                                    {markerText}
                                </strong>
                                {(address || city || country) && (
                                    <>
                                        <br />
                                        <span style={{ fontSize: '12px' }}>
                                            {address && `${address}`}
                                            {address && (city || country) && <br />}
                                            {city && `${city}`}
                                            {city && country && ', '}
                                            {country}
                                        </span>
                                    </>
                                )}
                            </div>
                        </Popup>
                    )}
                </Marker>
            </MapContainer>
        </Box>
    )
}

export default Map