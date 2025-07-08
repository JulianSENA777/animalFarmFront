import React from "react";
import BotonBusqueda from "./botonBusqueda";
import Filtro from "./Filtro";
import LimpiarFiltro from "./limpiarfiltro";

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
    setShowSearchForm(false);
  };

  return (
    <div>
      <BotonBusqueda
        showSearchForm={showSearchForm}
        setShowSearchForm={setShowSearchForm}
        color={color}
        labelBusqueda={labelBusqueda}
      />
      {showSearchForm && (
        <div className="filtros-form bg-white p-4 rounded-lg shadow-md mt-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">{titulo}</h3>
          <Filtro
            campos={campos}
            values={values}
            onChange={onChange}
            color={color}
            titulo={titulo}
            renderCustomCampo={(campo) => {
              if (campo.type === 'checkbox') {
                return (
                  <div key={campo.name} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={!!values[campo.name]}
                      onChange={e => onChange(campo.name, e.target.checked)}
                      className="form-checkbox h-5 w-5 text-green-700 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-gray-700 font-medium">{campo.label}</span>
                  </div>
                );
              }
              return null;
            }}
          />
          <div className="flex justify-end mt-4 space-x-2">
            <LimpiarFiltro
              clearFilters={clearFilters}
              disabled={!hasActiveFilters}
              label={labelLimpiar}
            />
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={handleApply}
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltrosBusquedaPage;
