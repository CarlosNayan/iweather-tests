import { WeatherItem } from "@components/WeatherItem";
import { render } from "@testing-library/react-native";

import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <WeatherItem icon={dropIcon} title="Umidade do ar" value="50%" />
    );

    expect(getByText(/Umidade do ar/i)).toBeTruthy();
    expect(getByText("50%")).toBeTruthy();
  });
});
