"use client";
import { FaPaw } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../../components/MainLayout';
import { getHealthStatusColor, getHealthStatusText } from './healthStatusUtils';
import { animalService, AnimalDto } from '../../service/animalService';
import FiltrosBusquedaPage from '../../components/filtrosBusqueda/FiltrosBusquedaPage';

export default function Animales() {
  const router = useRouter();
  const [animales, setAnimales] = useState<AnimalDto[]>([]);
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
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleFilterChange = (field: string, value: string | number | boolean | undefined) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Definir camposAnimales localmente para el formulario de filtros
  const camposAnimales = [
    { name: "nombreAnimal", label: "Nombre del Animal", type: "text", placeholder: "Buscar por nombre..." },
    { name: "estadoSalud", label: "Estado de Salud", type: "select", options: [
      { value: 'estable', label: 'Estable' },
      { value: 'inestable', label: 'Inestable' },
      { value: 'critico', label: 'Crítico' },
      { value: 'postoperatorio', label: 'Postoperatorio' },
      { value: 'enObservacion', label: 'En observación' },
      { value: 'hospitalizado', label: 'Hospitalizado' },
      { value: 'enCuarentena', label: 'En cuarentena' }
    ] },
    { name: "sexo", label: "Sexo", type: "select", options: [
      { value: 'macho', label: 'Macho' },
      { value: 'hembra', label: 'Hembra' }
    ] },
    { name: "estadoGestante", label: "Gestante?", type: "checkbox" },
    { name: "EstadoAnimal", label: "Se encuentra disponible?", type: "checkbox" },
    { name: "pesoMin", label: "Peso mínimo (kg)", type: "number", group: "peso" },
    { name: "pesoMax", label: "Peso máximo (kg)", type: "number", group: "peso" },
    { name: "edadMin", label: "Edad mínima (años)", type: "number", group: "edad" },
    { name: "edadMax", label: "Edad máxima (años)", type: "number", group: "edad" },
    { name: "fechaRegistroDesde", label: "Fecha de Registro Desde", type: "date", group: "fecha" },
    { name: "fechaRegistroHasta", label: "Fecha de Registro Hasta", type: "date", group: "fecha" },
    { name: "ubicacion", label: "Ubicación", type: "select", options: [
      { value: 'sala1', label: 'Sala 1' },
      { value: 'sala2', label: 'Sala 2' },
      { value: 'sala3', label: 'Sala 3' }
    ] },
  ];

  // Definir función clearFilters para limpiar los filtros
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

  const hasActiveFilters = Object.values(searchFilters).some((v) => v !== undefined && v !== "");

  // Eliminar lógica de filtrado y fetch, solo mostrar el formulario de filtros
  return (
    <MainLayout activeMenu="Animales">
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Gestión de Animales</h2>
          </div>
        </div>
        <FiltrosBusquedaPage
          campos={camposAnimales}
          values={searchFilters}
          onChange={handleFilterChange}
          clearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
          showSearchForm={showSearchForm}
          setShowSearchForm={setShowSearchForm}
          color="green"
          titulo="Filtros de Búsqueda de Animales"
          labelBusqueda="Búsqueda Avanzada"
          labelLimpiar="Limpiar Filtros"
        />
      </div>
    </MainLayout>
  );
}