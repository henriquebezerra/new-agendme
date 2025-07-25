import { Validation } from "@/model/interfaces/validations";
import { AxiosStatic } from "axios";

const errosCodes = [400, 401];

export const handleApiError = (error:any, axios:AxiosStatic) => {
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
    let erroRequest = 'Erro na requisição'
    console.error("Erro na requisição:", error);
    alert(erroRequest);
    throw error;
  }
}