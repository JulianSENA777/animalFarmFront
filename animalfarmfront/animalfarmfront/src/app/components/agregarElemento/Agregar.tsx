import React from "react";
import { FaPlus } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

interface AgregarElementoProps {
  label?: string;
  color?: "green" | "yellow" | "amber";
  icon?: React.ReactNode;
  iconProps?: IconBaseProps;
  onClick?: () => void;
  className?: string;
}

const colorMap: Record<string, string> = {
  green: "bg-green-700 hover:bg-green-800 text-yellow-100",
  yellow: "bg-yellow-400 hover:bg-yellow-500 text-green-900",
  amber: "bg-amber-500 hover:bg-amber-600 text-green-900",
};

const AgregarElemento: React.FC<AgregarElementoProps> = ({
  label = "Agregar",
  color = "yellow",
  icon = <FaPlus />, // icono sin className
  iconProps,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md ${colorMap[color]} ${className}`}
      onClick={onClick}
      type="button"
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, { ...(iconProps || {}), className: "mr-2" })
        : icon}
      {label}
    </button>
  );
};

export default AgregarElemento;
