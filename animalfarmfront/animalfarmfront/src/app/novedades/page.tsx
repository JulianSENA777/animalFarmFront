"use client";
import MainLayout from "../components/MainLayout";
import AnimalNovedades from '../components/novedades/AnimalNovedades';
import { useState } from 'react';
import { tipoEventoLabels } from '../components/novedades/NovedadStatusUtils';
import { FaFilter, FaTimes } from 'react-icons/fa';
import NovedadSearchFilters from './NovedadSearchFilters';
import AgregarElemento from '../components/agregarElemento/Agregar';
import { useRouter } from 'next/navigation';

const gravedadOptions = [
  { value: 'baja', label: 'Baja' },
  { value: 'media', label: 'Media' },
  { value: 'alta', label: 'Alta' },
];

const tipoEventoOptions = Object.entries(tipoEventoLabels).map(([value, label]) => ({ value, label }));

// Puedes definir un animal de ejemplo o traerlo de props/estado
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

export default function NovedadesPage() {
  const router = useRouter();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    tipo: '',
    gravedad: '',
    estadoNovedad: '',
    fechaInicioDesde: '',
    fechaInicioHasta: '',
    fechaFinalizacionDesde: '',
    fechaFinalizacionHasta: '',
  });

  const clearFilters = () => {
    setSearchFilters({
      tipo: '',
      gravedad: '',
      estadoNovedad: '',
      fechaInicioDesde: '',
      fechaInicioHasta: '',
      fechaFinalizacionDesde: '',
      fechaFinalizacionHasta: '',
    });
  };

  // Filtrado de novedades según los filtros seleccionados
  const filteredNovedades = currentAnimal.novedades.filter((novedad) => {
    if (searchFilters.tipo && novedad.tipo !== searchFilters.tipo) return false;
    if (searchFilters.gravedad && novedad.gravedad !== searchFilters.gravedad) return false;
    if (searchFilters.estadoNovedad && String(novedad.estadoNovedad) !== searchFilters.estadoNovedad) return false;
    if (searchFilters.fechaInicioDesde && new Date(novedad.fechaInicioNovedad) < new Date(searchFilters.fechaInicioDesde)) return false;
    if (searchFilters.fechaInicioHasta && new Date(novedad.fechaInicioNovedad) > new Date(searchFilters.fechaInicioHasta)) return false;
    if (searchFilters.fechaFinalizacionDesde && novedad.fechaFinalizacionNovedad && new Date(novedad.fechaFinalizacionNovedad) < new Date(searchFilters.fechaFinalizacionDesde)) return false;
    if (searchFilters.fechaFinalizacionHasta && novedad.fechaFinalizacionNovedad && new Date(novedad.fechaFinalizacionNovedad) > new Date(searchFilters.fechaFinalizacionHasta)) return false;
    return true;
  });


  return (
    <MainLayout activeMenu="Novedades">
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Gestión de Novedades</h2>
          </div>
          <div className="flex justify-end mt-6">
            <AgregarElemento
              label="Agregar Novedad"
              color="yellow"
              onClick={() => router.push("/novedades/Agregar-novedad")}
            />
          </div>
        </div>
        {/* Botón de filtro debajo del título */}
        <NovedadSearchFilters
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
          clearFilters={clearFilters}
          tipoEventoOptions={tipoEventoOptions}
          gravedadOptions={gravedadOptions}
          showSearchForm={showSearchForm}
          setShowSearchForm={setShowSearchForm}
        />
        <AnimalNovedades currentAnimal={{ novedades: filteredNovedades }} />
      </div>
    </MainLayout>
  );
}