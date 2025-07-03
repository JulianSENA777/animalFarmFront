"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Puedes importar aquí los íconos y utilidades necesarias, por ejemplo:
// import { Calendar, Eye, Info } from 'react-icons/fi';
// import { getTipoEventoColor, tipoEventoLabels, getGravedadColor, getGravedadIcon, formatDate } from './NovedadStatusUtils';

interface NovedadesProps {
  currentAnimal: any;
}

export default function NovedadesPage({ currentAnimal }: NovedadesProps) {
  // Si no se pasa currentAnimal como prop, se usan place holders para pruebas
  const animal = currentAnimal || {
    novedades: [
      {
        novedadId: '1',
        tipo: 'Vacunación',
        gravedad: 'leve',
        fechaInicioNovedad: '2025-07-01',
        estadoNovedad: true,
      },
      {
        novedadId: '2',
        tipo: 'Enfermedad',
        gravedad: 'grave',
        fechaInicioNovedad: '2025-06-20',
        estadoNovedad: false,
      },
    ],
  };

  // Función de ejemplo para el botón (debes implementarla según tu lógica)
  const handleVerNovedad = (novedadId: string) => {
    // Lógica para ver la novedad
    alert(`Ver novedad ${novedadId}`);
  };

  return (
    <MainLayout activeMenu="Novedades">
      <div className="bg-white rounded-lg shadow-lg border border-blue-100 overflow-hidden mt-6">
        <div className="p-6 border-b border-blue-200 bg-blue-50">
          <h3 className="text-xl font-bold text-blue-900">Novedades</h3>
        </div>
        <div className="p-6">
          {animal.novedades && animal.novedades.length > 0 ? (
            <div className="space-y-4">
              {animal.novedades.map((novedad: any) => (
                <div key={novedad.novedadId} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    {/* Aquí deberías mostrar los datos de la novedad, usando tus utilidades e íconos */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        {/* Ejemplo de etiqueta de tipo de evento */}
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">{novedad.tipo}</span>
                        {/* Ejemplo de gravedad */}
                        <span className="text-sm font-medium capitalize">{novedad.gravedad}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          {/* <Calendar className="w-4 h-4" /> */}
                          <span>{novedad.fechaInicioNovedad}</span>
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
                    {/* Botón Ver Novedad */}
                    <div className="flex-shrink-0 ml-4">
                      <button
                        onClick={() => handleVerNovedad(novedad.novedadId)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {/* <Eye className="w-4 h-4" /> */}
                        <span className="text-sm font-medium">Ver Novedad</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {/* <Info className="w-12 h-12 mx-auto mb-3 text-gray-400" /> */}
              <p>No hay novedades registradas para este animal</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
