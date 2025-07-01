import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-lime-100 min-h-screen flex flex-col items-center justify-center p-4">
      <nav className="bg-green-800 text-white w-full py-6 shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-center items-center">
          <a href="/" className="text-xl font-bold text-yellow-500 hover:text-yellow-300 transition duration-200 ease-in-out">
            Inicio
          </a>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mt-24 md:mt-0">
        <div className="flex-shrink-0 mb-12 md:mb-0 md:mr-24 md:w-5/12 flex justify-center items-center">
          <Image
            src="/IMG/Logo.webp"
            alt="Farm Logo"
            width={300}
            height={300}
            className="w-full h-auto max-w-xs md:max-w-sm rounded-full shadow-lg object-cover"
            priority
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm md:max-w-xs md:w-1/3">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Iniciar sesión</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Ingresa el usuario"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Ingresa tu Contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}