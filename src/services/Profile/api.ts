import { FileObject } from "@/model/interfaces/general-interfaces";
import apiClient from "@/services/api";
import { API_BASE_URL, ENDPOINT_BASE_URL } from "@env";


export class ProfileApi {

  private static instance: ProfileApi;

  private constructor() { }
  
  public async listUriForSwiper(uuidStorage:string, directory:string): Promise<FileObject[]>{
    const response = await apiClient.get(`/storage-s3/download-with-directory/${uuidStorage}/${directory}`).then(res => {
      return res.data.map((item:FileObject) => ({
        ...item,
        uri: `${API_BASE_URL}${ENDPOINT_BASE_URL}${item.objectKey}`
      }));
    });
    return response;
  }


  public static getInstance(): ProfileApi {
    if(!ProfileApi.instance){
      ProfileApi.instance = new ProfileApi();
    }
    return ProfileApi.instance;
  }

}