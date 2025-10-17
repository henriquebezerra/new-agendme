import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Importe seus arquivos de tradução
import en from './languages/en.json';
import ptBR from './languages/pt-BR.json';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: ptBR,
  },
};

// Detecta o idioma do dispositivo
// A API da Expo retorna um array de locais, pegamos o primeiro e seu código de idioma.
const deviceLanguage = Localization.getLocales()[0]?.languageCode;

i18next
  .use(initReactI18next) // Passa a instância do i18next para o react-i18next
  .init({
    
    // Nossas traduções
    resources,
    
    // Idioma a ser usado se a detecção falhar ou o idioma não estiver disponível
    fallbackLng: 'pt',

    // Idioma inicial
    lng: deviceLanguage,

    // Configuração para React, que já faz o escape de valores
    interpolation: {
      escapeValue: false,
    },
    
    // Fix comum para React Native
    compatibilityJSON: 'v3',
    //debug: true,
  } as any);

export default i18next;