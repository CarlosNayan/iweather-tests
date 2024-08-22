import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";

const newCity = {
  id: "1",
  name: "São Paulo",
  longitude: -46.18,
  latitude: -23.55,
};

describe("Libs: asyncStorage: cityStorage", () => {
  it("should be return null if no city in storage", async () => {
    const city = await getStorageCity();

    expect(city).toBeNull();
  });

  it("should be able return saved city from storage", async () => {
    await saveStorageCity(newCity);

    const city = await getStorageCity();
    expect(city).toHaveProperty("name");
    expect(city).toEqual(newCity);
  });

  it("should be able to remove city from storage", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();
    const city = await getStorageCity();

    expect(city).toBeNull();
  });
});
