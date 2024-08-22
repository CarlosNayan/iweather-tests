import { render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="placeholder" />
    );

    expect(screen.queryByTestId("loading")).toBeNull();
    expect(getByPlaceholderText("placeholder")).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("should render isLoading correctly", () => {
    render(<Input placeholder="placeholder" isLoading />);

    expect(screen.getByTestId("loading")).toBeTruthy();
  });
});
