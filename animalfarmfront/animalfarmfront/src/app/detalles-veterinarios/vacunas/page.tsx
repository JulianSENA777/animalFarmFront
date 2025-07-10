"use client";

import React from 'react';
import MainLayout from '../../components/MainLayout';
import AgregarElemento from '../../components/agregarElemento/Agregar';
import { useRouter } from 'next/navigation';
import ListaVacunas from './ListaVacunas';

export default function VacunasPage() {
  const router = useRouter();
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900">Gestión de Vacunas</h1>
            <AgregarElemento label="Agregar Vacuna" color="yellow" onClick={() => router.push('./vacunas/agregar-vacuna')} />
          </div>
        </div>
         <div className="flex-col items-center gap-6 w-5/6 mx-auto">
        < ListaVacunas />
        </div>
      </div>
    </MainLayout>
  );
}
