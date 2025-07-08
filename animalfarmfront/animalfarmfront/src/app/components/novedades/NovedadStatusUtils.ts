import { CheckCircle, Clock, AlertCircle, Info } from 'lucide-react';

// Función para obtener el color según el tipo de evento
export const getTipoEventoColor = (tipo: string) => {
  const colors: Record<string, string> = {
    'chequeoRutinario': 'bg-blue-100 text-blue-800',
    'vacunacion': 'bg-green-100 text-green-800',
    'tratamientoMedico': 'bg-purple-100 text-purple-800',
    'cirugia': 'bg-red-100 text-red-800',
    'revisionPostoperatoria': 'bg-orange-100 text-orange-800',
    'observacion': 'bg-gray-100 text-gray-800',
    'aislamiento': 'bg-yellow-100 text-yellow-800',
    'cambioDeDieta': 'bg-teal-100 text-teal-800',
    'enfermedad': 'bg-red-100 text-red-800',
    'infeccion': 'bg-red-100 text-red-800',
    'lesion': 'bg-orange-100 text-orange-800',
    'parasitacion': 'bg-yellow-100 text-yellow-800',
    'porDiagnosticar': 'bg-gray-100 text-gray-800',
    'evaluacionEtologica': 'bg-indigo-100 text-indigo-800',
    'nacimiento': 'bg-pink-100 text-pink-800',
    'fallecimiento': 'bg-black text-white',
    'ingreso': 'bg-blue-100 text-blue-800',
    'traslado': 'bg-amber-100 text-amber-800',
    'reubicacionDefinitiva': 'bg-purple-100 text-purple-800',
    'deAlta': 'bg-green-100 text-green-800',
    'recuperacion': 'bg-emerald-100 text-emerald-800'
  };
  return colors[tipo] || 'bg-gray-100 text-gray-800';
};

// Etiquetas para los tipos de evento
export const tipoEventoLabels: Record<string, string> = {
  'chequeoRutinario': 'Chequeo Rutinario',
  'vacunacion': 'Vacunación',
  'tratamientoMedico': 'Tratamiento Médico',
  'cirugia': 'Cirugía',
  'revisionPostoperatoria': 'Revisión Postoperatoria',
  'observacion': 'Observación',
  'aislamiento': 'Aislamiento',
  'cambioDeDieta': 'Cambio de Dieta',
  'enfermedad': 'Enfermedad',
  'infeccion': 'Infección',
  'lesion': 'Lesión',
  'parasitacion': 'Parasitación',
  'porDiagnosticar': 'Por Diagnosticar',
  'evaluacionEtologica': 'Evaluación Etológica',
  'nacimiento': 'Nacimiento',
  'fallecimiento': 'Fallecimiento',
  'ingreso': 'Ingreso',
  'traslado': 'Traslado',
  'reubicacionDefinitiva': 'Reubicación Definitiva',
  'deAlta': 'De Alta',
  'recuperacion': 'Recuperación'
};
