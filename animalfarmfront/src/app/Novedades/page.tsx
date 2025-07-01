// components/NovedadForm.jsx
"use client";
import { useState } from 'react';

// Supongamos que estos serían tus enums en JavaScript/TypeScript
// En una aplicación real, probablemente los tendrías en un archivo separado o generados.
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
  const [formData, setFormData] = useState({
    tipo: '',
    resumenNovedad: '',
    gravedad: '',
    fechaInicioNovedad: '',
    fechaFinalizacionNovedad: '',
    estadoNovedad: true, // Por defecto true
    fotoNovedad: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos, por ejemplo a una API
    console.log('Datos de la novedad:', formData);

    // Ejemplo de cómo enviar a una API (ajusta la URL y método)
    // try {
    //   const response = await fetch('/api/novedades', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Novedad creada con éxito!');
    //     // Resetear formulario o redirigir
    //     setFormData({
    //       tipo: '',
    //       resumenNovedad: '',
    //       gravedad: '',
    //       fechaInicioNovedad: '',
    //       fechaFinalizacionNovedad: '',
    //       estadoNovedad: true,
    //       fotoNovedad: '',
    //       comentarios: '',
    //     });
    //   } else {
    //     alert('Error al crear la novedad.');
    //   }
    // } catch (error) {
    //   console.error('Error al enviar el formulario:', error);
    //   alert('Hubo un problema al crear la novedad.');
    // }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
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
              <p className="mt-1 text-sm text-gray-500">Selecciona el tipo de evento que describe mejor esta novedad.</p>
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
              <p className="mt-1 text-sm text-gray-500">Proporciona un título conciso y descriptivo para la novedad. Máximo 100 caracteres.</p>
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

            <div>
              <label htmlFor="fechaInicioNovedad" className="block text-sm font-medium text-gray-700 mb-1">Fecha de inicio</label>
              <input
                type="date"
                id="fechaInicioNovedad"
                name="fechaInicioNovedad"
                value={formData.fechaInicioNovedad}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Selecciona la fecha en que comenzó la novedad.</p>
            </div>

            <div>
              <label htmlFor="fechaFinalizacionNovedad" className="block text-sm font-medium text-gray-700 mb-1">Fecha de finalización (opcional)</label>
              <input
                type="date"
                id="fechaFinalizacionNovedad"
                name="fechaFinalizacionNovedad"
                value={formData.fechaFinalizacionNovedad}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Si la novedad ya ha concluido, indica la fecha de finalización.</p>
            </div>
          </section>

          {/* Información Adicional */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Información adicional</h2>

            <div className="flex items-center mb-4">
              <input
                id="estadoNovedad"
                name="estadoNovedad"
                type="checkbox"
                checked={formData.estadoNovedad}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="estadoNovedad" className="ml-2 block text-sm font-medium text-gray-700">Estado de la novedad: Activa</label>
              <p className="ml-4 text-sm text-gray-500">Por defecto, una novedad recién creada está activa.</p>
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
              <p className="mt-1 text-sm text-gray-500">Utiliza este espacio para proporcionar toda la información relevante.</p>
            </div>

            <div>
              <label htmlFor="fotoNovedad" className="block text-sm font-medium text-gray-700 mb-1">Foto de la novedad (URL)</label>
              <input
                type="text" // Para simplificar, usamos un campo de texto para la URL de la imagen
                id="fotoNovedad"
                name="fotoNovedad"
                value={formData.fotoNovedad}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Ej: https://ejemplo.com/imagen.jpg"
              />
              <p className="mt-1 text-sm text-gray-500">Adjunta una imagen relevante para la novedad. Puedes subir una captura de pantalla, foto del problema, etc.</p>
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
    </div>
  );
};

export default NovedadForm;