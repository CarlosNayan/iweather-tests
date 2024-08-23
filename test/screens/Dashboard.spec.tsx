import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../@mocks/customRenders";
import { mockWeatherAPIResponse } from "../@mocks/mockWeatherAPIResponse";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityApiResponse } from "../@mocks/mockCityApiResponse";

describe("Screens: Dashboard", () => {
  beforeAll(async () => {
    await saveStorageCity({
      id: "1",
      name: "São Paulo",
      longitude: -46.18,
      latitude: -23.55,
    });
  });

  it("should render dashboard screen", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    const searchInput = await waitFor(() => screen.getByTestId("search-input"));

    fireEvent.changeText(searchInput, "São Paulo");
    const option = await waitFor(() => screen.findByText(/são paulo/i));
    expect(option).toBeTruthy();
  });

  it("sould be show another city when city is selected", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityApiResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const searchInput = await waitFor(() => screen.getByTestId("search-input"));

    await waitFor(() =>
      act(() => fireEvent.changeText(searchInput, "São Paulo"))
    );

    await waitFor(() =>
      act(() => fireEvent.press(screen.getByText(/são paulo/i)))
    );

    const option = await waitFor(() => screen.findByText(/são paulo/i));

    expect(option).toBeTruthy();
  });
});
