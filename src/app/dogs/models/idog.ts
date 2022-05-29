export interface IDog {
  id: number;
  name: string;
  age: number;
  foundAt: Date;
  adoptedAt?: Date;
  breed: string;
  description: string;
  picture: string;
}
