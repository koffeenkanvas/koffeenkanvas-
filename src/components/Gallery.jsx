import React from 'react';
import './Gallery.css';
import coffeeLogo from '../assets/coffee-logo.png';

const artworks = [
    {
        id: 1,
        title: "Morning Brew",
        description: "A warm cup to start the day. Watercolor on paper.",
        image: coffeeLogo, // Using the logo as one piece
    },
    {
        id: 2,
        title: "Abstract Dreams",
        description: "Colors of the mind. Oil on canvas.",
        image: "https://picsum.photos/id/1015/400/600",
    },
    {
        id: 3,
        title: "Urban Sketch",
        description: "City life in charcoal.",
        image: "https://picsum.photos/id/103/400/400",
    },
    {
        id: 4,
        title: "Nature's Whisper",
        description: "Forest scene in acrylics.",
        image: "https://picsum.photos/id/104/400/500",
    },
    {
        id: 5,
        title: "Cafe Corner",
        description: "The favorite spot. Digital illustration.",
        image: "https://picsum.photos/id/1060/400/400",
    },
    {
        id: 6,
        title: "Midnight Oil",
        description: "Working late. Mixed media.",
        image: "https://picsum.photos/id/1081/400/600",
    },
];

const Gallery = () => {
    return (
        <section className="gallery-section" id="gallery">
            <h2 className="section-title">My Collection</h2>
            <div className="gallery-wall">
                {artworks.map((art) => (
                    <div key={art.id} className="art-frame">
                        <div className="art-content">
                            <div className="art-front">
                                <img src={art.image} alt={art.title} />
                            </div>
                            <div className="art-back">
                                <h3>{art.title}</h3>
                                <p>{art.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
