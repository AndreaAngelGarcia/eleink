import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tittle } from '../tittle/tittle';

export function Booking() {
    const [buttonForm, setButtonForm] = useState({
        name: '',
        email: '',
        phone: '',
        instagram: '',
        size: '',
        description: '',
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setButtonForm({ ...buttonForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (x) => {
        x.preventDefault();

        // Validar campos antes de enviar el formulario
        if (
            !buttonForm.name ||
            !buttonForm.email ||
            !buttonForm.phone ||
            !buttonForm.size
        ) {
            setError(true);
            toast.error('Debes rellenar todos los campos.');
            return;
        }

        try {
            const response = await fetch(
                'https://eleink-openapi.onrender.com/mailform',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(buttonForm),
                }
            );

            if (response.ok) {
                setSuccess(true);
                toast.success('El formulario se envió correctamente.');
                
                const datos = await response.json();
                console.log(datos);
            } else {
                setError(true);
                toast.error('Ocurrió un error al enviar el formulario.');
            }
        } catch (error) {
            console.error('Error:', error);
            navigate('/login');
            toast.error('Ocurrió un error al enviar el formulario.');
        }
    };

    return (
        <>
            <Tittle title="¿Quieres pedir cita?" />
            <div className="h-screen md:flex">
                <div className="relative mx-auto mt-8 md:flex w-1/2 bg-white justify-around items-center lg:mx-4">
                    <div>
                        <button type="submit" className="block bg-white mt-6 mx-auto py-2 font-bold"><img
                            src="./assets/images/foto1.PNG" className="w-48" /></button>
                    </div>
                </div>
                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-8 lg:ml-32">
                    <div className="relative border mx-auto w-70 max-w-md bg-white px-16 pt-10 pb-8 shadow-xl sm:rounded-xl ">
                        <div className="w-full">
                            <form>
                                <div className="relative mt-5">
                                    <input type="name" name="name" id="name" placeholder="Nombre y apelidos" onChange={handleChange}
                                        className="peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="name"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Nombre
                                        y apellidos</label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}
                                        className="peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Email
                                    </label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="phone" name="phone" id="phone" placeholder="Teléfono" onChange={handleChange}
                                        className="peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Teléfono
                                    </label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="text" name="instagram" id="instagram" placeholder="Instagram" onChange={handleChange}
                                        className="peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Usuario
                                        instagram
                                    </label>
                                </div>
                                <div className="relative mt-5">
                                    <input type="text" name="size" id="size" placeholder="Tamaño" onChange={handleChange}
                                        className="peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                        autoComplete="off" required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Zona
                                        y tamaño</label>
                                </div>

                                <div className="relative mt-5">
                                    <textarea type="descripcion" name="description" id="description" placeholder="Descripcion" onChange={handleChange}
                                        className="peer peer w-56 lg:w-80 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"></textarea>

                                    <label htmlFor="descripcion"
                                        className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 
                                transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Descripción</label>
                                </div>

                                <div className="my-6">
                                    <Link to="/"><button type="submit" onClick={handleSubmit} className="italiana w-56 lg:w-80 rounded-md text-lg bg-black px-3 py-4 text-white
                                hover:bg-gray-600">Enviar</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar alertas */}
            <ToastContainer position="top-center" />
        </>
    );
}
