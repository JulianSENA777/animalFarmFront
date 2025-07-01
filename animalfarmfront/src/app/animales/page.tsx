"use client";
import { FaPlus, FaEdit, FaTrash, FaEye, FaFilter, FaTimes, FaPaw } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/MainLayout';
import AnimalSearchFilters from './AnimalSearchFilters';
import { getHealthStatusColor, getHealthStatusText } from './healthStatusUtils';

export default function Animales() {
  const router = useRouter();
  const [animales] = useState([
    {
      id: 1,
      nombre: "Luna",
      especie: "Perro",
      raza: "Golden Retriever",
      edad: 3,
      peso: 25.5,
      sexo: "hembra",
      estado: "estable",
      ubicacion: "sala1",
      imagen: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      nombre: "Milo",
      especie: "Gato",
      raza: "Siamés",
      edad: 2,
      peso: 4.2,
      sexo: "macho",
      estado: "enObservacion",
      ubicacion: "sala2",
      imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      nombre: "Rocky",
      especie: "Perro",
      raza: "Pastor Alemán",
      edad: 5,
      peso: 35.8,
      sexo: "macho",
      estado: "estable",
      ubicacion: "sala1",
      imagen: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      nombre: "Whiskers",
      especie: "Gato",
      raza: "Persa",
      edad: 4,
      peso: 5.1,
      sexo: "hembra",
      estado: "estable",
      ubicacion: "sala3",
      imagen: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      nombre: "Bella",
      especie: "Perro",
      raza: "Labrador",
      edad: 1,
      peso: 18.3,
      sexo: "hembra",
      estado: "estable",
      ubicacion: "sala2",
      imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      nombre: "Max",
      especie: "Perro",
      raza: "Bulldog",
      edad: 6,
      peso: 22.7,
      sexo: "macho",
      estado: "hospitalizado",
      ubicacion: "sala3",
      imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ]);

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

  // Enums basados en la clase Java
  const estadoSaludOptions = [
    { value: 'estable', label: 'Estable' },
    { value: 'inestable', label: 'Inestable' },
    { value: 'critico', label: 'Crítico' },
    { value: 'postoperatorio', label: 'Postoperatorio' },
    { value: 'enObservacion', label: 'En observación' },
    { value: 'hospitalizado', label: 'Hospitalizado' },
    { value: 'enCuarentena', label: 'En cuarentena' }
  ];

  const sexoOptions = [
    { value: 'macho', label: 'Macho' },
    { value: 'hembra', label: 'Hembra' }
  ];

  const ubicacionOptions = [
    { value: 'sala1', label: 'Sala 1' },
    { value: 'sala2', label: 'Sala 2' },
    { value: 'sala3', label: 'Sala 3' },
   ];

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


  const filteredAnimales = animales.filter(animal => {
    if (searchFilters.nombreAnimal && !animal.nombre.toLowerCase().includes(searchFilters.nombreAnimal.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <MainLayout activeMenu="Animales">
      {/* Header de la sección */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Gestión de Animales</h2>
            <p className="text-green-700 mt-1">Administra la información de todos los animales registrados</p>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md"
            onClick={() => router.push('/animales/agregar-animal')}
          >
            <FaPlus className="mr-2" />
            Agregar Animal
          </button>
        </div>

        {/* Motor de búsqueda avanzado extraído a componente */}
        <AnimalSearchFilters
          showSearchForm={showSearchForm}
          setShowSearchForm={setShowSearchForm}
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
          clearFilters={clearFilters}
          estadoSaludOptions={estadoSaludOptions}
          sexoOptions={sexoOptions}
        />
      </div>
{/* Grid de tarjetas de animales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimales.map((animal) => (
          <div key={animal.id} className="bg-white rounded-lg shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-200 hover:scale-105">
            <div className="h-48 bg-gray-200 overflow-hidden cursor-pointer"
            onClick={() => router.push(`/animales/${animal.id}`)}>
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

              <div className="space-y-1 mb-3 text-sm">
                <p className="text-green-700">
                  <span className="font-semibold">ID:</span> {animal.id}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Especie:</span> {animal.especie}
                </p>
                <p className="text-green-700">
                  <span className="font-semibold">Raza:</span> {animal.raza}
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