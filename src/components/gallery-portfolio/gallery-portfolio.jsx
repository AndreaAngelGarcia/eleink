import  { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export function GalleryPortfolio() {
  const [activeContent, setActiveContent] = useState('content-eleink');

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  const transitions = useTransition(activeContent, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div>
      {/* BOTONES */}
      <div className="flex justify-center mt-6 p-6 space-x-4 md:space-x-8 lg:space-x-20 lg:mt-4">
        <button
          id="button1"
          className="w-40 h-32 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
          onClick={() => showContent('content-eleink')}
        >
          <img
            src="./assets/images/LOGO.PNG"
            className="w-18 hover:w-20 lg:w-28 mx-auto lg:hover:w-32"
            alt=""
          />
        </button>

        <button
          id="button2"
          className="w-40 h-40 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
          onClick={() => showContent('content-eletinytats')}
        >
          <img
            src="./assets/images/LOGO2.png"
            className="w-24 hover:w-28 lg:w-28 mx-auto lg:hover:w-32"
            alt=""
          />
        </button>

        <button
          id="button3"
          className="w-40 h-40 shadow-xl rounded-xl border border-purple-700 inline-flex items-center"
          onClick={() => showContent('content-piercing')}
        >
          <img
            src="./assets/images/piercing.jpg"
            className="w-24 hover:w-28 lg:w-28 mx-auto lg:hover:w-32"
            alt=""
          />
        </button>
      </div>

      {/* GALERIA */}
      {transitions((styles, item) => (
        <animated.div
          className={`content container mx-auto mt-5 p-5 sm:p-8 ${
            activeContent === item ? 'active' : ''
          }`}
          style={styles}
        >
          {activeContent === 'content-eleink' && (
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="./assets/images/tatuajes/tatuaje8.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje18.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje17.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje7.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje5.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje2.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje60.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje10.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje42.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje59.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje3.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje12.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje13.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje14.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje61.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje16.jpeg" data-aos="fade-up" alt="" />
        </div>
          )}

          {activeContent === 'content-eletinytats' && (
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="./assets/images/tatuajes/tatuaje22.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje25.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje24.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje26.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje29.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje27.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje33.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje34.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje28.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje35.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje31.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje36.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje37.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje38.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje39.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje40.jpeg" data-aos="fade-up" alt="" />
        </div>
          )}

          {activeContent === 'content-piercing' && (
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="./assets/images/tatuajes/tatuaje43.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje44.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje45.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje46.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje47.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje46.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje58.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje50.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje51.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje52.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje53.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje54.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje55.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje56.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje57.jpeg" data-aos="fade-up" alt="" />
            <img src="./assets/images/tatuajes/tatuaje49_4.jpeg" data-aos="fade-up" alt="" />
        </div>
          )}
        </animated.div>
      ))}
    </div>
  );
}
