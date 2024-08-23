import { Search } from "@screens/Search";
import { api } from "@services/api";
import { render, screen, fireEvent, waitFor } from "../@mocks/customRenders";
import { mockCityApiResponse } from "../@mocks/mockCityApiResponse";

describe("Screens: Search", () => {
  it("should render search screen", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    render(<Search />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.changeText(searchInput, "São Paulo");
    const option = await waitFor(() => screen.findByText(/são paulo/i));
    expect(option).toBeTruthy();
  });
});
