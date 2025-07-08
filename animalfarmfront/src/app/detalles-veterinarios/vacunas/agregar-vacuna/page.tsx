"use client";
import MainLayout from "../../../components/MainLayout";
import FormularioAgVacuna from "./Formulario-AgVacuna";


export default function AgregarVacunaPage() {
  return (
    <MainLayout activeMenu="Detalles Veterinarios">
      <FormularioAgVacuna />
    </MainLayout>
  );
}
