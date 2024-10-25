import {I18n} from 'i18n-js';

const i18n = new I18n();

export function translate(key, options) {
  return key ? i18n.t(key, options) : null;
}