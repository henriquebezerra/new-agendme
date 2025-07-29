import { Authenticated } from "@/model/authenticated.model";
import apiClient from "@/services/api";
export class ApiSignIn {

  public async login(email:string, password:string): Promise<Authenticated> {
    const response = await apiClient.post('/auth/login', {
            email,
            senha: password
        });
    return response.data;
  }
}