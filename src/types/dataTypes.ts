export interface ServiceAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  top: boolean | null;
  parent: any;
}

export interface ServiceData {
  id: number;
  attributes: ServiceAttributes;
  parent: {
    data: ServiceData[];
  };
}

export interface ServiceResponse {
  data: ServiceData[];
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
    // Add more formats if needed
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null; // Update this if you know the structure of provider_metadata
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageResponse {
  data: ImageData[];
}

export interface DataAttributes {
  name: string;
  description: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageResponse;
  services: ServiceResponse;
}
