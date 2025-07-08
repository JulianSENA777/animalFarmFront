import React, { ReactNode } from 'react';

// Función para obtener el color según la gravedad
export const getGravedadColor = (gravedad: string) => {
  const colors: Record<string, string> = {
    'baja': 'text-green-600',
    'media': 'text-yellow-600',
    'alta': 'text-red-600'
  };
  return colors[gravedad] || 'text-gray-600';
};

// Función para obtener el icono según la gravedad (ahora solo un punto)
export const getGravedadIcon = (gravedad: string): ReactNode => {
  return React.createElement('span', {
    className: `inline-block w-3 h-3 rounded-full ${getGravedadColor(gravedad)}`
  });
};
