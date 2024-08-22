import { NextDays } from "@components/NextDays";
import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";

const data = [
  {
    icon: clearDay,
    day: "Day 1",
    max: "Max 1",
    min: "Min 1",
    weather: "Sunny",
  },
  {
    icon: clearDay,
    day: "Day 2",
    max: "Max 2",
    min: "Min 2",
    weather: "Cold",
  },
];

describe("Component: Day", () => {
  it("should render correctly", () => {
    const { getByText } = render(<NextDays data={data} />);
    expect(getByText(/day 1/i)).toBeTruthy();
    expect(screen.queryByTestId("next-days-container").children).toHaveLength(
      2
    );
  });
});
