import { Authenticated } from '@/model/authenticated.model';
import { ApiSignUp } from '@/services/SignUp/api';

export class SignUpAction {

  private api: ApiSignUp;

  constructor(){
    this.api = new ApiSignUp();
  }

  public cadastrar(nome: string, email: string, password: string): Promise<Authenticated> {
    return this.api.cadastrar(nome, email, password);
  }
  
}