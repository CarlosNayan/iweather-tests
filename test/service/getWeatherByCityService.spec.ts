import { api } from "@services/api";
import { getWeatherByCityService } from "@services/getWeatherByCityService";
import { mockWeatherAPIResponse } from "../@mocks/mockWeatherAPIResponse";
describe("Service: getWeatherByCityService", () => {
  it("should be able to get city weather informations", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = await getWeatherByCityService({ latitude: 0, longitude: 0 });
    expect(city).toHaveProperty("today");
  });
});
