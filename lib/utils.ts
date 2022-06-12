export const addCommas = (num: number) =>
  Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};

  if (cookieString) {
    const itemString = cookieString?.split(/\s*;\s*/);
    itemString.forEach((pairs) => {
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join('=');
    });
  }

  return cookies;
};
