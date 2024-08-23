import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityApiResponse: CityAPIResponse = {
  id: "1",
  name: "São Paulo",
  sys: {
    country: "BR",
  },
  coord: {
    lon: -46.18,
    lat: -23.55,
  },
};
