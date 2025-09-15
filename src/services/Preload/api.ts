import { Authenticated } from "@/model/authenticated.model";
import apiClient from "@/services/api";

export class PreloadApi {

  private static instance: PreloadApi;

  private constructor() { }

  public async refreshToken(token:string): Promise<Authenticated>{
      const response = await apiClient.post('/auth/refresh', token, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      return response.data;
  }

  public static getInstance(): PreloadApi {
    if(!PreloadApi.instance){
      PreloadApi.instance = new PreloadApi();
    }
    return PreloadApi.instance;
  }
}