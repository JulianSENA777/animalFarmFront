"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../../components/MainLayout';

const tipoEvento = [
  "Chequeo Rutinario", "Vacunación", "Tratamiento Médico", "Cirugía",
  "Revisión Postoperatoria", "Observación", "Aislamiento", "Cambio de Dieta",
  "Enfermedad", "Infección", "Lesión", "Parasitación", "Por Diagnosticar",
  "Evaluación Etológica", "Nacimiento", "Fallecimiento", "Ingreso",
  "Traslado", "Reubicación Definitiva", "De Alta", "Recuperación"
];

const gravedadNovedad = [
  "Baja", "Media", "Alta"
];

const NovedadForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tipo: '',
    resumenNovedad: '',
    gravedad: '',
    estadoNovedad: true,
    fotoNovedad: '',
    comentarios: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    router.push('/Novedades');
  };

  return (
    <MainLayout activeMenu="Novedades">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Crear Novedad</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Detalles Principales */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Detalles principales</h2>

            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">Tipo de evento</label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm bg-white"
              >
                <option value="">Selecciona un tipo</option>
                {tipoEvento.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
             </div>

            <div>
              <label htmlFor="resumenNovedad" className="block text-sm font-medium text-gray-700 mb-1">Resumen de la novedad</label>
              <input
                type="text"
                id="resumenNovedad"
                name="resumenNovedad"
                value={formData.resumenNovedad}
                onChange={handleChange}
                maxLength="100"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Título conciso y descriptivo"
              />
              </div>

            <div>
              <label htmlFor="gravedad" className="block text-sm font-medium text-gray-700 mb-1">Gravedad</label>
              <select
                id="gravedad"
                name="gravedad"
                value={formData.gravedad}
                onChange={handleChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm bg-white"
              >
                <option value="">Selecciona la gravedad</option>
                {gravedadNovedad.map((gravedad) => (
                  <option key={gravedad} value={gravedad}>{gravedad}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">Indica la urgencia e impacto de esta novedad.</p>
            </div>

           </section>

          {/* Información Adicional */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Información adicional</h2>
            <div>
            <label className="block text-gray-700 font-medium mb-1">Imagen del Animal</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData({ ...formData, fotoAnimal: reader.result as string });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
            {formData.fotoAnimal && (
              <img src={formData.fotoAnimal} alt="Vista previa" className="mt-2 h-32 object-contain rounded border border-gray-200" />
            )}
          </div>
            <div>
              <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-1">Comentarios</label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Añade cualquier información detallada, contexto o pasos adicionales..."
              ></textarea>
            </div>
          </section>

          {/* Acciones */}
          <div className="pt-6 border-t border-gray-200 flex justify-end space-x-3">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NovedadForm;