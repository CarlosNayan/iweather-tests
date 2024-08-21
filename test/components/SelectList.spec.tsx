import { SelectList } from "@components/SelectList";
import { render, fireEvent, screen } from "@testing-library/react-native";

describe("Component: SelectList", () => {
  let data = [
    { id: "1", name: "City 1", longitude: 0, latitude: 0 },
    { id: "2", name: "City 2", longitude: 0, latitude: 0 },
  ];

  it("should render correctly", () => {
    const { getByText } = render(
      <SelectList data={data} onChange={jest.fn()} onPress={jest.fn()} />
    );

    expect(getByText(/city 1/i)).toBeTruthy();
  });

  it("should be able to select a city", () => {
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={jest.fn()} onPress={onPress} />);

    fireEvent.press(screen.getByText(/city 1/i));

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={jest.fn()} onPress={jest.fn()} />);

    expect(screen.queryByTestId("options")).toBeNull();
    expect(screen.queryByTestId("options-container").children).toHaveLength(0);
  });
});
