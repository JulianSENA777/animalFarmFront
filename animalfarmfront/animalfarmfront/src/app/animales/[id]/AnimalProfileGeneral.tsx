import React from 'react';
import { Camera } from 'lucide-react';
import { GiCow, GiWeight, GiBarn, GiInfo, GiCalendar, GiFemale, GiMale } from 'react-icons/gi';
import { getHealthStatusColor, getHealthStatusText } from '../buscaranimal/healthStatusUtils';

interface AnimalProfileGeneralProps {
  currentAnimal: any;
}

const AnimalProfileGeneral: React.FC<AnimalProfileGeneralProps> = ({ currentAnimal }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-yellow-200 overflow-hidden">
      {/* Header con estado de salud */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-yellow-50">
        <div className="flex items-center space-x-3">
          <span className="w-7 h-7 flex items-center justify-center bg-transparent">
            <GiCow size={28} color="#b45309" />
          </span>
          <h1 className="text-2xl font-bold text-green-900">Perfil del Animal</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getHealthStatusColor(currentAnimal.estadoSalud)}`}>
            {getHealthStatusText(currentAnimal.estadoSalud)}
          </span>
        </div>
      </div>
      {/* Contenido Principal */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Foto del Animal */}
          <div className="flex-shrink-0 flex justify-center mb-6 md:mb-0">
            <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden border border-yellow-100">
              <Camera className="w-16 h-16 text-gray-400" />
              {currentAnimal.estadoGestante && (
                <div className="absolute top-3 left-3">
                  <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    🤰 Gestante
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Información del Animal */}
          <div className="flex-1 space-y-4">
            {/* Información Básica */}
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-2">
                {currentAnimal.nombreAnimal} • {currentAnimal.tipo} • {currentAnimal.raza.nombre}
              </h2>
              <div className="flex items-center space-x-4 text-green-700">
                {currentAnimal.sexo === 'macho' ? (
                  <span className="w-5 h-5 flex items-center justify-center">
                    <GiMale size={20} color="#60a5fa" title="Macho" />
                  </span>
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center">
                    <GiFemale size={20} color="#f472b6" title="Hembra" />
                  </span>
                )}
                <span className="text-lg">{currentAnimal.sexo === 'macho' ? 'Macho' : 'Hembra'}</span>
                <span>•</span>
                <span className="text-lg">{currentAnimal.edad} años</span>
                <span>•</span>
                <span className="text-sm">ID: {currentAnimal.codigoAnimal}</span>
                {currentAnimal.estadoGestante !== undefined && (
                  <>
                    <span>•</span>
                    {currentAnimal.estadoGestante ? (
                      <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">Gestante</span>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">No gestante</span>
                    )}
                  </>
                )}
              </div>
            </div>
            {/* Detalles en Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">
                    <GiWeight size={20} color="#d97706" title="Peso" />
                  </span>
                  <span className="font-medium">Peso:</span>
                  <span className="ml-2">{currentAnimal.peso} kg</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">
                    <GiCalendar size={20} color="#65a30d" title="Nacimiento" />
                  </span>
                  <span className="font-medium">Nacimiento:</span>
                  <span className="ml-2">{formatDate(currentAnimal.fechaNacimiento)}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">
                    <GiBarn size={20} color="#059669" title="Ubicación" />
                  </span>
                  <span className="font-medium">Ubicación:</span>
                  <span className="ml-2">{currentAnimal.ubicacion.nombre}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-gray-700">
                  <span className="font-medium">Zona:</span>
                  <span className="ml-2">{currentAnimal.ubicacion.descripcion}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Registro:</span>
                  <span className="ml-2">{formatDate(currentAnimal.fechaRegistro)}</span>
                </div>
              </div>
            </div>
            {/* Observaciones */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <span className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <GiInfo size={20} color="#3b82f6" />
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-green-900 mb-2">Observaciones</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {currentAnimal.observaciones}
                  </p>
                </div>
              </div>
            </div>
            {/* Información adicional */}
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Última actualización:</span>
                  <p>{new Date(currentAnimal.fechaActualizacion).toLocaleString('es-ES')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalProfileGeneral;
