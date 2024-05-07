export interface AboutListProps {
  id?: number;
  title: string;
  description: string;
}

export interface AboutTableProps {
  id?: number;
  value: string;
  behavior: string;
}

export interface AboutCardProps {
  id?: number;
  title: string;
  subTitle: string;
  icon: any
}

export interface AboutAttributes {
  header: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  aboutLists: AboutListProps[];
  aboutTableData: AboutTableProps[];
  aboutCards: AboutCardProps[]
}

export interface AboutDataType {
  id: number;
  attributes: AboutAttributes;
}

interface Meta { }

export interface AboutResponse {
  data: AboutDataType;
  meta: Meta | any;
}
