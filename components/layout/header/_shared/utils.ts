export const convertLanguages = (locales?: string[]) => {
  return locales?.map((locale) => {
    if (locale === 'ko') return { transLang: '한국어', locale };
    if (locale === 'en') return { transLang: 'English', locale };
  });
};
