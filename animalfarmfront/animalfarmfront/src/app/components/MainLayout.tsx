"use client";
import { FaBell, FaUsers, FaPaw, FaNotesMedical, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  activeMenu?: string;
}

const menuItems = [
  { id: 1, name: "Funcionarios", icon: FaUsers, route: "/funcionario" },
  { id: 2, name: "Novedades", icon: FaBell, route: "/novedades" },
  { id: 3, name: "Animales", icon: FaPaw, route: "/animales" },
  { id: 4, name: "Detalles Veterinarios", icon: FaStethoscope, route: "/detalles-veterinarios" },
  { id: 5, name: "Lugares", icon: FaMapMarkerAlt, route: "/lugares" },
  { id: 6, name: "Historias Clínicas", icon: FaNotesMedical, route: "/historia-clinica" },
];

const animalSubMenu = [
  { id: 'buscar', name: 'Buscar Animal', route: '/animales/buscaranimal' },
  { id: 'agregar', name: 'Agregar Animal', route: '/animales/agregar-animal' },
  { id: 'actualizar', name: 'Actualizar Animal', route: '/animales/actualizar-Animal' },
  { id: 'categoria-animal', name: 'Categoria animal', route: '/animales/categoria-animal' },
  { id: 'razas', name: 'Actualizar Animal', route: '/animales/razas' },
];

const DetallesVSubMenu = [
  { id: 'desparasitacion', name: 'desparasitaciones', route: '/detalles-veterinarios/desparasitaciones' },
  { id: 'enfermedad', name: 'enfermedades', route: '/detalles-veterinarios/enfermedades' },
  { id: 'parteAfectada', name: 'partes afectadas', route: '/detalles-veterinarios/partes-afectadas' },
  { id: 'vacuna', name: 'vacunas', route: '/detalles-veterinarios/vacunas' },
];

export default function MainLayout({ children, activeMenu }: MainLayoutProps) {
  const [animalMenuOpen, setAnimalMenuOpen] = useState(false);
  const [detallesVMenuOpen, setDetallesVMenuOpen] = useState(false);
  const animalMenuRef = useRef<HTMLDivElement>(null);
  const detallesVMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (animalMenuRef.current && !animalMenuRef.current.contains(event.target as Node)) {
        setAnimalMenuOpen(false);
      }
      if (detallesVMenuRef.current && !detallesVMenuRef.current.contains(event.target as Node)) {
        setDetallesVMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Barra Superior */}
      <header className="bg-green-900 shadow-sm border-b border-green-800 fixed w-full top-0 z-30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/IMG/Logo.webp"
              alt="Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
              style={{ maxWidth: 48 }}
            />
            <h1 className="text-xl font-semibold text-yellow-100">Happy Meat Farms</h1>
          </div>
          <button className="flex items-center p-2 rounded-full hover:bg-green-800 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Usuario"
              className="w-10 h-10 rounded-full border-2 border-yellow-400"
            />
          </button>
        </div>
      </header>

      {/* Menú Lateral */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-700 shadow-lg pt-20">
        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeMenu;
            if (item.name === 'Animales') {
              return (
                <div key={item.id} ref={animalMenuRef}>
                  <div
                    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                      isActive || animalMenuOpen
                        ? 'bg-green-600 text-yellow-100'
                        : 'text-yellow-100 hover:bg-green-600'
                    }`}
                    onClick={() => setAnimalMenuOpen((open) => !open)}
                  >
                    <Icon size={20} className="mr-3 text-yellow-400" />
                    <span className="font-medium">{item.name}</span>
                    <svg className={`ml-auto w-4 h-4 transition-transform ${animalMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                  {animalMenuOpen && (
                    <div className="ml-7 mt-1 space-y-1 bg-green-800 rounded shadow-lg py-2">
                      {animalSubMenu.map((sub) => (
                        <div
                          key={sub.id}
                          className="px-3 py-2 rounded cursor-pointer text-yellow-100 hover:bg-green-600 transition-colors"
                          onClick={() => { window.location.href = sub.route; setAnimalMenuOpen(false); }}
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (item.name === 'Detalles Veterinarios') {
              return (
                <div key={item.id} ref={detallesVMenuRef}>
                  <div
                    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                      isActive || detallesVMenuOpen
                        ? 'bg-green-600 text-yellow-100'
                        : 'text-yellow-100 hover:bg-green-600'
                    }`}
                    onClick={() => setDetallesVMenuOpen((open) => !open)}
                  >
                    <Icon size={20} className="mr-3 text-yellow-400" />
                    <span className="font-medium">{item.name}</span>
                    <svg className={`ml-auto w-4 h-4 transition-transform ${detallesVMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                  {detallesVMenuOpen && (
                    <div className="ml-7 mt-1 space-y-1 bg-green-800 rounded shadow-lg py-2">
                      {DetallesVSubMenu.map((sub) => (
                        <div
                          key={sub.id}
                          className="px-3 py-2 rounded cursor-pointer text-yellow-100 hover:bg-green-600 transition-colors"
                          onClick={() => { window.location.href = sub.route; setDetallesVMenuOpen(false); }}
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            const handleClick = () => {
              window.location.href = item.route;
            };
            return (
              <div
                key={item.id}
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isActive
                    ? 'bg-green-600 text-yellow-100'
                    : 'text-yellow-100 hover:bg-green-600'
                }`}
                onClick={handleClick}
              >
                <Icon size={20} className="mr-3 text-yellow-400" />
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="ml-64 pt-20 p-6">
        {children}
      </main>
    </div>
  );
}
