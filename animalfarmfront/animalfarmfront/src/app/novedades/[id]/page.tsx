"use client";

import React, { useState } from 'react';
import { Calendar, User, MapPin, Heart, Shield, FileText, Camera, Clock, AlertTriangle, Eye, EyeOff } from 'lucide-react';

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
    comentarios: 'Se ha detectado un brote de fiebre aftosa en el sector norte de la granja. Se implementaron medidas de cuarentena inmediata y se notificó a las autoridades sanitarias correspondientes. El tratamiento veterinario ha comenzado y se espera una recuperación gradual en las próximas semanas.',
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

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Novedad #{novedad.novedadId}
          </h1>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTipoColor(novedad.tipo)}`}>
              {novedad.tipo}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getGravedadColor(novedad.gravedad)}`}>
              {novedad.gravedad}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${novedad.estadoNovedad ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {novedad.estadoNovedad ? 'Activo' : 'Inactivo'}
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-4">{novedad.nombreNovedad}</p>

        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Última actualización: {formatDateTime(novedad.ultimaActualizacionNovedad)}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>Por: {novedad.usuario.nombre}</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">

          {/* Información General */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-gray-600" />
              Información General
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fechas */}
              <div>
                <h4 className="text-md font-medium mb-3 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-600" />
                  Fechas Importantes
                </h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Fecha de Inicio</p>
                    <p className="text-gray-900">{formatDate(novedad.fechaInicioNovedad)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Fecha de Finalización</p>
                    <p className="text-gray-900">{formatDate(novedad.fechaFinalizacionNovedad)}</p>
                  </div>
                </div>
              </div>

              {/* Estado de Salud */}
              <div>
                <h4 className="text-md font-medium mb-3 flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-gray-600" />
                  Estado de Salud
                </h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEstadoSaludColor(novedad.estadoSaludDestino)}`}>
                  {novedad.estadoSaludDestino?.replace('_', ' ')}
                </span>
              </div>

              {/* Historia Clínica */}
              <div>
                <h4 className="text-md font-medium mb-3">Historia Clínica</h4>
                <p className="text-gray-900 font-medium">{novedad.historiaClinica.numeroHistoria}</p>
              </div>

              {/* Enfermedades */}
              {novedad.enfermedades.length > 0 && (
                <div>
                  <h4 className="text-md font-medium mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-red-600" />
                    Enfermedades
                  </h4>
                  <div className="space-y-2">
                    {novedad.enfermedades.map((enfermedad) => (
                      <div key={enfermedad.enfermedadId} className="bg-red-50 p-2 rounded-lg border border-red-200">
                        <p className="text-red-900 font-medium text-sm">{enfermedad.nombre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Resumen de la Novedad */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Resumen de la Novedad</h3>
            <p className="text-gray-700 leading-relaxed">{novedad.resumenNovedad}</p>
          </div>

          {/* Animales Afectados */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-gray-600" />
              Animales Afectados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {novedad.animales.map((animal) => (
                <div key={animal.animalId} className="bg-white p-3 rounded-lg border">
                  <p className="font-medium text-gray-900">{animal.nombre}</p>
                  <p className="text-sm text-gray-600">{animal.especie}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Botón para mostrar imagen */}
          <div className="flex justify-start">
            <button
              onClick={() => setMostrarImagen(!mostrarImagen)}
              className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {mostrarImagen ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {mostrarImagen ? 'Ocultar imagen' : 'Mostrar imagen de la novedad'}
            </button>
          </div>

          {/* Foto */}
          {mostrarImagen && novedad.fotoNovedad && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Camera className="h-5 w-5 mr-2 text-gray-600" />
                Documentación Fotográfica
              </h3>
              <img
                src={novedad.fotoNovedad}
                alt="Foto de la novedad"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Comentarios */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-gray-600" />
              Comentarios y Observaciones
            </h3>
            <p className="text-gray-700 leading-relaxed">{novedad.comentarios}</p>
          </div>

        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">

          {/* Ubicaciones */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-gray-600" />
              Ubicaciones Involucradas
            </h3>
            <div className="space-y-2">
              {novedad.ubicaciones.map((ubicacion) => (
                <div key={ubicacion.ubicacionId} className="bg-white p-3 rounded-lg border">
                  <p className="text-gray-900">{ubicacion.nombre}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partes Afectadas */}
          {novedad.partesAfectadas.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Partes Afectadas</h3>
              <div className="space-y-2">
                {novedad.partesAfectadas.map((parte) => (
                  <div key={parte.parteAfectadaId} className="bg-white p-2 rounded border">
                    <p className="text-gray-900">{parte.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tratamientos */}
          {(novedad.vacunas.length > 0 || novedad.desparasitaciones.length > 0) && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Tratamientos</h3>

              {novedad.vacunas.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">Vacunas</p>
                  {novedad.vacunas.map((vacuna) => (
                    <div key={vacuna.vacunaId} className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-2">
                      <p className="text-blue-900 font-medium">{vacuna.nombre}</p>
                      <p className="text-sm text-blue-700">Lote: {vacuna.lote}</p>
                    </div>
                  ))}
                </div>
              )}

              {novedad.desparasitaciones.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Desparasitaciones</p>
                  {novedad.desparasitaciones.map((desparasitacion) => (
                    <div key={desparasitacion.desparasitacionId} className="bg-purple-50 p-3 rounded-lg border border-purple-200 mb-2">
                      <p className="text-purple-900 font-medium">{desparasitacion.nombre}</p>
                      <p className="text-sm text-purple-700">Dosis: {desparasitacion.dosis}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default NovedadDetailView;