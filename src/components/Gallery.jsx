import React from 'react';
import './Gallery.css';
import artWine from '../assets/art-wine.jpg';
import artCat from '../assets/art-cat.jpg';
import artWater from '../assets/art-water.jpg';
import artButterfly from '../assets/art-butterfly.jpg';
import artCello from '../assets/art-cello.jpg';

const artworks = [
    {
        id: 1,
        title: "Vintage Pour",
        description: "The elegance of red wine in motion.",
        image: artWine,
    },
    {
        id: 2,
        title: "Piano Nap",
        description: "Soft melodies and softer dreams.",
        image: artCat,
    },
    {
        id: 3,
        title: "Fluid Thoughts",
        description: "Submerged in the flow of creativity.",
        image: artWater,
    },
    {
        id: 4,
        title: "Butterfly Touch",
        description: "A delicate moment of connection.",
        image: artButterfly,
    },
    {
        id: 5,
        title: "Melody in Color",
        description: "Music painted on the canvas of life.",
        image: artCello,
                            < div className = "art-back" >
                                <h3>{art.title}</h3>
                                <p>{art.description}</p>
                            </div >
                        </div >
                    </div >
                ))}
            </div >
        </section >
    );
};

export default Gallery;
