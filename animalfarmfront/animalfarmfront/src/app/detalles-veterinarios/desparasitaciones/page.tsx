"use client";
import React from 'react';
import MainLayout from '../../components/MainLayout';
import { useRouter } from 'next/navigation';
import ListaDesparasitaciones from './ListaDesparasitaciones';
import AgregarElemento from '../../components/agregarElemento/Agregar';

export default function DesparasitacionesPage() {
  const router = useRouter();
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900">Gestión de Desparasitaciones</h1>
            <AgregarElemento label="Agregar Desparasitacion" color="yellow" onClick={() => router.push('./desparasitaciones/agregar-desparacitacion')} />
          </div>
        </div>
        <ListaDesparasitaciones />
      </div>
    </MainLayout>
  );
}
