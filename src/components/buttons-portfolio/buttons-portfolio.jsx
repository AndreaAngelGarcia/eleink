import { useState } from 'react';
import { GalleryPortfolio } from '../gallery-portfolio/gallery-portfolio';

export function ButtonsPortfolio() {
    const [activeContent, setActiveContent] = useState('');

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };

    return (
        <div>
            <div className="flex justify-center mt-2 space-x-6 md:pace-x-8 lg:space-x-20 lg:mt-4">
                <button id="button1" className="w-40 h-40 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
                    onClick={() => handleClick('content-eleink')}>
                    <img src="./assets/images/LOGO.PNG" className="w-28 mx-auto hover:w-32" alt="Eleink Button" />
                </button>

                <button id="button2" className="w-40 h-40 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
                    onClick={() => handleClick('content-eletinytats')}>
                    <img src="./assets/images/LOGO2.png" className="w-28 mx-auto hover:w-32" alt="Eletinytats Button" />
                </button>

                <button id="button3" className="w-40 h-40 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
                    onClick={() => handleClick('content-piercing')}>
                    <img src="./assets/images/piercing.jpg" className="w-32 mx-auto hover:w-36" alt="Piercing Button" />
                </button>
            </div>

            <div className="flex justify-center mt-4">
                <GalleryPortfolio activeContent={activeContent} />
            </div>
        </div>
    )
}
