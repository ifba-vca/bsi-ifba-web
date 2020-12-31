export interface PageInterface {
    title: string;
    navigation: string;
    icon?: React.ReactNode|null;
  }
  
export type PagesInterface = PageInterface[];

export type PageListInterface = PagesInterface[];
  