import axios, { AxiosError, type AxiosInstance } from 'axios';
import { API_BASE_URL  } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Validation } from '@/model/interfaces/general-interfaces';
import { Authenticated } from '@/model/authenticated.model';


const errosCodes = [400, 404];

const publicPaths = ['/auth/login', '/auth/refresh', '/usuario/perfis', '/usuario'];
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

const handleAuthorizationError = async(error: AxiosError) => {
  const originalRequest = error.config as any;
  const token = await AsyncStorage.getItem('token');
  try {
    if (token) {
      const response = await axios.post('/auth/refresh', token, {
        baseURL: API_BASE_URL,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      const auth:Authenticated = response.data;
      AsyncStorage.setItem('token', auth.token || '');
      originalRequest.headers.Authorization = `Bearer ${auth.token}`;
      return apiClient(originalRequest);
    }
  } catch (erro) {
    throw erro;
  }
}

apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token && !publicPaths.includes(config.url || '')) {
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
        let retorno: Validation = { message: 'Ocorreu um erro' };

        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;

            if (status === 401 && error.config?.url !== '/auth/login') {
                return handleAuthorizationError(error);
            }

            if (errosCodes.includes(status) && error.response.data && error.response.data.violations) {
                retorno.message = error.response.data.violations[0].message;
            } else {
                retorno.message = error.response.data.message;
            }
        } else {
            if (error.code && defaultMessages[error.code]) {
                retorno.message = defaultMessages[error.code];
            } else {
                retorno.message = 'Erro na requisição';
            }
        }

        throw retorno;
    }
);

export default apiClient;