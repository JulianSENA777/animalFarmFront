import React from 'react';
import { Eye } from 'lucide-react';

interface EnfermedadCardProps {
  nombreEnfermedad: string;
  tipoEnfermedad: string;
  onVerDetalle?: () => void;
}

const EnfermedadCard: React.FC<EnfermedadCardProps> = ({ nombreEnfermedad, tipoEnfermedad, onVerDetalle }) => {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow w-full relative flex items-center min-h-[72px] h-[72px]">
      <div className="p-4 flex-1">
        <div className="mb-2">
          <h3 className="text-base font-semibold text-green-900 mb-1">
            {nombreEnfermedad}
          </h3>
        </div>
        <div className="mb-2">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
            {tipoEnfermedad}
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

export default EnfermedadCard;
