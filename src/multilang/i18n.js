import i18n from 'i18n-js';
import he from './he.json';
import ru from './ru.json';
import en from './en.json';

i18n.defaultLocale = 'he';
i18n.locale = 'he';
i18n.fallbacks = true;
i18n.translations = { en, he, ru };

export default i18n;