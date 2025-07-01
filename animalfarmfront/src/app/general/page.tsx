import MainLayout from "../components/MainLayout";
import { FaHome, FaUser, FaUsers, FaBell, FaPaw, FaNotesMedical, FaMapMarkerAlt } from 'react-icons/fa';

export default function GeneralPage() {
  const menuItems = [
    { id: 1, name: "Inicio", icon: FaHome },
    { id: 2, name: "Perfil", icon: FaUser },
    { id: 3, name: "Funcionarios", icon: FaUsers },
    { id: 4, name: "Novedades", icon: FaBell },
    { id: 5, name: "Animales", icon: FaPaw },
    { id: 6, name: "Historias Clínicas", icon: FaNotesMedical },
    { id: 7, name: "Lugares", icon: FaMapMarkerAlt },
  ];

  return (
    <MainLayout activeMenu="Inicio">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-yellow-200">
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          Bienvenido al Dashboard
        </h2>
        <p className="text-green-700">
          Aquí va el contenido principal de la aplicación.
        </p>

        {/* Elementos adicionales para mostrar la paleta de colores */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="w-full h-8 bg-yellow-50 rounded mb-2"></div>
            <span className="text-xs text-green-700 font-medium">#FFF1CA</span>
          </div>
          <div className="bg-yellow-400 p-4 rounded-lg">
            <div className="w-full h-8 bg-yellow-400 rounded mb-2"></div>
            <span className="text-xs text-green-900 font-medium">#FFB823</span>
          </div>
          <div className="bg-green-700 p-4 rounded-lg">
            <div className="w-full h-8 bg-green-700 rounded mb-2"></div>
            <span className="text-xs text-yellow-100 font-medium">#708A58</span>
          </div>
          <div className="bg-green-900 p-4 rounded-lg">
            <div className="w-full h-8 bg-green-900 rounded mb-2"></div>
            <span className="text-xs text-yellow-100 font-medium">#2D4F2B</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}