export function Login2() {
    return (
        <section>
            {/* Separadores negros*/}
            <img src="./src/assets/images/foto.png" />
            <img src="./src/assets/images/foto4.png" />

            {/* Sección login*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg m-0">
                    <div className="my-4">
                        <img src="./src/assets/images/LOGO.png" alt="JT Devs" width="100" height="100" />
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a ELEINK</h1>
                        <button className="flex items-center gap-2 bg-gray-200 py-2 px-4 rounded-lg">
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"></path>
                                </g>
                            </svg>
                            Iniciar sesión con Google
                        </button>
                    </div>
                    <div className="mt-14 mb-5">
                        <p className="text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
                            Inicia sesión con tu email
                        </p>
                    </div>

                    <div className="w-full">
                        <form>
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="email" name="email" id="email" placeholder="Correo electrónico"
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Correo electrónico
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-center mb-6">
                                
                                <div className="relative w-72 mt-5 ">
                                    <input type="password" name="email" id="email" placeholder="Correo electrónico"
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Contraseña
                                    </label>
                                </div>
                            </div>
                            <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Recordarme</label>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="hover:underline hover:text-gray-900 transition-all"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="w-full max-w-md mx-auto">
                                <button
                                    type="submit"
                                    className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <span className="text-gray-500">
                            ¿No tienes cuenta?{" "}
                            <a href="#" className="text-gray-900 hover:underline transition-all">
                                Regístrate
                            </a>
                        </span>
                    </div>
                </div>

                {/* Foto parte derecha */}
                <div className="hidden lg:flex items-center justify-center">
                    <img src="./src/assets/images/elena.jpg" className="w-7/12 object-cover" />
                </div>
            </div>
        </section>
    )
}
