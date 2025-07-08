"use client";

import React, { useState, useEffect } from 'react';
import { AlertCircle, Eye } from 'lucide-react';
import AgregarElemento from '../../components/agregarElemento/Agregar';

const desparasitacionesEjemplo = [
  {
    id: 1,
    nombre: 'Desparasitación Interna',
    tipo: 'Interna',
  },
  {
    id: 2,
    nombre: 'Desparasitación Externa',
    tipo: 'Externa',
  },
];

const ListaDesparasitaciones = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarItems = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setItems(desparasitacionesEjemplo);
      setError('');
    } catch (err) {
      setError('Error al cargar las desparasitaciones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarItems();
  }, []);

  const handleVerDetalle = (item: any) => {
    // Lógica para ver detalle
    console.log('Ver detalle:', item);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-green-100 overflow-hidden mt-6">
      <div className="flex items-center justify-between p-6 border-b border-green-200 bg-green-50">
        <h3 className="text-xl font-bold text-green-900">Desparasitaciones</h3>
      </div>
      <div className="p-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-2">
            <AlertCircle className="text-red-600" size={20} />
            <span className="text-red-800">{error}</span>
          </div>
        )}
        {items.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron desparasitaciones</h3>
            <p className="text-gray-500">Agrega tu primera desparasitación</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 w-full max-w-3xl mx-auto">
            {items.map((item) => (
              <div key={item.id} className="bg-yellow-50 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow w-full relative flex items-center min-h-[72px] h-[72px]">
                <div className="p-4 flex-1">
                  <div className="mb-2">
                    <h3 className="text-base font-semibold text-green-900 mb-1">{item.nombre}</h3>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">{item.tipo}</span>
                  </div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <button
                    onClick={() => handleVerDetalle(item)}
                    className="bg-green-700 hover:bg-green-800 text-yellow-100 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs"
                    title="Ver detalle"
                  >
                    <Eye className="h-4 w-4" />
                    Ver Detalle
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaDesparasitaciones;

