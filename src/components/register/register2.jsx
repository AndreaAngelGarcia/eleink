import { Link } from 'react-router-dom';
//import { DatePicker } from '@ant-design/icons';

import { useState } from 'react';

export function Register2() {
    const [formulario, setFormulario] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        password: '',
        userInstagram: '',
        rol: '',
    });

    const handleChange = (x) => {
        setFormulario({ ...formulario, [x.target.name]: x.target.value })
    };

    const handleSubmit = (x) => {
        x.preventDefault(); 
        fetch('https://eleink-openapi.onrender.com/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formulario)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <section>
            {/* Sección login*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                <div className="flex flex-col items-center justify-center bg-white rounded-tl-lg rounded-bl-lg m-0">
                    <div className="my-4">
                        <img src="./assets/images/LOGO.PNG" width="100" height="100" />
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="text-4xl font-bold text-gray-900">REGÍSTRATE</h1>
                    </div>
                    <div className="w-full">
                        <form>
                            {/*NOMBRE*/}
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="text" name="name" id="name" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Nombre
                                    </label>
                                </div>
                            </div>

                            {/*EMAIL*/}
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Correo electrónico
                                    </label>
                                </div>
                            </div>

                            {/*FECHA NACIMIENTO*/}
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="text" name="birthday" id="birthday" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Fecha nacimiento
                                    </label>
                                </div>
                            </div>

                            {/*TELÉFONO*/}
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="phone" name="phone" id="phone" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Teléfono
                                    </label>
                                </div>
                            </div>

                            {/*USUARIO INSTAGRAM*/}
                            <div className="flex justify-center">
                                <div className="relative w-72 mt-5 ">
                                    <input type="text" name="userInstagram" id="userInstagram" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Usuario instagram
                                    </label>
                                </div>
                            </div>

                            {/*CONTRASEÑA*/}
                            <div className="flex justify-center  mb-6">
                                <div className="relative w-72 mt-5 ">
                                    <input type="password" name="password" id="password" placeholder="Correo electrónico" onChange={handleChange}
                                        className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                        Contraseña
                                    </label>
                                </div>
                            </div>

                            <div className="w-full max-w-md mx-auto mb-4">
                                <Link to="/login"><button type="submit" onClick={handleSubmit} className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 text-bold  hover:bg-gray-300 transition-colors">
                                    Regístrate
                                </button>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div>
                        <span className="text-gray-500">
                            ¿Ya tienes cuenta?{" "}
                            <Link to="/login" className="text-gray-900 hover:underline transition-all">
                                Inicia sesión
                            </Link>
                        </span>
                    </div>
                </div>

                {/* Foto parte derecha */}
                <div className="hidden lg:flex items-center justify-center">
                    <img src="./src/assets/images/elena.jpg" className="w-8/12 object-cover" />
                </div>
            </div>
        </section>
    )
}