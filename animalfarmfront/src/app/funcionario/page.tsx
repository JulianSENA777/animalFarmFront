"use client";
import MainLayout from "../components/MainLayout";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FuncionarioPage() {
  // Placeholders de usuarios
  const usuarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      rol: "Veterinario",
      email: "juan.perez@ejemplo.com",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "María Gómez",
      rol: "Cuidador",
      email: "maria.gomez@ejemplo.com",
      estado: "Inactivo",
    },
    {
      id: 3,
      nombre: "Carlos Ruiz",
      rol: "Administrador",
      email: "carlos.ruiz@ejemplo.com",
      estado: "Activo",
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
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Rol</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Email</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-green-100">
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td className="px-4 py-2 whitespace-nowrap font-medium text-green-900">{usuario.nombre}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{usuario.rol}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{usuario.email}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${usuario.estado === 'Activo' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{usuario.estado}</span>
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
