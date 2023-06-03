export function GalleryHome() {
    return (
        <section>
        <img src="../img/foto.png"/>
        <img src="../img/foto4.png"/>
        <div className="">
          <h2 className="italianno flex justify-center text-7xl font-medium text-gray-900 ">
            Portfolio
          </h2>
          <div id="content-eleink" className="content active container mx-auto mt-5 p-5 sm:p-8">
            <div className="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
              <img src="./src/assets/images/tatuajes/tatuaje5.jpeg" alt="" />
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
          <div className="flex justify-center">
            <a href="portfolio.html"><button
                className=" italiana text-xl items-center w-40 h-20 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md">
                VER MÁS
              </button></a>
          </div>
        </div>
      </section>
    )
} 
  
  