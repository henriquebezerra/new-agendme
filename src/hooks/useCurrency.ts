import { useDevicelocale } from "./useDeviceLocale";

export const useCurrency = (valor: number | 0) => {

  const { languageTag, currencyCode } = useDevicelocale();

  const formattedValue = new Intl.NumberFormat(languageTag, {
      style: 'currency',
      currency: currencyCode,
    }).format(valor);

    return {
      formattedValue
    }

}