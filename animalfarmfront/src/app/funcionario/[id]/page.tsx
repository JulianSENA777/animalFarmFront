'use client';

import React from 'react';
import Image from 'next/image';
import {
  User,
  Calendar,
  Phone,
  Mail,
  CreditCard,
  MapPin,
  Shield,
  Star,
  Clock,
  Briefcase,
  Award,
  Settings
} from 'lucide-react';
import AnimalNovedades from '../../components/novedades/AnimalNovedades';
import MainLayout from '../../components/MainLayout';

interface Usuario {
  usuarioId: number;
  nombreUsuario: string;
  apellidoUsuario: string;
  tipoDocumento: string;
  numeroIdentificacion: string;
  generoUsuario: string;
  fechaDeIngreso: string;
  fechaDeNacimiento: string;
  edad: number;
  numeroDeTelefono: string;
  correo: string;
  fotoDelTrabajador: string;
  estado: boolean;
  isAdmin: boolean;
  novedades: Novedad[];
}

interface Novedad {
  novedadId: number;
  titulo: string;
  tipo: string;
  gravedad: string;
  fechaInicioNovedad: string;
  estadoNovedad: boolean;
}

const usuario = {
  usuarioId: 1,
  nombreUsuario: 'Juan',
  apellidoUsuario: 'Pérez',
  tipoDocumento: 'CC',
  numeroIdentificacion: '1234567890',
  generoUsuario: 'Masculino',
  fechaDeIngreso: '2021-08-15',
  fechaDeNacimiento: '1995-05-20',
  edad: 29,
  numeroDeTelefono: '3123456789',
  correo: 'juan.perez@email.com',
  fotoDelTrabajador: '/images/juan-perez.jpg',
  estado: true,
  isAdmin: false,
  novedades: [
    {
      novedadId: 1,
      titulo: "Capacitación en bioseguridad",
      tipo: "chequeoRutinario",
      gravedad: "baja",
      fechaInicioNovedad: "2024-06-01",
      estadoNovedad: true
    },
    {
      novedadId: 2,
      titulo: "Vacunación antitetánica",
      tipo: "vacunacion",
      gravedad: "media",
      fechaInicioNovedad: "2024-05-15",
      estadoNovedad: false
    },
    {
      novedadId: 3,
      titulo: "Accidente laboral leve",
      tipo: "tratamientoMedico",
      gravedad: "alta",
      fechaInicioNovedad: "2024-04-10",
      estadoNovedad: true
    }
  ]
};

interface PerfilUsuarioProps {
  usuario: Usuario;
}

export default function Page() {
  return (
    <MainLayout activeMenu="Funcionarios">
      <PerfilUsuario usuario={usuario} />
    </MainLayout>
  );
}

function PerfilUsuario({ usuario }: { usuario: Usuario }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calcularTiempoEnEmpresa = () => {
    const años = Math.floor((new Date().getTime() - new Date(usuario.fechaDeIngreso).getTime()) / (1000 * 60 * 60 * 24 * 365));
    return años;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header con background pattern */}
        <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-t-2xl p-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={usuario.fotoDelTrabajador}
                    alt={`Foto de ${usuario.nombreUsuario}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200"><User class="w-8 h-8 text-gray-400" /></div>';
                    }}
                  />
                </div>
                {usuario.estado && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  {usuario.nombreUsuario} {usuario.apellidoUsuario}
                </h1>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    ID: {usuario.usuarioId}
                  </span>
                  {usuario.isAdmin && (
                    <span className="text-sm bg-yellow-500 px-2 py-1 rounded-full text-yellow-900 font-medium">
                      <Shield className="w-3 h-3 inline mr-1" />
                      Admin
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className={`px-4 py-2 rounded-full font-medium text-sm ${
                usuario.estado
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}>
                {usuario.estado ? '● Activo' : '● Inactivo'}
              </div>
              <p className="text-green-100 text-sm mt-2">
                {calcularTiempoEnEmpresa()} años en la empresa
              </p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-b-2xl shadow-xl">

          {/* Información detallada */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Información personal */}
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-4 bg-green-50 rounded-lg shadow-md py-2 px-2">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Información Personal</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gradient-to-r from-green-100 via-green-200 to-green-50 rounded-lg border-l-4 border-green-400 shadow">
                    <CreditCard className="w-5 h-5 text-green-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-green-800 font-semibold">Documento de identidad</p>
                      <p className="font-bold text-green-900">{usuario.tipoDocumento} {usuario.numeroIdentificacion}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-50 rounded-lg border-l-4 border-emerald-400 shadow">
                    <User className="w-5 h-5 text-emerald-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-emerald-800 font-semibold">Género</p>
                      <p className="font-bold text-emerald-900">{usuario.generoUsuario}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-50 rounded-lg border-l-4 border-teal-400 shadow">
                    <Calendar className="w-5 h-5 text-teal-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-teal-800 font-semibold">Fecha de nacimiento</p>
                      <p className="font-bold text-teal-900">{formatDate(usuario.fechaDeNacimiento)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información de contacto y laboral */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 rounded-lg shadow-md py-2 px-2">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Contacto y Trabajo</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 rounded-lg border-l-4 border-blue-400 shadow">
                    <Phone className="w-5 h-5 text-blue-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-blue-800 font-semibold">Teléfono</p>
                      <p className="font-bold text-blue-900">{usuario.numeroDeTelefono}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-50 rounded-lg border-l-4 border-yellow-400 shadow">
                    <Mail className="w-5 h-5 text-yellow-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-yellow-800 font-semibold">Correo electrónico</p>
                      <p className="font-bold text-yellow-900">{usuario.correo}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-50 rounded-lg border-l-4 border-amber-400 shadow">
                    <Briefcase className="w-5 h-5 text-amber-700 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-amber-800 font-semibold">Fecha de ingreso</p>
                      <p className="font-bold text-amber-900">{formatDate(usuario.fechaDeIngreso)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de acciones eliminada según requerimiento */}

            {/* Footer con información adicional */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <p className="font-medium">Último acceso</p>
                  <p>Hoy, 14:30</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Departamento</p>
                  <p>Gestión Ganadera</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Supervisor</p>
                  <p>María González</p>
                </div>
              </div>
            </div>
          </div>

          {/* Novedades del funcionario */}
          <div className="mt-8">
            <AnimalNovedades currentAnimal={{ novedades: usuario.novedades }} />
          </div>
        </div>
      </div>
    </div>
  );
}