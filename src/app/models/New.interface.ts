export interface New {
  category?: string;
  country?: string;
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ApiNewsResponse {
  status: string;
  totalResults: number;
  articles: New[];
}
