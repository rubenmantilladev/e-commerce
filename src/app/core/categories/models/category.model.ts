export interface Category {
  id: number;
  name: string;
  image: string;
  length?: number;
}

export interface CategoryComplete extends Category {
  creationAt: string;
  updatedAt: string;
}

export interface CategoryCreateRequest {
  name: string;
  image: string;
}

export interface CategoryUpdateRequest {
  id: number;
  name: string;
}
