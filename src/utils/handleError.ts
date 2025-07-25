import { Validation } from "@/model/interfaces/validations";
import { AxiosStatic } from "axios";

export const handleApiError = (error:any, axios:AxiosStatic) => {
  if (axios.isAxiosError(error) && error.response) {
    const status = error.response.status;
    let retorno: Validation = { message: '' };

    if (status === 400 && error.response.data && error.response.data.violations) {
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