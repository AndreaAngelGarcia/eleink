import { useState} from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useSpring, animated } from 'react-spring';

export function GalleryHome() {
    return (
    <section>
      {/* FOTOS RESUMEN PORTFOLIO */}
      <div className="content active container mx-auto mt-5 p-5 sm:p-8">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          <animated.img src="./assets/images/tatuajes/tatuaje5.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje24.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje6_1.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje9.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje38.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje61_2.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje8.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje41.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje37_1.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje15.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje28.jpeg" alt="" />
          <animated.img src="./assets/images/tatuajes/tatuaje12_3.jpg" alt="" />
        </div>
      </div>

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

