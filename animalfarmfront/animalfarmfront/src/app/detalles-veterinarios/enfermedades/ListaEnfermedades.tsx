"use client";

import React, { useState, useEffect } from 'react';
import { Eye, AlertCircle } from 'lucide-react';
import TarjetaDetalle from '../../components/detalles-veterinarios/objetos';

const enfermedadesEjemplo = [
	{
		enfermedadId: 1,
		nombreEnfermedad: 'Hipertensión Arterial',
		tipoEnfermedad: 'Cardiovascular',
		observaciones:
			'Presión arterial elevada de forma persistente. Requiere control médico regular y medicación antihipertensiva.',
	},
	{
		enfermedadId: 2,
		nombreEnfermedad: 'Diabetes Mellitus Tipo 2',
		tipoEnfermedad: 'Metabólica',
		observaciones:
			'Enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar en sangre.',
	},
	{
		enfermedadId: 3,
		nombreEnfermedad: 'Asma Bronquial',
		tipoEnfermedad: 'Respiratoria',
		observaciones:
			'Enfermedad inflamatoria crónica de las vías respiratorias que causa episodios recurrentes de sibilancias.',
	},
	{
		enfermedadId: 4,
		nombreEnfermedad: 'Gastritis Crónica',
		tipoEnfermedad: 'Digestiva',
		observaciones:
			'Inflamación del revestimiento del estómago que puede causar dolor abdominal y náuseas.',
	},
	{
		enfermedadId: 5,
		nombreEnfermedad: 'Artritis Reumatoide',
		tipoEnfermedad: 'Autoinmune',
		observaciones:
			'Enfermedad autoinmune que causa inflamación crónica de las articulaciones.',
	},
	{
		enfermedadId: 6,
		nombreEnfermedad: 'Migraña',
		tipoEnfermedad: 'Neurológica',
		observaciones:
			'Tipo de dolor de cabeza caracterizado por episodios recurrentes de cefalea intensa.',
	},
];

const ListaEnfermedades = () => {
	const [enfermedades, setEnfermedades] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const cargarEnfermedades = async () => {
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setEnfermedades(enfermedadesEjemplo);
			setError('');
		} catch (err) {
			setError('Error al cargar las enfermedades');
			console.error('Error:', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		cargarEnfermedades();
	}, []);

	const handleVerDetalle = (enfermedad: any) => {
		// Implementar lógica para ver detalle
		console.log('Ver detalle:', enfermedad);
	};

	const limpiarCampos = () => {
		setEnfermedades([]);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-lg shadow-lg border border-green-100 overflow-hidden mt-6">
			<div className="p-6 border-b border-green-200 bg-green-50">
				<h3 className="text-xl font-bold text-green-900">Enfermedades</h3>
			</div>
			<div className="p-6">
				{/* Error state */}
				{error && (
					<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-2">
						<AlertCircle className="text-red-600" size={20} />
						<span className="text-red-800">{error}</span>
					</div>
				)}

				{/* Lista de enfermedades */}
				{enfermedades.length === 0 ? (
					<div className="text-center py-12">
						<AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							No se encontraron enfermedades
						</h3>
						<p className="text-gray-500">Agrega tu primera enfermedad</p>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 w-full max-w-3xl mx-auto">
						{enfermedades.map((enfermedad) => (
							<TarjetaDetalle
								key={enfermedad.enfermedadId}
								nombre={enfermedad.nombreEnfermedad}
								tipo={enfermedad.tipoEnfermedad}
								onVerDetalle={() => handleVerDetalle(enfermedad)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ListaEnfermedades;
