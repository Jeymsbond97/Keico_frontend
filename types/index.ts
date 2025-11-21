export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  specifications?: string[];
}

export interface News {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  category: string;
}
