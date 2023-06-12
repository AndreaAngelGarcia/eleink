//import { Link } from 'react-router-dom';
import { Tittle } from "../tittle/tittle";

export function AboutHome() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <Tittle title="Sobre Mí" />
                        <p className="italiana text-xl text-justify text-gray-700 md:text-lg">
                            Soy Elena Conde, tengo 26 años y mi pasión es el tatuaje desde hace muchos años. Actualmente vivo en Madrid
                            pero he tatuado en Sevilla durante muchos años. Soy tatuadora profesional y perforadora.
                            Si tienes cualquier duda no dudes en contactar conmigo en las redes sociales.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img className="object-cover mb-6 rounded shadow-lg h-32 sm:h-52 xl:h-60 w-32 sm:w-52 xl:w-60"
                            src="./assets/images/elena.jpg" alt="" />
                        <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="./assets/images/elena3.jpg"
                            alt="" />
                    </div>
                    <div className="px-3">
                        <img className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="./assets/images/elena4.jpg"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}



