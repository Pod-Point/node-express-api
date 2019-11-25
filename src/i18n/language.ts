import Language from '../types/i18n/Language';
import Translation from '../types/i18n/Translation';

/**
 * Returns the translation for the given language.
 */
export default function(translation: string | Translation, language: Language) {
    if (typeof translation === 'string') {
        return translation;
    } else {
        if (!translation[language]) {
            throw new Error(`Missing translation for language: ${language}`);
        }

        return translation[language];
    }
}
