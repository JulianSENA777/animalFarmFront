import React from "react";

export interface FiltrosBusquedaConfig {
  color?: string;
  titulo?: string;
  labelBusqueda?: string;
  labelLimpiar?: string;
}

// Este componente solo almacena los parámetros de diseño para los filtros de búsqueda
// y los expone mediante un contexto para que otros componentes puedan usarlos.
export const FiltrosBusquedaContext = React.createContext<FiltrosBusquedaConfig>({});

export const FiltrosBusquedaProvider: React.FC<{
  config: FiltrosBusquedaConfig;
  children: React.ReactNode;
}> = ({ config, children }) => {
  return (
    <FiltrosBusquedaContext.Provider value={config}>
      {children}
    </FiltrosBusquedaContext.Provider>
  );
};

