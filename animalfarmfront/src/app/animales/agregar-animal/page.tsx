'use client';

import MainLayout from '../../components/MainLayout';
import { useState } from 'react';
import { FaPaw } from 'react-icons/fa';

export default function NewAnimalForm() {
  const [formData, setFormData] = useState({
    nombreAnimal: '',
    estadoSalud: '',
    sexo: '',
    peso: '',
    edad: '',
    fechaRegistro: '',
    fechaActualizacion: '',
    fotoAnimal: '',
    fechaNacimiento: '',
    estadoGestante: false,
    ubicacionId: '',
    razaId: '',
    observaciones: '',
    estado: true,
    categoriaAnimalId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Mock de categorías, razas y ubicaciones (simular fetch desde backend)
  const categorias = [
    { categoriaAnimalId: 1, nombreCategoria: 'Bovino' },
    { categoriaAnimalId: 2, nombreCategoria: 'Porcino' },
    { categoriaAnimalId: 3, nombreCategoria: 'Felino' },
  ];
  const razas = [
    { razaId: 1, nombreRaza: 'Brahman', categoriaAnimalId: 1 },
    { razaId: 2, nombreRaza: 'Holstein', categoriaAnimalId: 1 },
    { razaId: 3, nombreRaza: 'Yorkshire', categoriaAnimalId: 2 },
    { razaId: 4, nombreRaza: 'Persa', categoriaAnimalId: 3 },
    { razaId: 5, nombreRaza: 'Siamés', categoriaAnimalId: 3 },
  ];
  const ubicaciones = [
    { ubicacionId: 1, nombreCorral: 'Establo A', tipoUbicacion: 'Establo' },
    { ubicacionId: 2, nombreCorral: 'Establo B', tipoUbicacion: 'Establo' },
    { ubicacionId: 3, nombreCorral: 'Corral 1', tipoUbicacion: 'Corral' },
  ];
  // Enums para estadoSalud y sexo
  const estadoSaludOptions = [
    { value: 'estable', label: 'Estable' },
    { value: 'inestable', label: 'Inestable' },
    { value: 'critico', label: 'Crítico' },
    { value: 'postoperatorio', label: 'Postoperatorio' },
    { value: 'enObservacion', label: 'En Observación' },
    { value: 'hospitalizado', label: 'Hospitalizado' },
    { value: 'enCuarentena', label: 'En Cuarentena' },
  ];
  const sexoOptions = [
    { value: 'macho', label: 'Macho' },
    { value: 'hembra', label: 'Hembra' },
  ];

  return (
    <MainLayout activeMenu="Animales">
      <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg border border-gray-200 mt-10 p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaPaw className="text-green-700 text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-green-900">Registrar Nuevo Animal</h1>
        </div>
        <form className="space-y-5">
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nombre del Animal</label>
            <input type="text" name="nombreAnimal" value={formData.nombreAnimal} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"/>
          </div>
          {/* Estado de Salud */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Estado de Salud</label>
            <select name="estadoSalud" value={formData.estadoSalud} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900">
              <option value="">Seleccionar</option>
              {estadoSaludOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          {/* Sexo */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Sexo</label>
            <select name="sexo" value={formData.sexo} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900">
              <option value="">Seleccionar</option>
              {sexoOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          {/* Peso */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Peso (kg)</label>
            <input
              type="number"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              min="0"
              step="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
            />
          </div>
          {/* Edad */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Edad (meses)</label>
            <input type="number" name="edad" value={formData.edad} onChange={handleChange}
              min="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"/>
          </div>
          {/* Fecha de Nacimiento */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Fecha de Nacimiento</label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"/>
          </div>
          {/* Ubicación */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Ubicación</label>
            <select name="ubicacionId" value={formData.ubicacionId} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900">
              <option value="">Seleccionar ubicación</option>
              {ubicaciones.map(u => (
                <option key={u.ubicacionId} value={u.ubicacionId}>{u.nombreCorral} ({u.tipoUbicacion})</option>
              ))}
            </select>
          </div>
          {/* Categoría Animal */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Categoría Animal</label>
            <select
              name="categoriaAnimalId"
              value={formData.categoriaAnimalId || ''}
              onChange={e => {
                setFormData({
                  ...formData,
                  categoriaAnimalId: e.target.value,
                  razaId: '' // Limpiar raza al cambiar categoría
                });
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
            >
              <option value="">Seleccionar categoría</option>
              {categorias.map(cat => (
                <option key={cat.categoriaAnimalId} value={cat.categoriaAnimalId}>{cat.nombreCategoria}</option>
              ))}
            </select>
          </div>
          {/* Raza */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Raza</label>
            <select
              name="razaId"
              value={formData.razaId}
              onChange={handleChange}
              disabled={!formData.categoriaAnimalId}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 disabled:bg-gray-100"
            >
              <option value="">{formData.categoriaAnimalId ? 'Seleccionar raza' : 'Seleccione una categoría primero'}</option>
              {razas.filter(r => String(r.categoriaAnimalId) === String(formData.categoriaAnimalId)).map(r => (
                <option key={r.razaId} value={r.razaId}>{r.nombreRaza}</option>
              ))}
            </select>
          </div>
          {/* Estado Gestante */}
          <div className="flex items-center gap-2">
            <input type="checkbox" name="estadoGestante" checked={formData.estadoGestante} onChange={handleChange}
              className="form-checkbox h-5 w-5 text-green-700 border-gray-300 focus:ring-green-500"/>
            <label className="text-gray-700 font-medium">¿Está gestante?</label>
          </div>
          {/* Botón para agregar imagen */}
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
          {/* Observaciones */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Observaciones</label>
            <textarea name="observaciones" value={formData.observaciones} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 h-28"></textarea>
          </div>
          {/* Botón */}
          <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg transition shadow-md">
            Guardar Animal
          </button>
        </form>
      </div>
    </MainLayout>
  );
}