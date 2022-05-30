export interface IDog {
  id: number;
  name: string;
  age: number;
  foundAt: Date | string;
  adoptedAt?: Date | null | string;
  breed: string;
  description: string;
  picture: string;
}
