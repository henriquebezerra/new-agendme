import { Authenticated } from '@/model/authenticated.model';
import { ApiSignUp } from '@/services/SignUp/api';
import { OptionsType } from '@/types/options-type';

export class SignUpAction {

  private api: ApiSignUp;

  constructor(){
    this.api = new ApiSignUp();
  }

  public cadastrar(nome: string, email: string, password: string): Promise<Authenticated> {
    return this.api.cadastrar(nome, email, password);
  }

  public async buscarPerfis(): Promise<OptionsType[]> {
    return await this.api.buscarPerfis();
  }
}