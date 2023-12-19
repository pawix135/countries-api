//https://raw.githubusercontent.com/pawix135/countries-api/main/data.json
export const getCountry = async (
  alpha3Code: string
): Promise<Country | undefined> => {
  try {
    let response = await fetch(
      "https://raw.githubusercontent.com/pawix135/countries-api/main/data.json",
      {
        cache: "force-cache",
      }
    );

    let data = (await response.json()) as Country[];

    let country = data.find((c) => c.alpha3Code == alpha3Code);

    return country;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getCountries = async (): Promise<Country[]> => {
  try {
    let response = await fetch(
      "https://raw.githubusercontent.com/pawix135/countries-api/main/data.json",
      {
        cache: "force-cache",
      }
    );

    let data = (await response.json()) as Country[];

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
