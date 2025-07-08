"use client";
import MainLayout from "../../../components/MainLayout";
import FormularioAgParte from "./Formulario-AgParte";

export default function AgregarParteAfectadaPage() {
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <FormularioAgParte />
    </MainLayout>
  );
}
