import { Day } from "@components/Day";
import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should render correctly", () => {
    const { getByText, debug } = render(
      <Day
        data={{
          icon: clearDay,
          day: "Day 1",
          max: "Max 1",
          min: "Min 1",
          weather: "Sunny",
        }}
      />
    );

    expect(getByText(/day 1/i)).toBeTruthy();
  });
});
