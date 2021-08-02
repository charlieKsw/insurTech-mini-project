import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
	lng: 'en',
	react: {
		wait: true
	},
	fallbackLng: 'en',
	debug: true,
	resources: {
		en: {
			common: require('../locales/en/translations.json')
		},
		zh: {
			common: require('../locales/zh/translations.json')
		}
	},
	ns: [ 'common' ],
	defaultNS: 'common',
	returnObjects: true,
	interpolation: {
		escapeValue: false
	}
});

i18next.languages = [ 'en', 'zh' ];

export default i18next;
