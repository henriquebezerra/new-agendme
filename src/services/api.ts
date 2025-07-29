import axios, { type AxiosInstance } from 'axios';
import { API_BASE_URL  } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Validation } from '@/model/interfaces/validations';


const errosCodes = [400, 401];
interface DefaultErrorMessages {
  [key : string]: string
}

const defaultMessages:DefaultErrorMessages  = {
  'ERR_NETWORK': 'Erro de conexão com o servidor'
}

const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;
            let retorno: Validation = { message: '' };
        
            if (errosCodes.includes(status) && error.response.data && error.response.data.violations) {
                retorno.message  = error.response.data.violations[0].message;
            } else {
                retorno.message = error.response.data.message;
            }
        
            throw retorno;
          } else {
            if(error.code && defaultMessages[error.code]){
              alert(defaultMessages[error.code]);
            } else {
              alert('Erro na requisição');
            }
            throw error;
          }
    }
);

export default apiClient;