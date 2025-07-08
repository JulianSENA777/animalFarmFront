// Opcional: Enums equivalentes en TypeScript
export type SexoAnimal = "Macho" | "Hembra";
export type EstadoSaludAnimal =
  | "Estable"
  | "Inestable"
  | "Crítico"
  | "Postoperatorio"
  | "En observación"
  | "Hospitalizado"
  | "En cuarentena";

// Interfaz ajustada
export interface RazaDto {
  razaId: number;
  nombreRaza: string;
  observaciones?: string;
  categoriaAnimal?: CategoriaAnimalDto;
}

export interface CategoriaAnimalDto {
  categoriaAnimalId: number;
  nombreCategoria: string;
}

export interface AnimalDto {
  animalId?: number;
  estadoSalud: EstadoSaludAnimal;
  nombreAnimal: string;
  sexo: SexoAnimal;
  peso: number;
  edad: number;
  fechaRegistro: string; // ISO date
  fechaActualizacion?: string; // ISO datetime
  fotoAnimal?: string;
  fechaNacimiento: string; // ISO date
  estadoGestante: boolean;
  estado: boolean;
  raza?: RazaDto;
}

const API_URL = 'http://localhost:8080/animales';
const API_URL_RAZAS = 'http://localhost:8080/razas';

export const animalService = {
  async listarAnimales(): Promise<AnimalDto[]> {
    const res = await fetch(`${API_URL}/listar`);
    if (!res.ok) throw new Error('Error al listar animales');
    return res.json();
  },

  async obtenerAnimalPorId(id: number): Promise<AnimalDto> {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error('Error al obtener animal');
    return res.json();
  },

  async crearAnimal(animal: AnimalDto): Promise<AnimalDto> {
    const res = await fetch(`${API_URL}/addAnimal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(animal),
    });
    if (!res.ok) throw new Error('Error al crear animal');
    return res.json();
  },

  async actualizarAnimal(id: number, animal: AnimalDto): Promise<AnimalDto> {
    const res = await fetch(`${API_URL}/actualizar/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(animal),
    });
    if (!res.ok) throw new Error('Error al actualizar animal');
    return res.json();
  },

  async cambiarEstadoSalud(id: number, estadoSalud: string): Promise<AnimalDto> {
    const res = await fetch(`${API_URL}/${id}/estado-salud`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estadoSalud }),
    });
    if (!res.ok) throw new Error('Error al cambiar estado de salud');
    return res.json();
  },

  async cambiarEstadoAnimal(id: number, estado: boolean): Promise<AnimalDto> {
    const res = await fetch(`${API_URL}/${id}/estado`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado }),
    });
    if (!res.ok) throw new Error('Error al cambiar estado del animal');
    return res.json();
  },
};

export const razaService = {
  async obtenerLlavesForaneas(id: number): Promise<{ razaId: number; categoriaAnimalId?: number }> {
    const res = await fetch(`${API_URL_RAZAS}/${id}/llaves-foraneas`);
    if (!res.ok) throw new Error('Error al obtener llaves foráneas');
    return res.json();
  },
};
