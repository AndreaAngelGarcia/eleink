import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

export function GalleryHome() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section>
      {/* SEPARADORES NEGROS */}
      <img src="./src/assets/images/foto.png" alt="Separador" />
      <img src="./src/assets/images/foto4.png" alt="Separador" />

      <div>
        {/* TITULO */}
        <h2 className="italianno flex justify-center text-7xl font-medium text-gray-900">
          Portfolio
        </h2>

        {/* FOTOS RESUMEN PORTFOLIO */}
        <div className="content active container mx-auto mt-5 p-5 sm:p-8">
          <div className="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img
              src="./src/assets/images/tatuajes/tatuaje5.jpeg"
              alt=""
              onClick={openModal}
              className="cursor-pointer"
            />
            <img src="./src/assets/images/tatuajes/tatuaje24.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje6_1.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje9.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje38.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje61_2.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje8.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje41.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje37_1.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje15.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje28.jpeg" alt="" />
            <img src="./src/assets/images/tatuajes/tatuaje12_3.jpg" alt="" />
          </div>
        </div>

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
          }}
        >
          {/* Contenido del modal */}
          <img
            src="./src/assets/images/tatuajes/tatuaje5.jpeg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ReactModal>

        {/* BOTÓN A PORTFOLIO */}
        <div className="flex justify-center">
          <Link to="/portfolio">
            <button className="italiana text-xl items-center w-40 h-20 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md">
              VER MÁS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
