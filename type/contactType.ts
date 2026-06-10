export interface ContactFormData {
  name: string;
  phone: string;
  address: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}
