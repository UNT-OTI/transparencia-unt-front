export interface UndegraduateInformationByYear {
  yearId: number;
  items: UndergraduateInformationItem[];
}

export interface UndergraduateInformationItem {
  label: string;
  url: string;
}
