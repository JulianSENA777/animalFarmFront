"use client";

import MainLayout from "../../../components/MainLayout";
import FormularioAgDesparasitacion from "./Formulario-AgDesparasitacion";

export default function AgregarDesparasitacionPage() {
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <FormularioAgDesparasitacion />
    </MainLayout>
  );
}
