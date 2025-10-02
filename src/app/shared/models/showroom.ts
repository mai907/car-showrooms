export interface Showroom {
  id: number;
  name: string;
  commercialRegistrationNumber: number;
  mangerName: string;       
  contactNumber: number;
  address: string;
}

export interface ShowroomCreate {
  name: string;
  commercialRegistrationNumber: number;
  mangerName: string;       
  contactNumber: number;
  address: string;
}