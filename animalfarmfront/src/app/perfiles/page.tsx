"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function PerfilesPage() {
  return (
    <MainLayout activeMenu="Perfiles">
      {/* Aquí va el contenido principal de la vista Perfiles, sin contenedor adicional */}
      <div className="text-green-900 text-2xl font-bold">
        Vista de Perfiles
      </div>
      {/* Puedes agregar aquí más componentes o contenido según sea necesario */}
    </MainLayout>
  );
}
