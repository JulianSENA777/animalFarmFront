"use client";
import React, { useState } from "react";
import { Trash2, Save } from 'lucide-react';

export default function FormularioAgNovedad() {
  const [form, setForm] = useState({
    nombreEnfermedad: "",
    tipoEnfermedad: "",
    observaciones: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const limpiarCampos = () => {
    setForm({ nombreEnfermedad: "", tipoEnfermedad: "", observaciones: "" });
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg border border-green-100 mt-10 p-8">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Agregar Enfermedad</h2>
      <form className="space-y-5">
        <div>
          <label className="block font-medium mb-1 text-green-800 text-lg font-bold">Nombre de la enfermedad</label>
          <input
            type="text"
            name="nombreEnfermedad"
            value={form.nombreEnfermedad}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-yellow-800 font-semibold"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-green-800 text-lg font-bold">Tipo de enfermedad</label>
          <input
            type="text"
            name="tipoEnfermedad"
            value={form.tipoEnfermedad}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-yellow-800 font-semibold"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-green-800 text-lg font-bold">Observaciones</label>
          <textarea
            name="observaciones"
            value={form.observaciones}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-yellow-800 font-semibold"
            rows={3}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Guardar Enfermedad
          </button>
          <button
            type="button"
            className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center gap-2"
            onClick={limpiarCampos}
          >
            <Trash2 className="w-4 h-4" />
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}
