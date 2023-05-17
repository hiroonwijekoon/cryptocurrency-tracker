export const coinsList = (currency: string) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
};

export const singleCoin = (id: number) => {
  `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const historicalChart = (id: number, days: number, currency: string) => {
  `https://api.coingecko.com/api/v3/coins/${id}/markets?vs_currency=${currency}&days=${days}`;
};

export const trendingCoins = (currency: string): string => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
};
