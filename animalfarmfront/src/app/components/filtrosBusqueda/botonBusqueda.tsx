import React from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

interface BotonBusquedaProps {
  showSearchForm: boolean;
  setShowSearchForm: (show: boolean) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  color?: string; // ej: "green", "yellow", "amber"
  labelBusqueda?: string;
  labelLimpiar?: string;
}

const colorMap: Record<string, string> = {
  green: "bg-green-700 hover:bg-green-800 text-yellow-100",
  yellow: "bg-yellow-500 hover:bg-yellow-600 text-green-900",
  amber: "bg-amber-500 hover:bg-amber-600 text-green-900",
};

const BotonBusqueda: React.FC<BotonBusquedaProps> = ({
  showSearchForm,
  setShowSearchForm,
  clearFilters,
  hasActiveFilters,
  color = "green",
  labelBusqueda = "Búsqueda Avanzada",
  labelLimpiar = "Limpiar Filtros",
}) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setShowSearchForm(!showSearchForm)}
        className={`font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md ${colorMap[color]}`}
      >
        <FaFilter className="mr-2" />
        {labelBusqueda}
      </button>
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg flex items-center transition-colors shadow-md"
        >
          <FaTimes className="mr-2" />
          {labelLimpiar}
        </button>
      )}
    </div>
  );
};

export default BotonBusqueda;

