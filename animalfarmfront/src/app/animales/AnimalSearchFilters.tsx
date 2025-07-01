import React from "react";
import { FaFilter, FaTimes } from "react-icons/fa";


interface AnimalSearchFiltersProps {
  showSearchForm: boolean;
  setShowSearchForm: (show: boolean) => void;
  searchFilters: any;
  setSearchFilters: (filters: any) => void;
  clearFilters: () => void;
  estadoSaludOptions: { value: string; label: string }[];
  sexoOptions: { value: string; label: string }[];
}

const AnimalSearchFilters: React.FC<AnimalSearchFiltersProps> = ({
  showSearchForm,
  setShowSearchForm,
  searchFilters,
  setSearchFilters,
  clearFilters,
  estadoSaludOptions,
  sexoOptions,
}) => {
  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="relative">
      <div className="flex gap-2">
        <button
          onClick={() => setShowSearchForm(!showSearchForm)}
          className="bg-green-700 hover:bg-green-800 text-yellow-100 font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md"
        >
          <FaFilter className="mr-2" />
          Búsqueda Avanzada
        </button>
        {Object.values(searchFilters).some((value) => value !== "") && (
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
        <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200"> {/* Changed bg to gray-50 and border to gray-200 */}
          <h3 className="text-lg font-semibold text-green-900 mb-4">Filtros de Búsqueda</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Nombre del Animal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"> {/* Changed label text color to gray-700 */}
                Nombre del Animal
              </label>
              <input
                type="text"
                value={searchFilters.nombreAnimal}
                onChange={(e) => handleFilterChange("nombreAnimal", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                placeholder="Buscar por nombre..."
              />
            </div>
            {/* Estado de Salud */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado de Salud
              </label>
              <select
                value={searchFilters.estadoSalud}
                onChange={(e) => handleFilterChange("estadoSalud", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
              >
                <option value="">Todos los estados</option>
                {estadoSaludOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Sexo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sexo
              </label>
              <select
                value={searchFilters.sexo}
                onChange={(e) => handleFilterChange("sexo", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
              >
                <option value="">Ambos sexos</option>
                {sexoOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Peso - Rango */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Peso (kg)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.01"
                  value={searchFilters.pesoMin}
                  onChange={(e) => handleFilterChange("pesoMin", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                  placeholder="Mín"
                />
                <input
                  type="number"
                  step="0.01"
                  value={searchFilters.pesoMax}
                  onChange={(e) => handleFilterChange("pesoMax", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                  placeholder="Máx"
                />
              </div>
            </div>
            {/* Edad - Rango */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Edad (años)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={searchFilters.edadMin}
                  onChange={(e) => handleFilterChange("edadMin", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                  placeholder="Mín"
                />
                <input
                  type="number"
                  value={searchFilters.edadMax}
                  onChange={(e) => handleFilterChange("edadMax", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                  placeholder="Máx"
                />
              </div>
            </div>
            {/* Fecha de Registro - Rango */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Registro
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={searchFilters.fechaRegistroDesde}
                  onChange={(e) => handleFilterChange("fechaRegistroDesde", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                />
                <input
                  type="date"
                  value={searchFilters.fechaRegistroHasta}
                  onChange={(e) => handleFilterChange("fechaRegistroHasta", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                />
              </div>
              <div className="text-xs text-gray-600 mt-1">Desde - Hasta</div> {/* Changed text color to gray-600 */}
            </div>
            {/* Estado Gestante */}
            <div className="flex items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado Gestante
                </label>
                <select
                  value={searchFilters.estadoGestante}
                  onChange={(e) => handleFilterChange("estadoGestante", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900" /* Changed border to gray-300, focus ring/border to green-500, text to gray-900 */
                >
                  <option value="">Ambos estados</option>
                  <option value="true">Gestante</option>
                  <option value="false">No gestante</option>
                </select>
              </div>
            </div>
            {/* Estado (true/false) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!!searchFilters.estadoFalse}
                  onChange={e => handleFilterChange("estadoFalse", e.target.checked)}
                  className="form-checkbox h-5 w-5 text-green-700 border-gray-300 focus:ring-green-500" /* Changed border to gray-300 and focus ring to green-500 */
                />
                Mostrar animales con estado <span className="font-bold">false</span>
              </label>
            </div>
          </div>
          {/* Botones de acción del formulario */}
          <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-200"> {/* Changed border to gray-200 */}
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" /* Changed text and hover bg colors */
            >
              Limpiar
            </button>
            <button
              onClick={() => setShowSearchForm(false)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors" /* Changed button colors to green */
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalSearchFilters;