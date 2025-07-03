import React from 'react';
import { Info, Calendar, Eye } from 'lucide-react';
import { getTipoEventoColor, tipoEventoLabels } from './NovedadStatusUtils';
import { getGravedadColor, getGravedadIcon } from './NovedadKindStatus';

interface AnimalNovedadesProps {
  currentAnimal: any;
}

const AnimalNovedades: React.FC<AnimalNovedadesProps> = ({ currentAnimal }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleVerNovedad = (novedadId: number) => {
    alert(`Ver novedad con ID: ${novedadId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-blue-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-blue-200 bg-blue-50">
        <h3 className="text-xl font-bold text-blue-900">Novedades</h3>
      </div>
      <div className="p-6">
        {currentAnimal.novedades && currentAnimal.novedades.length > 0 ? (
          <div className="space-y-4">
            {currentAnimal.novedades.map((novedad: any) => (
              <div key={novedad.novedadId} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between">
                  {/* Información de la novedad (lado izquierdo) */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTipoEventoColor(novedad.tipo)}`}>{tipoEventoLabels[novedad.tipo]}</span>
                      <div className={`flex items-center space-x-1 ${getGravedadColor(novedad.gravedad)}`}>{getGravedadIcon(novedad.gravedad)}<span className="text-sm font-medium capitalize">{novedad.gravedad}</span></div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(novedad.fechaInicioNovedad)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">ID:</span>
                        <span className="font-mono">{novedad.novedadId}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${novedad.estadoNovedad ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-xs">{novedad.estadoNovedad ? 'Abierta' : 'Cerrada'}</span>
                      </div>
                    </div>
                  </div>
                  {/* Botón Ver Novedad (lado derecho) */}
                  <div className="flex-shrink-0 ml-4">
                    <button
                      onClick={() => handleVerNovedad(novedad.novedadId)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver Novedad</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Info className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p>No hay novedades registradas para este animal</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalNovedades;

