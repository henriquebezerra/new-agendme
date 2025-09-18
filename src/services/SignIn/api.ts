import { Authenticated } from "@/model/authenticated.model";
import apiClient from "@/services/api";
export class SignInApi {

  private static instance: SignInApi;

  private constructor() { }

  public async login(email:string, password:string): Promise<Authenticated> {
    const response = await apiClient.post('/auth/login', {
            email,
            senha: password
        });
    return response.data;
  }

  public async logout(): Promise<void> {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  }
  
  public static getInstance(): SignInApi {
    if(!SignInApi.instance){
      SignInApi.instance = new SignInApi();
    }
    return SignInApi.instance;
  }
}