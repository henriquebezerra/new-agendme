import { SignInApi } from "@/services/SignIn/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserProfileAction { 

  private api: SignInApi;

  constructor(){
    this.api = SignInApi.getInstance();
  }

  public logout(): Promise<void> {
    return this.api.logout().finally(() => {
      AsyncStorage.removeItem('token');
    });
  }

}