import { Authenticated } from "@/model/authenticated.model";
import { SignInApi } from "@/services/SignIn/api";

export class SignInAction {

  private api: SignInApi;

  constructor(){
    this.api = new SignInApi();
  }

  public login(email:string, password:string): Promise<Authenticated>{
    return this.api.login(email, password);
  }

}