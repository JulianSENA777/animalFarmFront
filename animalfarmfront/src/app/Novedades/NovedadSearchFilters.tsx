import React from "react";
import { FaFilter } from 'react-icons/fa';
import FiltroBotones from '../components/filtrosBusqueda/FiltroBotones';

interface NovedadSearchFiltersProps {
  searchFilters: any;
  setSearchFilters: (filters: any) => void;
  clearFilters: () => void;
  tipoEventoOptions: { value: string; label: string }[];
  gravedadOptions: { value: string; label: string }[];
  showSearchForm: boolean;
  setShowSearchForm: (show: boolean) => void;
}

const NovedadSearchFilters: React.FC<NovedadSearchFiltersProps> = ({
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

  // Determinar si hay filtros activos
  const hasActiveFilters = Object.values(searchFilters).some((value) => value !== "");

  return (
    <>
      <FiltroBotones
        showSearchForm={showSearchForm}
        setShowSearchForm={setShowSearchForm}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        color="green"
        labelBusqueda="Búsqueda Avanzada"
        labelLimpiar="Limpiar Filtros"
      />
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
                <option value="true">Activa</option>
                <option value="false">Inactiva</option>
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

export default NovedadSearchFilters;
