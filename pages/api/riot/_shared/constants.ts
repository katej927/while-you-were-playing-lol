interface TSetRouting {
  [key: string]: string;
}

export const SET_ROUTING_TAGLINES: TSetRouting = {
  KR: 'KR1',
  BR: 'BR1',
  EUN: 'EUNE',
  EUW: 'EUW',
  JP: 'JP1',
  LAN: 'LAN',
  LAS: 'LAS',
  NA: 'NA1',
  OC: 'OCE',
  RU: 'RU1',
  TR: 'TR1',
};

export const SET_ROUTING_REGION: TSetRouting = {
  KR: 'https://kr.api.riotgames.com',
  BR: 'https://br1.api.riotgames.com',
  EUN: 'https://eun1.api.riotgames.com',
  EUW: 'https://euw1.api.riotgames.com',
  JP: 'https://jp1.api.riotgames.com',
  LAN: 'https://la1.api.riotgames.com',
  LAS: 'https://la2.api.riotgames.com',
  NA: 'https://na1.api.riotgames.com',
  OC: 'https://oc1.api.riotgames.com',
  RU: 'https://ru.api.riotgames.com',
  TR: 'https://tr1.api.riotgames.com',
};

const RIOT_ROUTING_ASIA = 'https://asia.api.riotgames.com';
const RIOT_ROUTING_AMERICAS = 'https://americas.api.riotgames.com';
const RIOT_ROUTING_EUROPE = 'https://europe.api.riotgames.com';

export const SET_ROUTING_CONTINENT: TSetRouting = {
  NA: RIOT_ROUTING_AMERICAS,
  BR: RIOT_ROUTING_AMERICAS,
  LAN: RIOT_ROUTING_AMERICAS,
  LAS: RIOT_ROUTING_AMERICAS,
  OC: RIOT_ROUTING_AMERICAS,

  KR: RIOT_ROUTING_ASIA,
  JP: RIOT_ROUTING_ASIA,

  EUN: RIOT_ROUTING_EUROPE,
  EUW: RIOT_ROUTING_EUROPE,
  RU: RIOT_ROUTING_EUROPE,
  TR: RIOT_ROUTING_EUROPE,
};
