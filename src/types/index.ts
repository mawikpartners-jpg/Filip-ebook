export interface EbookProduct {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Chapter {
  number: number;
  title: string;
  description: string;
}