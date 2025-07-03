"use client";
import MainLayout from "../components/MainLayout";
import AnimalNovedades from '../components/novedades/AnimalNovedades';
import { useState } from 'react';
import { tipoEventoLabels } from '../components/novedades/NovedadStatusUtils';
import { FaFilter, FaTimes } from 'react-icons/fa';

const gravedadOptions = [
  { value: 'baja', label: 'Baja' },
  { value: 'media', label: 'Media' },
  { value: 'alta', label: 'Alta' },
];

const tipoEventoOptions = Object.entries(tipoEventoLabels).map(([value, label]) => ({ value, label }));

// Puedes definir un animal de ejemplo o traerlo de props/estado
const currentAnimal = {
  novedades: [
    {
      novedadId: 1,
      titulo: "Chequeo veterinario",
      tipo: "chequeoRutinario",
      gravedad: "baja",
      fechaInicioNovedad: "2024-06-01",
      estadoNovedad: true
    },
    {
      novedadId: 2,
      titulo: "Vacunación anual",
      tipo: "vacunacion",
      gravedad: "media",
      fechaInicioNovedad: "2024-05-15",
      estadoNovedad: false
    }
  ]
};

export default function NovedadesPage() {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    tipo: '',
    gravedad: '',
    estadoNovedad: '',
    fechaInicioDesde: '',
    fechaFinalizacionHasta: '',
  });

  const clearFilters = () => {
    setSearchFilters({
      tipo: '',
      gravedad: '',
      estadoNovedad: '',
      fechaInicioDesde: '',
      fechaFinalizacionHasta: '',
    });
  };

  // Filtrado de novedades según los filtros seleccionados
  const filteredNovedades = currentAnimal.novedades.filter((novedad) => {
    if (searchFilters.tipo && novedad.tipo !== searchFilters.tipo) return false;
    if (searchFilters.gravedad && novedad.gravedad !== searchFilters.gravedad) return false;
    if (searchFilters.estadoNovedad && String(novedad.estadoNovedad) !== searchFilters.estadoNovedad) return false;
    if (searchFilters.fechaInicioDesde && new Date(novedad.fechaInicioNovedad) < new Date(searchFilters.fechaInicioDesde)) return false;
    if (searchFilters.fechaFinalizacionHasta && novedad.fechaFinalizacionNovedad && new Date(novedad.fechaFinalizacionNovedad) > new Date(searchFilters.fechaFinalizacionHasta)) return false;
    return true;
  });

  // Componente de filtros y botón exportado aquí
  const NovedadSearchFilters: React.FC<{
    searchFilters: any;
    setSearchFilters: (filters: any) => void;
    clearFilters: () => void;
    tipoEventoOptions: { value: string; label: string }[];
    gravedadOptions: { value: string; label: string }[];
    showSearchForm: boolean;
    setShowSearchForm: (show: boolean) => void;
  }> = ({
    searchFilters,
    setSearchFilters,
    clearFilters,
    tipoEventoOptions,
    gravedadOptions,
    showSearchForm,
    setShowSearchForm
  }) => {
    const handleFilterChange = (field: string, value: string) => {
      setSearchFilters((prev: any) => ({
        ...prev,
        [field]: value,
      }));
    };
    const hasActiveFilters = Object.values(searchFilters).some((value) => value !== "");
    return (
      <>
        <div className="flex justify-start gap-2 mb-4">
          <button
            onClick={() => setShowSearchForm(!showSearchForm)}
            className="bg-green-700 hover:bg-green-800 text-yellow-100 font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md"
          >
            <FaFilter className="mr-2" />
            Búsqueda Avanzada
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg flex items-center transition-colors shadow-md"
            >
              <FaTimes className="mr-2" />
              Limpiar Filtros
            </button>
          )}
        </div>
        {showSearchForm && (
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-200 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Filtros de Novedades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Tipo de Evento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Evento</label>
                <select
                  value={searchFilters.tipo}
                  onChange={(e) => handleFilterChange("tipo", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Todos</option>
                  {tipoEventoOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              {/* Gravedad */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gravedad</label>
                <select
                  value={searchFilters.gravedad}
                  onChange={(e) => handleFilterChange("gravedad", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Todas</option>
                  {gravedadOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              {/* Estado */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <select
                  value={searchFilters.estadoNovedad}
                  onChange={(e) => handleFilterChange("estadoNovedad", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Todos</option>
                  <option value="true">Abierta</option>
                  <option value="false">Cerrada</option>
                </select>
              </div>
              {/* Fecha Inicio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Inicio (desde)</label>
                <input
                  type="date"
                  value={searchFilters.fechaInicioDesde}
                  onChange={(e) => handleFilterChange("fechaInicioDesde", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>
              {/* Fecha Finalización */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Finalización (hasta)</label>
                <input
                  type="date"
                  value={searchFilters.fechaFinalizacionHasta}
                  onChange={(e) => handleFilterChange("fechaFinalizacionHasta", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-blue-200">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-lg transition-colors"
              >
                Limpiar
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <MainLayout activeMenu="Novedades">
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Gestión de Novedades</h2>
            </div>
        </div>
        {/* Botón de filtro debajo del título */}
        <NovedadSearchFilters
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
          clearFilters={clearFilters}
          tipoEventoOptions={tipoEventoOptions}
          gravedadOptions={gravedadOptions}
          showSearchForm={showSearchForm}
          setShowSearchForm={setShowSearchForm}
        />
        <AnimalNovedades currentAnimal={{ novedades: filteredNovedades }} />
      </div>
    </MainLayout>
  );
}