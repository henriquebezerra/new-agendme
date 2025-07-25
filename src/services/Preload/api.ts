import { API_BASE_URL } from "@env";
import axios, { AxiosInstance } from "axios";


export class ApiPreload {

  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
  }

  public checkToken(){
    
  }

}