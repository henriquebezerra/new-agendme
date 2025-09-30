import { CURRENCY, LOCALE_LANGUAGE } from "@env";

export const useCurrency = (valor: number | 0) => {

  const formattedValue = new Intl.NumberFormat(LOCALE_LANGUAGE, {
      style: 'currency',
      currency: CURRENCY,
    }).format(valor);

    return {
      formattedValue
    }

}