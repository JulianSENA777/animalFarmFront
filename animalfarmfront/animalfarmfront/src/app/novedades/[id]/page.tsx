"use client";

import React, { useState } from 'react';
import { Calendar, User, MapPin, Shield, FileText, Camera, Clock, AlertTriangle, Eye, EyeOff, Info } from 'lucide-react';
import { faCow } from 'lucide-react/fa';
import MainLayout from "@/app/components/MainLayout";
import { getTipoEventoColor, tipoEventoLabels } from "@/app/components/novedades/NovedadStatusUtils";

const NovedadDetailView = () => {
  const [mostrarImagen, setMostrarImagen] = useState(false);
  // Mock data basado en la entidad Novedad
  const novedad = {
    novedadId: 1,
    tipo: 'ENFERMEDAD',
    nombreNovedad: 'Brote de fiebre aftosa en sector norte',
    resumenNovedad: 'Se ha identificado un brote de fiebre aftosa que afecta principalmente al ganado bovino del sector norte. La situación requiere atención inmediata y medidas de contención.',
    gravedad: 'ALTA',
    fechaInicioNovedad: '2024-01-15',
    fechaFinalizacionNovedad: '2024-01-25',
    estadoNovedad: true,
    ultimaActualizacionNovedad: '2024-01-20T14:30:00',
    fotoNovedad: 'https://via.placeholder.com/400x300/4f46e5/ffffff?text=Foto+Novedad',
    comentarios: [
      {
        id: 1,
        fecha: '2024-01-15T08:00:00',
        autor: 'Dr. Carlos Mendoza',
        contenido: 'Se ha detectado un brote de fiebre aftosa en el sector norte de la granja. Se implementaron medidas de cuarentena inmediata y se notificó a las autoridades sanitarias correspondientes.'
      },
      {
        id: 2,
        fecha: '2024-01-16T14:30:00',
        autor: 'Dra. Ana Rodríguez',
        contenido: 'El tratamiento veterinario ha comenzado con la aplicación de medicamentos antivirales. Se observa una ligera mejora en algunos animales.'
      },
      {
        id: 3,
        fecha: '2024-01-18T10:15:00',
        autor: 'Dr. Carlos Mendoza',
        contenido: 'Se realizó una segunda evaluación. Los animales están respondiendo bien al tratamiento. Se espera una recuperación gradual en las próximas semanas.'
      },
      {
        id: 4,
        fecha: '2024-01-20T16:45:00',
        autor: 'Veterinario Juan Pérez',
        contenido: 'Control de seguimiento realizado. Se ha reducido la propagación del virus. Continuamos con el protocolo de tratamiento establecido.'
      }
    ],
    usuario: {
      usuarioId: 1,
      nombre: 'Dr. Carlos Mendoza',
      email: 'carlos.mendoza@granja.com'
    },
    historiaClinica: {
      historiaClinicaId: 1,
      numeroHistoria: 'HC-2024-001'
    },
    partesAfectadas: [
      { parteAfectadaId: 1, nombre: 'Patas delanteras' },
      { parteAfectadaId: 2, nombre: 'Boca' }
    ],
    desparasitaciones: [
      { desparasitacionId: 1, nombre: 'Ivermectina', dosis: '1ml/10kg' }
    ],
    vacunas: [
      { vacunaId: 1, nombre: 'Vacuna Fiebre Aftosa', lote: 'VA-2024-001' }
    ],
    animales: [
      { animalId: 1, nombre: 'Vaca Esperanza', especie: 'Bovina' },
      { animalId: 2, nombre: 'Toro Campeón', especie: 'Bovina' }
    ],
    ubicaciones: [
      { ubicacionId: 1, nombre: 'Sector Norte - Paddock 1' },
      { ubicacionId: 2, nombre: 'Sector Norte - Paddock 2' }
    ],
    estadoSaludDestino: 'EN_TRATAMIENTO',
    enfermedades: [
      { enfermedadId: 1, nombre: 'Fiebre Aftosa' }
    ]
  };

  const getGravedadColor = (gravedad) => {
    switch(gravedad) {
      case 'BAJA': return 'bg-green-100 text-green-800 border-green-300';
      case 'MEDIA': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'ALTA': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTipoColor = (tipo) => {
    switch(tipo) {
      case 'ENFERMEDAD': return 'bg-red-100 text-red-800';
      case 'VACUNACION': return 'bg-blue-100 text-blue-800';
      case 'DESPARASITACION': return 'bg-purple-100 text-purple-800';
      case 'REVISION': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoSaludColor = (estado) => {
    switch(estado) {
      case 'SANO': return 'bg-green-100 text-green-800';
      case 'EN_TRATAMIENTO': return 'bg-yellow-100 text-yellow-800';
      case 'ENFERMO': return 'bg-red-100 text-red-800';
      case 'CRITICO': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Adaptar el tipo para usar el label y color de NovedadStatusUtils
  const tipoNovedadKey = novedad.tipo.toLowerCase();
  const tipoNovedadLabel = tipoEventoLabels[tipoNovedadKey] || novedad.tipo;
  const tipoNovedadColor = getTipoEventoColor(tipoNovedadKey);

  return (
    <MainLayout activeMenu="Novedades">
      <div className="max-w-6xl mx-auto p-6 bg-yellow-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-green-900 drop-shadow-sm">
              {novedad.historiaClinica.numeroHistoria}
            </h1>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-bold border shadow-sm ${novedad.estadoNovedad ? 'bg-green-100 text-green-800 border-green-300' : 'bg-gray-100 text-gray-800 border-gray-300'}`}>
                {novedad.estadoNovedad ? 'Activo' : 'Inactivo'}
              </span>
            </div>
          </div>
          <p className="text-xl text-green-800 font-semibold mb-4 drop-shadow-sm">{novedad.nombreNovedad}</p>
          <div className="flex items-center space-x-6 text-sm text-green-900 font-medium">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Última actualización: {formatDateTime(novedad.ultimaActualizacionNovedad)}</span>
            </div>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información General */}
            <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
              <h3 className="text-lg font-bold mb-4 flex items-center text-green-900">
                <FileText className="h-5 w-5 mr-2 text-green-700" />
                Información General
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tipo de Novedad */}
                <div>
                  <h4 className="text-md font-bold mb-3 flex items-center text-green-800">
                    <Info className="h-4 w-4 mr-2 text-green-700" />
                    Tipo de Novedad
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border shadow-sm ${tipoNovedadColor}`}>{tipoNovedadLabel}</span>
                </div>
                {/* Fechas */}
                <div>
                  <h4 className="text-md font-bold mb-3 flex items-center text-green-800">
                    <Calendar className="h-4 w-4 mr-2 text-green-700" />
                    Fechas Importantes
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-bold text-green-700">Fecha de Inicio</p>
                      <p className="text-green-900 font-semibold">{formatDate(novedad.fechaInicioNovedad)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-700">Fecha de Finalización</p>
                      <p className="text-green-900 font-semibold">{formatDate(novedad.fechaFinalizacionNovedad)}</p>
                    </div>
                  </div>
                </div>
                {/* Usuario */}
                <div>
                  <h4 className="text-md font-bold mb-3 flex items-center text-green-800">
                    <User className="h-4 w-4 mr-2 text-green-700" />
                    Usuario Responsable
                  </h4>
                  <div>
                    <p className="text-green-900 font-bold">{novedad.usuario.nombre}</p>
                    <p className="text-sm text-green-700 font-semibold">{novedad.usuario.email}</p>
                  </div>
                </div>
                {/* Enfermedades */}
                {novedad.enfermedades.length > 0 && (
                  <div>
                    <h4 className="text-md font-bold mb-3 flex items-center text-red-800">
                      <AlertTriangle className="h-4 w-4 mr-2 text-red-700" />
                      Enfermedades
                    </h4>
                    <div className="space-y-2">
                      {novedad.enfermedades.map((enfermedad) => (
                        <div key={enfermedad.enfermedadId} className="bg-red-50 p-2 rounded-lg border border-red-200">
                          <p className="text-red-900 font-bold text-sm">{enfermedad.nombre}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Gravedad */}
                <div>
                  <h4 className="text-md font-bold mb-3 flex items-center text-green-800">
                    <Shield className="h-4 w-4 mr-2 text-green-700" />
                    Nivel de Gravedad
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border shadow-sm ${getGravedadColor(novedad.gravedad)}`}>{novedad.gravedad}</span>
                </div>
                {/* Estado de Salud */}
                <div>
                  <h4 className="text-md font-bold mb-3 flex items-center text-green-800">
                    <Shield className="h-4 w-4 mr-2 text-green-700" />
                    Estado de Salud
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border shadow-sm ${getEstadoSaludColor(novedad.estadoSaludDestino)}`}>{novedad.estadoSaludDestino?.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
            {/* Resumen de la Novedad */}
            <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
              <h3 className="text-lg font-bold mb-3 text-green-900">Resumen de la Novedad</h3>
              <p className="text-green-800 leading-relaxed font-semibold">{novedad.resumenNovedad}</p>
            </div>
            {/* Animales Afectados */}
            <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
              <h3 className="text-lg font-bold mb-3 flex items-center text-green-900">
                <span className="mr-2">🐄</span>
                Animales Afectados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {novedad.animales.map((animal) => (
                  <div key={animal.animalId} className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="font-bold text-green-900">{animal.nombre}</p>
                    <p className="text-sm text-green-700 font-semibold">{animal.especie}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Botón para mostrar imagen */}
            <div className="flex justify-start">
              <button
                onClick={() => setMostrarImagen(!mostrarImagen)}
                className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow"
              >
                {mostrarImagen ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {mostrarImagen ? 'Ocultar imagen' : 'Mostrar imagen de la novedad'}
              </button>
            </div>
            {/* Foto */}
            {mostrarImagen && novedad.fotoNovedad && (
              <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
                <h3 className="text-lg font-bold mb-3 flex items-center text-green-900">
                  <Camera className="h-5 w-5 mr-2 text-green-700" />
                  Documentación Fotográfica
                </h3>
                <img
                  src={novedad.fotoNovedad}
                  alt="Foto de la novedad"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md border border-green-200"
                />
              </div>
            )}
            {/* Comentarios */}
            <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
              <h3 className="text-lg font-bold mb-3 flex items-center text-green-900">
                <FileText className="h-5 w-5 mr-2 text-green-700" />
                Comentarios y Observaciones
              </h3>
              <div className="space-y-3">
                {novedad.comentarios.map((comentario) => (
                  <div key={comentario.id} className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-green-900">{comentario.autor}</p>
                      <p className="text-xs text-green-700 font-semibold">{formatDateTime(comentario.fecha)}</p>
                    </div>
                    <p className="text-green-800 leading-relaxed font-semibold">{comentario.contenido}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Ubicaciones */}
            <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
              <h3 className="text-lg font-bold mb-3 flex items-center text-green-900">
                <MapPin className="h-5 w-5 mr-2 text-green-700" />
                Ubicaciones Involucradas
              </h3>
              <div className="space-y-2">
                {novedad.ubicaciones.map((ubicacion) => (
                  <div key={ubicacion.ubicacionId} className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-green-900 font-bold">{ubicacion.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Partes Afectadas */}
            {novedad.partesAfectadas.length > 0 && (
              <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
                <h3 className="text-lg font-bold mb-3 text-green-900">Partes Afectadas</h3>
                <div className="space-y-2">
                  {novedad.partesAfectadas.map((parte) => (
                    <div key={parte.parteAfectadaId} className="bg-green-50 p-2 rounded border border-green-200">
                      <p className="text-green-900 font-bold">{parte.nombre}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Tratamientos */}
            {(novedad.vacunas.length > 0 || novedad.desparasitaciones.length > 0) && (
              <div className="bg-white rounded-lg p-4 shadow border border-yellow-200">
                <h3 className="text-lg font-bold mb-3 text-green-900">Tratamientos</h3>
                {novedad.vacunas.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-bold text-green-700 mb-2">Vacunas</p>
                    {novedad.vacunas.map((vacuna) => (
                      <div key={vacuna.vacunaId} className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-2">
                        <p className="text-blue-900 font-bold">{vacuna.nombre}</p>
                        <p className="text-sm text-blue-700 font-semibold">Lote: {vacuna.lote}</p>
                      </div>
                    ))}
                  </div>
                )}
                {novedad.desparasitaciones.length > 0 && (
                  <div>
                    <p className="text-sm font-bold text-purple-700 mb-2">Desparasitaciones</p>
                    {novedad.desparasitaciones.map((desparasitacion) => (
                      <div key={desparasitacion.desparasitacionId} className="bg-purple-50 p-3 rounded-lg border border-purple-200 mb-2">
                        <p className="text-purple-900 font-bold">{desparasitacion.nombre}</p>
                        <p className="text-sm text-purple-700 font-semibold">Dosis: {desparasitacion.dosis}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NovedadDetailView;