import React, { useState } from "react";
import Filtro from "../../components/filtrosBusqueda/Filtro";
import BotonBusqueda from "../../components/filtrosBusqueda/botonBusqueda";

const estadoSaludOptions = [
  { value: 'estable', label: 'Estable' },
  { value: 'inestable', label: 'Inestable' },
  { value: 'critico', label: 'Crítico' },
  { value: 'postoperatorio', label: 'Postoperatorio' },
  { value: 'enObservacion', label: 'En observación' },
  { value: 'hospitalizado', label: 'Hospitalizado' },
  { value: 'enCuarentena', label: 'En cuarentena' }
];

const sexoOptions = [
  { value: 'macho', label: 'Macho' },
  { value: 'hembra', label: 'Hembra' }
];

const ubicacionOptions = [
  { value: 'sala1', label: 'Sala 1' },
  { value: 'sala2', label: 'Sala 2' },
  { value: 'sala3', label: 'Sala 3' },
];

const campos = [
  { name: "nombreAnimal", label: "Nombre del Animal", type: "text", placeholder: "Buscar por nombre..." },
  { name: "estadoSalud", label: "Estado de Salud", type: "select", options: estadoSaludOptions },
  { name: "sexo", label: "Sexo", type: "select", options: sexoOptions },
  { name: "estadoGestante", label: "Gestante?", type: "checkbox" },
  { name: "EstadoAnimal", label: "Se encuentra disponible?", type: "checkbox" },
  { name: "pesoMin", label: "Peso mínimo (kg)", type: "number", group: "peso" },
  { name: "pesoMax", label: "Peso máximo (kg)", type: "number", group: "peso" },
  { name: "edadMin", label: "Edad mínima (años)", type: "number", group: "edad" },
  { name: "edadMax", label: "Edad máxima (años)", type: "number", group: "edad" },
  { name: "fechaRegistroDesde", label: "Fecha de Registro Desde", type: "date", group: "fecha" },
  { name: "fechaRegistroHasta", label: "Fecha de Registro Hasta", type: "date", group: "fecha" },
  { name: "ubicacion", label: "Ubicación", type: "select", options: ubicacionOptions },
];

interface AnimalFiltrosAvanzadosProps {
  values: Record<string, string | number | boolean | undefined>;
  onChange: (field: string, value: string | number | boolean | undefined) => void;
}

const AnimalFiltrosAvanzados: React.FC<AnimalFiltrosAvanzadosProps> = ({ values, onChange }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const clearFilters = () => {
    // setValues({}); // Eliminado porque setValues no existe aquí
    if (onChange) {
      Object.keys(values).forEach((key) => onChange(key, ''));
    }
  };

  const hasActiveFilters = Object.values(values).some((v) => v !== undefined && v !== "");

  const handleApply = () => {
    setShowSearchForm(false);
    // Aquí puedes agregar lógica para aplicar los filtros a la búsqueda
  };

  return (
    <div>
      <BotonBusqueda
        showSearchForm={showSearchForm}
        setShowSearchForm={setShowSearchForm}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        color="green"
        labelBusqueda="Búsqueda Avanzada"
        labelLimpiar="Limpiar Filtros"
      />
      {showSearchForm && (
        <Filtro
          campos={campos}
          values={values}
          onChange={onChange}
          color="green"
          titulo="Filtros de Búsqueda de Animales"
          onApply={handleApply}
          renderCustomCampo={(campo) => {
            if (campo.group === 'peso' && campo.name === 'pesoMin') {
              return (
                <div key="peso-group" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Peso mínimo (kg)</label>
                    <input
                      type="number"
                      value={values.pesoMin || ''}
                      onChange={e => onChange('pesoMin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                      placeholder="Mínimo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Peso máximo (kg)</label>
                    <input
                      type="number"
                      value={values.pesoMax || ''}
                      onChange={e => onChange('pesoMax', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                      placeholder="Máximo"
                    />
                  </div>
                </div>
              );
            }
            if (campo.group === 'edad' && campo.name === 'edadMin') {
              return (
                <div key="edad-group" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Edad mínima (años)</label>
                    <input
                      type="number"
                      value={values.edadMin || ''}
                      onChange={e => onChange('edadMin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                      placeholder="Mínima"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Edad máxima (años)</label>
                    <input
                      type="number"
                      value={values.edadMax || ''}
                      onChange={e => onChange('edadMax', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                      placeholder="Máxima"
                    />
                  </div>
                </div>
              );
            }
            if (campo.group === 'fecha' && campo.name === 'fechaRegistroDesde') {
              return (
                <div key="fecha-group" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Registro Desde</label>
                    <input
                      type="date"
                      value={values.fechaRegistroDesde || ''}
                      onChange={e => onChange('fechaRegistroDesde', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Registro Hasta</label>
                    <input
                      type="date"
                      value={values.fechaRegistroHasta || ''}
                      onChange={e => onChange('fechaRegistroHasta', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 text-green-900"
                    />
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
      )}
    </div>
  );
};

export default AnimalFiltrosAvanzados;
