import * as Localization from 'expo-localization';
import { LOCALE_LANGUAGE } from '@env';

class LocalizationManager {

  private static instance: LocalizationManager;
  
  private _languageTag: string;

  private constructor() {
    this._languageTag = Localization.getLocales()[0].languageTag || LOCALE_LANGUAGE;
  }

  static getInstance(): LocalizationManager {
    if (!LocalizationManager.instance) {
      LocalizationManager.instance = new LocalizationManager();
    }
    return LocalizationManager.instance;
  }

  updateLanguage(languageTag: string): void {
    this._languageTag = languageTag;
  }

  get languageTag(): string {
    return this._languageTag;
  }

}

export const localization = LocalizationManager.getInstance();