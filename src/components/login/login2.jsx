import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login2() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (x) => {
    x.preventDefault();

    try {
      const response = await fetch('https://eleink-openapi.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      });

      if (response.ok) {

        navigate('/user-data')

        const datos = await response.json();
        console.log(datos);

        localStorage.setItem('userData', JSON.stringify(datos));
        localStorage.setItem('isLoggedIn', true);


      } else {
        alert('usuario y/o contraseña incorrecto')
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/login')
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:mt-0">
        <div className="flex flex-col items-center justify-center bg-white rounded-tl-lg rounded-bl-lg m-0 lg:mt-0">
          <div className="my-4">
            <img src="./assets/images/LOGO.png" alt="JT Devs" width="100" height="100" />
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold text-gray-900">Bienvenido a ELEINK</h1>
          </div>
          <div className="mt-14 mb-5">
            <p className="text-center relative text-gray-500 bg-white before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
              Inicia sesión con tu email
            </p>
          </div>

          <div className="w-full">
            <form>
              <div className="flex justify-center">
                <div className="relative w-72 mt-5 ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Correo electrónico
                  </label>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative w-72 mt-5 ">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Contraseña
                  </label>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recordarme</label>
                </div>
                
              </div>
              <div className="w-full max-w-md mx-auto">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div>
            <span className="text-gray-500">
              ¿No tienes cuenta?{' '}
              <Link to="/signin" className="text-gray-900 hover:underline transition-all">
                Regístrate
              </Link>
            </span>
          </div>
        </div>

        {/* Foto parte derecha */}
        <div className="hidden lg:flex items-center justify-center lg:mt-0">
          <img src="./assets/images/elena.jpg" className="w-7/12 object-cover" />
        </div>
      </div>
    </section>
  );
}
