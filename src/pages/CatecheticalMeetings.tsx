import React from "react";
import { Map } from "../components/Map";

const catecheticalMeetings = [
    {
        group: "Kids",
        time: "Saturday Morning, 10:00 AM - 12:00 PM",
    },
    {
        group: "Adults",
        time: "Saturday Evening, 6:00 PM - 8:00 PM",
    },
];

const galleryImages = [
    // Replace these URLs with your actual images
    { src: "/images/katixitiko/3G0A4094.JPG", alt: "" },
    { src: "/images/katixitiko/3G0A4852.JPG", alt: "" },
    { src: "/images/katixitiko/IMG-9816aa3dc523bde7074fc12830843c3d-V.jpg", alt: "" },
];

const CatecheticalMeetings: React.FC = () => (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        <h1>Catechetical Meetings</h1>
        <section>
            <h2>Program</h2>
            <ul>
                {catecheticalMeetings.map((meeting) => (
                    <li key={meeting.group}>
                        <strong>{meeting.group}:</strong> {meeting.time}
                    </li>
                ))}
            </ul>
        </section>

        <section style={{ margin: "2rem 0" }}>
            <h2>Location</h2>
            <Map
                lat={35.027125}
                lng={33.952617}
                zoom={15}
                height="350px"
                markerText="Κατηχητικές Συναντήσεις"
                city="Σωτήρα Αμμοχώστου"
                country="Κύπρος"
            />
        </section>

        <section>
            <h2>Gallery</h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {galleryImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        style={{
                            width: 200,
                            height: 140,
                            objectFit: "cover",
                            borderRadius: 8,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                    />
                ))}
            </div>
        </section>
    </div>
);

export default CatecheticalMeetings;