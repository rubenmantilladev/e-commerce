export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CategoryComplete extends Category {
  creationAt: string;
  updatedAt: string;
}
