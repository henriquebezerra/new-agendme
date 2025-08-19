import { FileObject } from "@/model/interfaces/general-interfaces";
import { ProfileApi } from "@/services/Profile/api";

export class ProfileAction {

  private api: ProfileApi;

  constructor(){
    this.api = ProfileApi.getInstance();
  }

  public listUriForSwiper(uuidStorage:string): Promise<FileObject[]>{
    return this.api.listUriForSwiper(uuidStorage, 'swiper');
  }

}