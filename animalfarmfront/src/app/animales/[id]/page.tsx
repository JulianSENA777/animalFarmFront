"use client";

import React, { useState } from 'react';
import { MapPin, Calendar, Weight, Info, Camera, User, Heart, Eye } from 'lucide-react';
import { GiDog, GiCat, GiCow, GiWeight, GiBarn, GiInfo, GiCalendar, GiFemale, GiMale } from 'react-icons/gi';
import MainLayout from '../../components/MainLayout';
import { getHealthStatusColor, getHealthStatusText } from '../healthStatusUtils';
import { getTipoEventoColor, tipoEventoLabels } from '../../components/novedades/NovedadsUtils';
import { getGravedadColor, getGravedadIcon } from '../../components/novedades/NovedadKindStatus';
import AnimalProfileGeneral from './AnimalProfileGeneral';
import AnimalNovedades from '../../components/novedades/AnimalNovedades';

const AnimalProfile = () => {
  // Datos de ejemplo
  const [currentAnimal] = useState({
    animalId: 1,
    codigoAnimal: "VAHO-01",
    nombreAnimal: "Luna",
    tipo: "Vaca", // <--- agregado tipo de animal
    sexo: "hembra",
    edad: 3,
    peso: 45.50,
    estadoSalud: "estable",
    fechaNacimiento: "2021-03-15",
    fechaRegistro: "2021-03-20",
    fechaActualizacion: "2024-12-15T10:30:00",
    estadoGestante: true,
    fotoAnimal: "/api/placeholder/300/300",
    ubicacion: { nombre: "Corral A-1", descripcion: "Zona Norte" },
    raza: { nombre: "Holstein" },
    observaciones: "Animal muy dócil, excelente producción lechera. Requiere atención especial en temporada de lluvia. Ha mostrado un comportamiento ejemplar durante los últimos controles veterinarios.",
    estado: true,
    novedades: [
      {
        novedadId: 1,
        titulo: "Chequeo veterinario",
        tipo: "chequeoRutinario",
        gravedad: "baja",
        fechaInicioNovedad: "2024-06-01",
        estadoNovedad: true
      },
      {
        novedadId: 2,
        titulo: "Vacunación anual",
        tipo: "vacunacion",
        gravedad: "media",
        fechaInicioNovedad: "2024-05-15",
        estadoNovedad: false
      },
      {
        novedadId: 3,
        titulo: "Tratamiento médico",
        tipo: "tratamientoMedico",
        gravedad: "alta",
        fechaInicioNovedad: "2024-04-10",
        estadoNovedad: true
      }
    ]
  });

  const tipoAnimalOptions = [
    { value: 'vaca', label: 'Vaca' },
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
    // Puedes agregar más tipos según tu dominio
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handler para ver novedad (placeholder)
  const handleVerNovedad = (novedadId: number) => {
    alert(`Ver novedad con ID: ${novedadId}`);
  };

  return (
    <MainLayout activeMenu="Animales">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 mt-4">
        <AnimalProfileGeneral currentAnimal={currentAnimal} />
        <AnimalNovedades currentAnimal={currentAnimal} />
      </div>
    </MainLayout>
  );
};

export default AnimalProfile;

