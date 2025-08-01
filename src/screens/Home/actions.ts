import { HomeAPI } from '@/services/Home/api';
import * as Location from 'expo-location';
import { DadosLocation, Validation } from '@/model/interfaces/general-interfaces';
import { Estabelecimento } from '@/model/estabelecimento.model';

export class HomeActions {

  private api: HomeAPI;

  constructor(){ 
    this.api = new HomeAPI();
  }

  public async handleLocationFinder(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if(status === 'granted' ){

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      let cidadeLocation = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      
      if (cidadeLocation && cidadeLocation.length > 0) {
        return {
          cidade:cidadeLocation[0].city, 
          uf:cidadeLocation[0].region, 
          subregiao:cidadeLocation[0].subregion 
        }
        
      } else {
        let error: Validation = { message: 'Não encontramos sua localização' };
        throw(error)
      }
    }
  }

  public async carregarEstabelecimentos(estabelecimentoText?:string){
    try {
      let response:Estabelecimento[] = [];
      if(estabelecimentoText){
        response = await this.api.carregarEstabelecimentosNome(estabelecimentoText);
      } else {
        const { cidade, uf, subregiao } = await this.handleLocationFinder() as DadosLocation;
        response = await this.api.carregarEstabelecimentos({cidade, uf, subregiao});
      }
      return response;
    } catch (error) {
      throw error;      
    }
  }
}