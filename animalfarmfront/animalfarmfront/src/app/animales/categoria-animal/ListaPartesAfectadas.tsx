"use client";

import React, { useState, useEffect } from 'react';
import { AlertCircle, Eye } from 'lucide-react';
import AgregarElemento from '../../components/agregarElemento/Agregar';
import TarjetaDetalle from '../../components/detalles-veterinarios/objetos';

const partesEjemplo = [
  {
    id: 1,
    nombre: 'COMIDA',
    tipo: 'Extremidad',
  },
  {
    id: 2,
    nombre: 'Oreja Derecha',
    tipo: 'Cabeza',
  },
];

const ListaPartesAfectadas = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarItems = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setItems(partesEjemplo);
      setError('');
    } catch (err) {
      setError('Error al cargar las partes afectadas');
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
        <h3 className="text-xl font-bold text-green-900">Partes Afectadas</h3>
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron partes afectadas</h3>
            <p className="text-gray-500">Agrega tu primera parte afectada</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 w-full">
            {items.map((item) => (
              <TarjetaDetalle
                key={item.id}
                nombre={item.nombre}
                tipo={item.tipo}
                onVerDetalle={() => handleVerDetalle(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaPartesAfectadas;
