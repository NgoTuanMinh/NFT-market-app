export interface CreateArtworkInput {
  name: string;
  imageUrl: string;
  description?: string;
  tags?: string[];
}

export interface LikeArtworkInput {
  productId: number;
}

export interface Artwork {
  name: string;
  owner?: number;
  id?: number;
  imageUrl: string;
  description?: string;
  tags?: Tag[];
}

export interface Tag {
  id?: number;
  type: string;
}