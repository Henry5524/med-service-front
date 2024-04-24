export interface Service {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  top: any;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface MappedImages {
  image: string;
  name: string;
}

export interface DataAttributes {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: {
      map(arg0: (image: { attributes: Image; }) => { image: string; name: string; }): any; attributes: Image[]
    }
  };
  services: { data: Service[] };
}
