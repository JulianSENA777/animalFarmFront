"use client";
import { FaPlus, FaEdit, FaTrash, FaEye, FaFilter, FaTimes, FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../../components/MainLayout';
import { getHealthStatusColor, getHealthStatusText } from './healthStatusUtils';
import { animalService, AnimalDto } from '../../service/animalService';
import AnimalFiltrosAvanzados from './animalFiltro';

export default function Animales() {
  const router = useRouter();
  const [animales, setAnimales] = useState<AnimalDto[]>([]);

  // Estados para el motor de búsqueda
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    nombreAnimal: '',
    estadoSalud: '',
    sexo: '',
    pesoMin: '',
    pesoMax: '',
    edadMin: '',
    edadMax: '',
    fechaRegistroDesde: '',
    fechaRegistroHasta: '',
    estadoGestante: ''
  });


   const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const clearFilters = () => {
    setSearchFilters({
      nombreAnimal: '',
      estadoSalud: '',
      sexo: '',
      pesoMin: '',
      pesoMax: '',
      edadMin: '',
      edadMax: '',
      fechaRegistroDesde: '',
      fechaRegistroHasta: '',
      estadoGestante: ''
    });
  };

  useEffect(() => {
    animalService.listarAnimales()
      .then(data => setAnimales(data))
      .catch(err => {
        // Puedes mostrar un mensaje de error o dejar la lista vacía
        setAnimales([]);
        console.error('Error al cargar animales:', err);
      });
  }, []);

  const filteredAnimales = animales.filter(animal => {
    if (searchFilters.nombreAnimal && !animal.nombre.toLowerCase().includes(searchFilters.nombreAnimal.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <MainLayout activeMenu="Animales">
      {/* Header de la sección */}
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Gestión de Animales</h2>
          </div>
        </div>

        {/* Motor de búsqueda avanzado modularizado */}
        {/* <FiltrosBusquedaPage ... /> */}
        {/* Filtros avanzados específicos de animales */}
        <AnimalFiltrosAvanzados
          values={searchFilters}
          onChange={handleFilterChange}
        />
      </div>
{/* Grid de tarjetas de animales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimales.map((animal) => (
          <div key={animal.animalId} className="bg-white rounded-lg shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-200 hover:scale-105">
            <div className="h-48 bg-gray-200 overflow-hidden cursor-pointer"
            onClick={() => router.push(`/animales/${animal.animalId}`)}>
              <img
                src={animal.imagen}
                alt={animal.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-green-900">{animal.nombre}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getHealthStatusColor(animal.estado)}`}>
                  {getHealthStatusText(animal.estado)}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Raza: {animal.raza?.nombreRaza || 'Desconocida'}</p>
                <p className="text-sm text-gray-600">Categoría: {animal.raza?.categoriaAnimal?.nombreCategoria || 'Desconocida'}</p>
              </div>
              <div className="space-y-1 mb-3 text-sm">
                <p className="text-green-700">
                  <span className="font-semibold">ID:</span> {animal.animalId}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Especie:</span> {animal.especie}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Raza:</span> {animal.raza?.nombreRaza || 'Desconocida'}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Sexo:</span> {animal.sexo === 'macho' ? 'Macho' : 'Hembra'}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Peso:</span> {animal.peso} kg
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Edad:</span> {animal.edad} años
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Ubicación:</span> {ubicacionOptions.find(u => u.value === animal.ubicacion)?.label || animal.ubicacion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAnimales.length === 0 && (
        <div className="text-center py-12">
          <FaPaw className="mx-auto text-6xl text-green-300 mb-4" />
          <h3 className="text-xl font-semibold text-green-700 mb-2">No se encontraron animales</h3>
          <p className="text-green-600">No hay animales que coincidan con tu búsqueda.</p>
        </div>
      )
  }
    </MainLayout>
    );
}