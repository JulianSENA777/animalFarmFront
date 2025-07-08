import React from "react";
import { FaFilter } from 'react-icons/fa';
import Filtro from '../components/filtrosBusqueda/Filtro';
import FiltrosBusquedaPage from '../components/filtrosBusqueda/FiltrosBusquedaPage';

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

  const camposNovedades = [
    { name: 'tipo', label: 'Tipo de Evento', type: 'select', options: tipoEventoOptions },
    { name: 'gravedad', label: 'Gravedad', type: 'select', options: gravedadOptions },
    { name: 'estadoNovedad', label: 'Estado', type: 'select', options: [
      { value: '', label: 'Todos' },
      { value: 'true', label: 'Activa' },
      { value: 'false', label: 'Inactiva' },
    ] },
    { name: 'fechaInicioDesde', label: 'Fecha de Inicio (Desde)', type: 'date', group: 'fecha Inicio' },
    { name: 'fechaInicioHasta', label: 'Fecha de Inicio (Hasta)', type: 'date', group: 'fecha Inicio' },
    { name: 'fechaFinalizacionDesde', label: 'Fecha de Finalización (Desde)', type: 'date', group: 'fecha Finalizacion' },
    { name: 'fechaFinalizacionHasta', label: 'Fecha de Finalización (Hasta)', type: 'date', group: 'fecha Finalizacion' },
  ];

  return (
    <FiltrosBusquedaPage
      campos={camposNovedades}
      values={searchFilters}
      onChange={handleFilterChange}
      clearFilters={clearFilters}
      hasActiveFilters={hasActiveFilters}
      showSearchForm={showSearchForm}
      setShowSearchForm={setShowSearchForm}
      color="green"
      titulo="Filtros de Novedades"
      labelBusqueda="Búsqueda Avanzada"
      labelLimpiar="Limpiar Filtros"
    />
  );
};

export default NovedadSearchFilters;
