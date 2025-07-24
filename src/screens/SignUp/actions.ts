import { ApiSignUp } from '@/services/SignUp/api';

export class SignUpAction {

  private api: ApiSignUp;

  constructor(){
    this.api = new ApiSignUp();
  }

  public async cadastrar(nome: string, email: string, password: string): Promise<any> {
    return await this.api.cadastrar(nome, email, password);
  }
  
}