import React from "react";

interface LimpiarFiltroProps {
  clearFilters: () => void;
  disabled?: boolean;
  label?: string;
}

const LimpiarFiltro: React.FC<LimpiarFiltroProps> = ({ clearFilters, disabled = false, label = "Limpiar Filtros" }) => {
  return (
    <button
      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      onClick={clearFilters}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
};

export default LimpiarFiltro;

