"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HistoriaPage() {
  return (
    <MainLayout activeMenu="HistoriaPage">
      {/* Aquí va el contenido principal de la vista Lugares, sin contenedor adicional */}
      <div className="text-green-900 text-2xl font-bold">
        Vista de HistoriaPage
      </div>
      {/* Puedes agregar aquí más componentes o contenido según sea necesario */}
    </MainLayout>
  );
}

