import { I18n } from 'i18n-js';

const en = require('../En.json');
const th = require('../Th.json');

const i18n = new I18n();

i18n.enableFallback = true;
i18n.translations = { en, th };

export default i18n;
