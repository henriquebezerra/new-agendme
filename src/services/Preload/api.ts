import { Authenticated } from "@/model/authenticated.model";
import { handleApiError } from "@/utils/handleError";
import { API_BASE_URL } from "@env";
import axios, { AxiosInstance } from "axios";


export class ApiPreload {

  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'text/plain', 
      },
    });
  }
  
  public checkToken(token:string): Promise<Authenticated>{
    return new Promise((resolve, reject) => {
      this.apiClient.post('/auth/refresh', token ).then(response => {
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