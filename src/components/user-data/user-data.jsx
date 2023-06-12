import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function UserData() {
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        password: '',
        userInstagram: ''
    });

    const token = localStorage.getItem('userData');

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setFormulario(userData);
        }
    }, []);

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    // EDITAR EL USUARIO
    const handleEdit = (x) => {
        x.preventDefault();

        fetch(`https://eleink-openapi.onrender.com/users/${formulario.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.token}`
            },
            body: JSON.stringify(formulario)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast.success('Campos del usuario modificados correctamente');
                } else {
                    toast.sucess('Campos del usuario modificados correctamente');
                }
            })
            .catch(error => {
                console.error('Error al comunicarse con el servidor', error);
            });
    };

    // BORRAR EL USUARIO
    const handleDelete = () => {
        fetch(`https://eleink-openapi.onrender.com/users/${formulario.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.token}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast.success('Usuario eliminado correctamente');
                    // Realiza la redirección a la página deseada, por ejemplo, la página de inicio
                } else {
                    toast.error('Error al eliminar el usuario');
                }
            })
            .catch((error) => {
                console.error('Error al comunicarse con el servidor', error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
        toast.info('Sesión cerrada correctamente');
    };

    return (
        <div className="w-full">
            <form className="max-w-md mx-auto">
                <div className="flex justify-center">
                    {/*NOMBRE*/}
                    <div className="relative w-72 mt-5 ">
                        <input type="text" name="name" id="name" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.name}
                        </label>
                    </div>
                </div>

                {/*EMAIL*/}
                <div className="flex justify-center">
                    <div className="relative w-72 mt-5 ">
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.email}
                        </label>
                    </div>
                </div>

                {/*FECHA NACIMIENTO*/}
                <div className="flex justify-center">
                    <div className="relative w-72 mt-5 ">
                        <input type="text" name="birthday" id="birthday" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.birthday}
                        </label>
                    </div>
                </div>

                {/*TELÉFONO*/}
                <div className="flex justify-center">
                    <div className="relative w-72 mt-5 ">
                        <input type="phone" name="phone" id="phone" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.phone}
                        </label>
                    </div>
                </div>

                {/*USUARIO INSTAGRAM*/}
                <div className="flex justify-center">
                    <div className="relative w-72 mt-5 ">
                        <input type="text" name="userInstagram" id="userInstagram" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.userInstagram}
                        </label>
                    </div>
                </div>

                {/*CONTRASEÑA*/}
                <div className="flex justify-center  mb-6">
                    <div className="relative w-72 mt-5 ">
                        <input type="password" name="password" id="password" placeholder="Correo electrónico" onChange={handleChange}
                            className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autoComplete="off" />
                        <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                            {formulario.password}
                        </label>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto mb-4">
                    <button type="submit" onClick={handleEdit}
                        className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors">
                        <ToastContainer /> Editar información
                    </button>
                </div>

                <div className="w-full max-w-md mx-auto mb-4">
                    <button type="button" onClick={handleDelete}
                        className="w-full bg-red-600 py-2 px-4 rounded-lg text-white hover:bg-gray-300 transition-colors">
                        <ToastContainer /> Eliminar usuario
                    </button>
                </div>

                <div className="w-full max-w-md mx-auto mb-4">
                    <button type="button" onClick={handleLogout}
                        className="w-full bg-black py-2 px-4 rounded-lg text-white hover:bg-gray-300 transition-colors">
                        Cerrar sesión
                    </button>
                </div>
            </form>
            {/* ALERTAS */}
            <ToastContainer position="top-center" />
        </div>
    )
}
