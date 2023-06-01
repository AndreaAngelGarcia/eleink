import React from "react";
import { Link } from 'react-router-dom';

export function AboutHome() {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-10 lg:grid-cols-2">
                <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div class="max-w-xl mb-6">
                        <h2 class="italianno mx-auto max-w-lg mb-6 text-6xl font-medium tracking-tight text-gray-900 sm:text-7xl ">
                            Sobre Mí
                        </h2>
                        <p class="italiana text-xl text-justify text-gray-700 md:text-lg">
                            Soy Elena Conde, tengo 26 años y mi pasión es el tatuaje desde hace muchos años. Actualmente vivo en Madrid
                            pero he tatuado en Sevilla durante muchos años. Soy tatuadora profesional y perforadora.
                            Si tienes cualquier duda no dudes en contactar conmigo en las redes sociales.
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center -mx-4 lg:pl-8">
                    <div class="flex flex-col items-end px-3">
                        <img class="object-cover mb-6 rounded shadow-lg h-32 sm:h-52 xl:h-60 w-32 sm:w-52 xl:w-60"
                            src="../img/elena.jpg" alt="" />
                        <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="../img/elena3.jpg"
                            alt="" />
                    </div>
                    <div class="px-3">
                        <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="../img/elena4.jpg"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}



