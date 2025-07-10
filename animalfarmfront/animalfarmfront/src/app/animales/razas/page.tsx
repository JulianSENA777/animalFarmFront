"use client";

import React from 'react';
import MainLayout from '../../components/MainLayout';
import AgregarElemento from '../../components/agregarElemento/Agregar';
import { useRouter } from 'next/navigation';
import ListaPartesAfectadas from './ListaPartesAfectadas';

export default function PartesAfectadasPage() {
  const router = useRouter();
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900">Gestión de Partes Afectadas</h1>
            <AgregarElemento label="Agregar Parte Afectada" color="yellow" onClick={() => router.push('./razas/agregar-razas')} />
          </div>
        </div>
        <div className="flex-col items-center gap-6 w-5/6 mx-auto">
        <ListaPartesAfectadas />
        </div>
      </div>
    </MainLayout>
  );
}
