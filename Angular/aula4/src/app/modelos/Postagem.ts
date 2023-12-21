// Precisa estar export, para poder usar essa classe em outros locais. Usado em TypeScript
export class Postagem {
  // Usar ? é para não precisar inicializar a classe, caso queira. Também pode iniciar um numero com 0 ou string com ''
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
