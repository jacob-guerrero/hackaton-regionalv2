import { useState } from "react";
import assets from "../../assets/imgs/assetsManager";
import { CircleUserRound } from "lucide-react";

export default function Header() {
  // Estado para manejar si el menú está abierto en vista móvil (opcional)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" shadow-md w-full">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo o nombre de la app */}
        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-8 h-8 mr-2" // Ajusta el tamaño de la imagen según sea necesario
          />
          <span className="text-xl font-bold text-gray-800">SmallApp</span>
        </div>

        {/* Menú de navegación */}
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Inicio
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Noticias
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Canjear
          </a>

          <a href="#">
            <CircleUserRound />
          </a>
        </nav>

        {/* Botón para abrir el menú en pantallas pequeñas (opcional) */}
        <div
          className="hidden md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <button className="text-gray-800 focus:outline-none">
            <CircleUserRound />
          </button>
        </div>

        {/* Menú en pantallas pequeñas */}
        {isMenuOpen && (
          <nav
            className="hidden absolute top-16 right-0 bg-white shadow-md p-4 rounded-lg md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Canjear
            </a>

            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Salir
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
