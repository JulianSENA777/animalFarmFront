"use client";
import React from 'react';
import ListaEnfermedades from './ListaEnfermedades';
import MainLayout from '../../components/MainLayout';
import { useRouter } from 'next/navigation';
import AgregarElemento from '../../components/agregarElemento/Agregar';

const EnfermedadesVista = () => {
  const router = useRouter();
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900">Gestión de Enfermedades</h1>
            <AgregarElemento label="Agregar Enfermedad" color="yellow" onClick={() => router.push('./enfermedades/agregar-enfermedad')} />
          </div>
        </div>
        <ListaEnfermedades />
      </div>
    </MainLayout>
  );
};

export default EnfermedadesVista;
