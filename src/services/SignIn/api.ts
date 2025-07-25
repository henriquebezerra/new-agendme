import axios, { AxiosInstance } from "axios";
import { API_BASE_URL  } from '@env';
import { Authenticated } from "@/model/authenticated.model";
import { handleApiError } from '@/utils/handleError';

export class ApiSignIn {

  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
  }

  public login(email:string, password:string): Promise<Authenticated> {
    return new Promise((resolve, reject) => {
      this.apiClient.post('/auth/login', {
            email,
            senha: password
        }).then(response => {
          resolve(response.data);
        }).catch(error => {
          try {
              handleApiError(error, axios);
            } catch (error) {
              reject(error);
            }
        });
    });
  }
}