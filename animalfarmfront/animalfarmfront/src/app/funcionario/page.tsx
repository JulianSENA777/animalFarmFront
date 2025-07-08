"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FuncionarioPage() {
  // Placeholders de usuarios
  const usuarios = [
    {
      id: 1,
      nombreUsuario: "Juan",
      apellidoUsuario: "Pérez",
      fechaIngreso: "2023-01-15",
      numeroTelefono: "3195241234",
      usuaarioEdad: "25",
      novedadesActivas: "10",

    },
    {
      id: 2,
      nombreUsuario: "María",
      apellidoUsuario: "Gómez",
      numeroTelefono: "3195456789",
      fechaIngreso: "2023-01-15",
      edad: "30",
      novedadesActivas: "10",
    },
    {
      id: 3,
      nombreUsuario: "Carlos",
      apellidoUsuario: "Martínez",
      numeroTelefono: "3201234567",
      fechaIngreso: "2023-01-15",
      edad: "40",
      novedadesActivas: "15",
    },
  ];

  return (
    <MainLayout activeMenu="Funcionarios">
      {/* Contenido principal: lista de usuarios */}
      <div className="bg-white rounded-lg shadow-lg border border-green-100 p-6 mt-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Lista de Funcionarios</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-green-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Nombre</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Apellido</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Numero de Telefono</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Novedades activas</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-green-100">
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td className="px-4 py-2 whitespace-nowrap font-medium text-green-900">{usuario.nombreUsuario}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{usuario.apellidoUsuario}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{usuario.numeroTelefono}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{usuario.novedadesActivas}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors duration-200 text-xs font-semibold">
                      Visualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
