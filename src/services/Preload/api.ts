import { Authenticated } from "@/model/authenticated.model";
import apiClient from "@/services/api";

export class ApiPreload {

  public async refreshToken(token:string): Promise<Authenticated>{
      const response = await apiClient.post('/auth/refresh', token, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      return response.data;
  }
}