import { CityProvider } from "@contexts/CityContext";
import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("Context: CityContext", () => {
  it("should be able to change/select and get a city", async () => {
    const { result } = renderHook(() => useCity(), {
      wrapper: CityProvider,
    });

    await waitFor(() =>
      act(() => {
        result.current.handleChangeCity({
          id: "1",
          name: "São Paulo",
          longitude: -46.18,
          latitude: -23.55,
        });
      })
    );

    expect(result.current.city).toEqual({
      id: "1",
      name: "São Paulo",
      longitude: -46.18,
      latitude: -23.55,
    });
  });
});
