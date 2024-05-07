import { AboutCardProps, AboutListProps, AboutResponse, AboutTableProps } from "@/types/aboutTypes";

export interface MappedAboutData {
  header: string;
  title: string;
  description: string;
  aboutLists: AboutListProps[];
  aboutTableData: AboutTableProps[];
  aboutCards: AboutCardProps[]
}

export const mapAboutPageData = (response: AboutResponse): MappedAboutData => {

  return {
    header: response?.data.attributes.header,
    title: response?.data.attributes.title,
    description: response?.data.attributes.description,
    aboutLists: response?.data.attributes.aboutLists,
    aboutTableData: mapTableData(response?.data.attributes.aboutTableData),
    aboutCards: response?.data.attributes.aboutCards
  };
}

const mapTableData = (tableData: any): any[] => {
  return tableData?.map((item: any) => {
    return ({
      id: item.id,
      value: item.value,
      behavior: item.behavior,
    })
  });
};


