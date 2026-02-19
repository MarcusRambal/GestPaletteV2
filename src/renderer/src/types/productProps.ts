export interface ProductProps {
  id: number;
  name: string;
  type: string;
  price: number;
  color: string;
  quantity?: number;
}

export interface ProductFormData {
  name: string;
  type: string;  
  price: number;
  color: string; 
}

