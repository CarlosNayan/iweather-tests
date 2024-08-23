import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";
import { mockCityApiResponse } from "../@mocks/mockCityApiResponse";

describe("Service: getCityByNameService", () => {
  it("should be able to get city informations by name", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });

    const city = await getCityByNameService("São Paulo");
    expect(city).toHaveLength(1);
  });
});
