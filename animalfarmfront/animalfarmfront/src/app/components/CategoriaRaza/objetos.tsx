import React from 'react';
import { Eye } from 'lucide-react';

interface TarjetaDetalleProps {
  nombre: string;
  tipo: string;
  onVerDetalle?: () => void;
  // Puedes agregar más props si necesitas mostrar más información
}

const TarjetaDetalle: React.FC<TarjetaDetalleProps> = ({ nombre, tipo, onVerDetalle, ...props }) => {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow w-[98%] sm:w-[96%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] relative flex items-center min-h-[72px] h-[72px] mx-auto">
      <div className="p-4 flex-1">
        <div className="mb-2">
          <h3 className="text-base font-semibold text-green-900 mb-1">
            {nombre}
          </h3>
        </div>
        <div className="mb-2">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
            {tipo}
          </span>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={onVerDetalle}
          className="bg-green-700 hover:bg-green-800 text-yellow-100 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs"
          title="Ver detalle"
        >
          <Eye className="h-4 w-4" />
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default TarjetaDetalle;
