import { useMemo } from "react"
import * as Localization from 'expo-localization';

export const useDevicelocale = () => {

  const deviceLocale = useMemo(() => {
    const locale = Localization.getLocales()[0];
    
    return {
      languageTag: locale?.languageTag || 'en-US',
      currencyCode: locale?.currencyCode || 'USD',
    };
  }, []);

  return deviceLocale;
}