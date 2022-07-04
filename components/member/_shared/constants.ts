export const CONVERT_ICON_URL = (id: number) =>
  `http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${id}.png`;

export const BACKGROUND_IMG_URL = (type: 'splash' | 'loading', championName: string) =>
  `http://ddragon.leagueoflegends.com/cdn/img/champion/${type}/${championName}_0.jpg`;
