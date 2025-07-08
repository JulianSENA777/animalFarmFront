"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function LugaresPage() {
  return (
    <MainLayout activeMenu="Lugares">
      {/* Aquí va el contenido principal de la vista Lugares, sin contenedor adicional */}
      <div className="text-green-900 text-2xl font-bold">
        Vista de Lugares
      </div>
      {/* Puedes agregar aquí más componentes o contenido según sea necesario */}
    </MainLayout>
  );
}

