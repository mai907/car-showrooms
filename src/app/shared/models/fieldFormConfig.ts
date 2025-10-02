import { Showroom } from "./showroom";

export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  controlType: 'input' | 'select';
  placeholder?: string;
  options?: Showroom[]; 
  validators?: any[];  
}

export interface Toast {
  message: string;
  type: 'info' | 'error';
  id: number;
  duration?: number; // optional, default 3s
}
