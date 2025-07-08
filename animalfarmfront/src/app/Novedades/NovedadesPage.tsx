import React from "react";
import MainLayout from "../../components/MainLayout";
import AnimalNovedades from '../../components/novedades/AnimalNovedades';
import { tipoEventoLabels } from '../../components/novedades/NovedadStatusUtils';

const gravedadOptions = [
  { value: 'baja', label: 'Baja' },
  { value: 'media', label: 'Media' },
  { value: 'alta', label: 'Alta' },
];

const tipoEventoOptions = Object.entries(tipoEventoLabels).map(([value, label]) => ({ value, label }));

// Puedes definir un animal de ejemplo o traerlo de un hook/servicio
const currentAnimal = {
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
    }
  ]
};

const NovedadesPage: React.FC = () => {
  return (
    <MainLayout activeMenu="Novedades">
      <AnimalNovedades animal={currentAnimal} gravedadOptions={gravedadOptions} tipoEventoOptions={tipoEventoOptions} />
    </MainLayout>
  );
};

export default NovedadesPage;

