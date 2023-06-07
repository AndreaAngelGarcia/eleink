import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export function GalleryHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ajusta el valor según tus necesidades
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section>
      {/* FOTOS RESUMEN PORTFOLIO */}
      <div className="content active container mx-auto mt-5 p-5 sm:p-8">
        <div ref={ref} className="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          <animated.img src="./src/assets/images/tatuajes/tatuaje5.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje24.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje6_1.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje9.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje38.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje61_2.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje8.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje41.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje37_1.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje15.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje28.jpeg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
          <animated.img src="./src/assets/images/tatuajes/tatuaje12_3.jpg" alt="" onClick={openModal} className="cursor-pointer" style={imageAnimation} />
        </div>
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90%',
            maxHeight: '90%',
            border: 'none',
            borderRadius: '8px',
            overflow: 'auto',
            outline: 'none',
            padding: '20px'
          }
        }}>
        {/* Contenido del modal */}
        <img src="./src/assets/images/tatuajes/tatuaje5.jpeg" alt=""
          style={
            {
              width: '20%',
              height: '100%',
              objectFit: 'cover'
            }
          } />
      </ReactModal>

      {/* BOTÓN A PORTFOLIO */}
      <div className="flex justify-center">
        <Link to="/portfolio">
          <button className="italiana text-xl items-center w-40 h-20 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md">
            VER MÁS
          </button>
        </Link>
      </div>
    </section>
  )
}

