import React, { useState, useEffect } from 'react';

export function GalleryPortfolio({ activeContent }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.getElementById(activeContent);
      if (contentElement) {
        const rect = contentElement.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeContent]);

  const galleryStyle = {
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  return (
    <div>
      {/* GALERIA ELEINK */}
      <div
        id="content-eleink"
        className={`content container mx-auto mt-5 p-5 sm:p-8 ${activeContent === 'content-eleink' ? 'fadeIn' : ''}`}
        data-aos="fade-up"
        style={activeContent === 'content-eleink' ? galleryStyle : {}}
      >
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    <img src="./src/assets/images/tatuajes/tatuaje8.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje18.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje17.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje7.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje5.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje2.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje60.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje10.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje42.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje59.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje3.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje12.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje13.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje14.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje61.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje16.jpeg" data-aos="fade-up" alt="" />
                </div>
      </div>

      {/* GALERIA ELETINYTATS */}
      <div
        id="content-eletinytats"
        className={`content container mx-auto mt-8 p-5 sm:p-8 ${activeContent === 'content-eletinytats' ? 'fadeIn' : ''}`}
        data-aos="fade-up"
        style={activeContent === 'content-eletinytats' ? galleryStyle : {}}
      >
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    <img src="./src/assets/images/tatuajes/tatuaje22.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje25.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje24.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje26.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje29.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje27.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje33.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje34.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje28.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje35.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje31.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje36.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje37.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje38.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje39.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje40.jpeg" data-aos="fade-up" alt="" />
                </div>
      </div>

      {/* GALERIA PIERCING */}
      <div
        id="content-piercing"
        className={`content container mx-auto mt-8 p-5 sm:p-8 ${activeContent === 'content-piercing' ? 'fadeIn' : ''}`}
        data-aos="fade-up"
        style={activeContent === 'content-piercing' ? galleryStyle : {}}
      >
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    <img src="./src/assets/images/tatuajes/tatuaje43.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje44.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje45.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje46.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje47.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje46.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje58.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje50.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje51.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje52.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje53.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje54.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje55.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje56.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje57.jpeg" data-aos="fade-up" alt="" />
                    <img src="./src/assets/images/tatuajes/tatuaje49_4.jpeg" data-aos="fade-up" alt="" />
                </div>
      </div>
    </div>
  );
}

