import React from "react";
import { Link } from 'react-router-dom';

export function BannerHome() {
    return (
        <section id="banner" class="relative bg-banner h-full bg-cover bg-center bg-no-repeat animate-fadeIn aos-animate"
            data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen">

                <div class="flex justify-end lg:mt-36">
                    <p class="italianno m-0 text-3xl tracking-wider lg:ml-24 font-bold lg:text-7xl max-w-lg sm:text-6xl">
                        ELENA CONDE
                    </p>

                </div>

                <div class="flex justify-end">
                    <p class="italianno m-0 text-4xl text-purple-900 font-medium lg:text-6xl max-w-lg sm:text-6xl">
                        Tatto artist
                    </p>

                </div>

                <div class="flex justify-end">
                    <p class="italianno m-0 text-4xl  text-purple-900 font-medium lg:text-6xl max-w-lg sm:text-6xl">
                        & piercer
                    </p>
                </div>

            </div>
        </section>
    )
}