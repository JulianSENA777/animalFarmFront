import React from "react";

interface Campo {
  name: string;
  label: string;
  type: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  group?: string; // Permite agrupar campos
}

interface FiltroProps {
  campos: Campo[];
  values: Record<string, any>;
  onChange: (field: string, value: any) => void;
  color?: string;
  titulo?: string;
  onApply?: () => void; // Nueva prop para el botón Aplicar
}

const colorMap: Record<string, string> = {
  green: "focus:ring-green-500 focus:border-green-500 text-green-900",
  yellow: "focus:ring-yellow-500 focus:border-yellow-500 text-yellow-900",
  amber: "focus:ring-amber-500 focus:border-amber-500 text-amber-900",
};

const Filtro: React.FC<FiltroProps> = ({
  campos,
  values,
  onChange,
  color = "green",
  titulo = "Filtros de Búsqueda",
  onApply,
}) => {
  // Separar los campos tipo checkbox para mostrarlos al final
  const checkboxes = campos.filter((c) => c.type === "checkbox");
  // Eliminar los checkbox de los campos normales
  const camposSinCheckbox = campos.filter((c) => c.type !== "checkbox");
  // Agrupar campos sin los checkbox
  const grupos = {} as Record<string, Campo[]>;
  const sinGrupo: Campo[] = [];
  camposSinCheckbox.forEach((campo) => {
    if (campo.group) {
      if (!grupos[campo.group]) grupos[campo.group] = [];
      grupos[campo.group].push(campo);
    } else {
      sinGrupo.push(campo);
    }
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
      <h3
        className={`text-lg font-semibold mb-4 ${
          color === "green"
            ? "text-green-900"
            : color === "yellow"
            ? "text-yellow-900"
            : "text-amber-900"
        }`}
      >
        {titulo}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Campos sin grupo */}
        {sinGrupo.map((campo) => (
          <div key={campo.name}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {campo.label}
            </label>
            {campo.type === "select" ? (
              <select
                value={values[campo.name] || ""}
                onChange={(e) => onChange(campo.name, e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none ${colorMap[color]}`}
              >
                <option value="">Todos</option>
                {campo.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={campo.type}
                value={values[campo.name] || ""}
                onChange={(e) => onChange(campo.name, e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none ${colorMap[color]}`}
                placeholder={campo.placeholder || ""}
              />
            )}
          </div>
        ))}
        {/* Campos agrupados */}
        {Object.entries(grupos).map(([grupo, camposGrupo]) => (
          <div key={grupo} className="col-span-full">
            <div className="font-semibold text-gray-600 mb-2 mt-4">
              {grupo.charAt(0).toUpperCase() + grupo.slice(1)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {camposGrupo.map((campo) => (
                <div key={campo.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {campo.label}
                  </label>
                  {campo.type === "select" ? (
                    <select
                      value={values[campo.name] || ""}
                      onChange={(e) => onChange(campo.name, e.target.value)}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none ${colorMap[color]}`}
                    >
                      <option value="">Todos</option>
                      {campo.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={campo.type}
                      value={values[campo.name] || ""}
                      onChange={(e) => onChange(campo.name, e.target.value)}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none ${colorMap[color]}`}
                      placeholder={campo.placeholder || ""}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Checkboxes al final, alineados a la derecha arriba del botón aplicar */}
      {checkboxes.length > 0 && (
        <div
          className={`flex ${
            checkboxes.length > 2 ? "flex-col items-end gap-2" : "flex-row justify-end gap-8"
          } mt-6 mb-2`}
        >
          {checkboxes.map((campo) => (
            <div key={campo.name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!values[campo.name]}
                onChange={(e) => onChange(campo.name, e.target.checked)}
                className="form-checkbox h-5 w-5 text-green-700 border-gray-300 focus:ring-green-500"
              />
              <span className="text-gray-700 font-medium">{campo.label}</span>
            </div>
          ))}
        </div>
      )}
      {onApply && (
        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={onApply}
            className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-colors ${
              color === "green"
                ? "bg-green-700 hover:bg-green-800 text-yellow-100"
                : color === "yellow"
                ? "bg-yellow-500 hover:bg-yellow-600 text-green-900"
                : "bg-amber-500 hover:bg-amber-600 text-green-900"
            }`}
          >
            Aplicar
          </button>
        </div>
      )}
    </div>
  );
};

export default Filtro;
