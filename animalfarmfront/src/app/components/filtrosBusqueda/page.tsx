import React, { useState } from "react";
import BotonBusqueda from "./botonBusqueda";
import Filtro from "./Filtro";

interface FiltrosBusquedaPageProps {
  campos: any[];
  values: Record<string, any>;
  onChange: (field: string, value: any) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  showSearchForm: boolean;
  setShowSearchForm: (show: boolean) => void;
  color?: string;
  titulo?: string;
  labelBusqueda?: string;
  labelLimpiar?: string;
}

const FiltrosBusquedaPage: React.FC<FiltrosBusquedaPageProps> = ({
  campos,
  values,
  onChange,
  clearFilters,
  hasActiveFilters,
  showSearchForm,
  setShowSearchForm,
  color = "green",
  titulo = "Filtros de Búsqueda",
  labelBusqueda = "Búsqueda Avanzada",
  labelLimpiar = "Limpiar Filtros"
}) => {
  // Función para aplicar los filtros (puedes personalizarla según tu lógica)
  const handleApply = () => {
    // Aquí puedes agregar lógica para aplicar los filtros, cerrar el formulario, etc.
    setShowSearchForm(false);
  };

  return (
    <div>
      <BotonBusqueda
        showSearchForm={showSearchForm}
        setShowSearchForm={setShowSearchForm}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        color={color}
        labelBusqueda={labelBusqueda}
        labelLimpiar={labelLimpiar}
      />
      {showSearchForm && (
        <Filtro
          campos={campos}
          values={values}
          onChange={onChange}
          color={color}
          titulo={titulo}
          onApply={handleApply}
        />
      )}
    </div>
  );
};

export default FiltrosBusquedaPage;
