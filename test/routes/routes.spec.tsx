import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { screen, waitFor } from "@testing-library/react-native";
import { render } from "../@mocks/customRenders";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "../@mocks/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should render search screen when not city selected", async () => {
    render(<Routes />);
    expect(
      await waitFor(() => screen.getByPlaceholderText("Buscar local"))
    ).toBeTruthy();
  });

  it("should render city screen when city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });
    const newCity = {
      id: "1",
      name: "São Paulo",
      longitude: -46.18,
      latitude: -23.55,
    };

    await saveStorageCity(newCity);
    render(<Routes />);
    expect(await waitFor(() => screen.getByText("São Paulo"))).toBeTruthy();
  });
});
