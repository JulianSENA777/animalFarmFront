"use client";

import MainLayout from '../../../components/MainLayout';
import FormularioAgNovedad from './Formulario-AgNovedad';

export default function AgregarEnfermedadPage() {
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <FormularioAgNovedad />
    </MainLayout>
  );
}
