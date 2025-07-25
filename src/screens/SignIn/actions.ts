import { Authenticated } from "@/model/authenticated.model";
import { ApiSignIn } from "@/services/SignIn/api";

export class SignInAction {

  private api: ApiSignIn;

  constructor(){
    this.api = new ApiSignIn();
  }

  public login(email:string, password:string): Promise<Authenticated>{
    return this.api.login(email, password);
  }

}