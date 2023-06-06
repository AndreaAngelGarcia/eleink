import { DatePicker} from "antd";

export function Login() {
    return (
        <section className="h-screen">

            <img src="./src/assets/images/foto.png" />
            <img src="./src/assets/images/foto4.png" />

            <div className="h-screen md:flex">
                <div className="relative mx-auto mt-8 md:flex w-1/2 bg-white justify-around items-center lg:mx-4">
                        <button type="submit" className="block bg-white mt-6 mx-auto py-2 rounded-2xl font-bold mb-2"><img
                            src="./src/assets/images/foto1.PNG" className="w-48" /></button>
                </div>

                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 
                                sm:py-12 lg:ml-32">
                    <div className="relative border mx-auto w-full max-w-md bg-white px-8 pt-10 pb-8 shadow-xl 
                        sm:rounded-xl sm:px-10">

                        <div className="w-full">
                            <form >
                                <div className="relative mt-5">
                                    <input type="name" name="nombre" id="email" placeholder="Nombre y apellidos"
                                        className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Nombre
                                        y apellidos</label>
                                </div>
                               
                                <div className="relative mt-5">
                                    <input type="email" name="email" id="email" placeholder="Email"
                                        className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Email
                                    </label>
                                </div>
                                
                                <DatePicker placeholder="Fecha nacimiento" className=" relative mt-5 peer w-full rounded-md border text-gray-500 border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none">
                                <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Email
                                </label>
                                </DatePicker>
                                
                                <div className="relative mt-5">
                                    <input type="phone" name="Teléfono" id="phone" placeholder="Teléfono"
                                        className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Teléfono
                                    </label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="text" name="text" id="instagram" placeholder="Instagram"
                                        className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Usuario
                                        instagram
                                    </label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="text" name="size" id="size" placeholder="Tamaño"
                                        className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Contraseña</label>
                                </div>

                                <div className="relative mt-5">
                                    <div className="my-6">
                                        <button type="submit" className="italiana w-full rounded-md text-lg bg-black px-3 py-4 text-white
                                                     hover:bg-gray-600"><a href="home.html">ENVIAR</a></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}