import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { useLoaderData } from "react-router-dom";
import CountryListItem from "../../components/CountryListItem";
import { useDebounce } from "../../hooks/useDebounce";

const filterByRegion = [
  "",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
] as const;

type Regions = (typeof filterByRegion)[number];

const Home = () => {
  let countires = useLoaderData() as Country[];

  const [searchInput, setSearchInput] = useState<string>("");
  const [filter, setFilter] = useState<Regions>("");

  let debounceSearch = useDebounce(searchInput, 1000);

  const [pending, startTransition] = useTransition();

  const changeFilter = useCallback(
    (value: Regions | "") => {
      startTransition(() => {
        setFilter(value);
      });
    },
    [filter]
  );

  const searchedFilteredCountries = useMemo(() => {
    if (searchInput === "" && filter == "") return countires;

    let searchedCountires = countires.filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (!filter) return searchedCountires;

    return searchedCountires.filter((country) =>
      country.region.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }, [debounceSearch, filter]);

  // let itemsCount = useMemo(() => {
  //   return searchedFilteredCountries.length;
  // }, [searchedFilteredCountries]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="px-10 md:px-0 flex flex-col gap-5 pb-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a country..."
          className="appearance-none dark:bg-dark-dark-blue dark:text-light-white py-3 rounded-md px-5 shadow-md dark:shadow-dark-very-dark-blue md:w-1/3 "
        />
        <select
          className="appearance-none rounded-md dark:bg-dark-dark-blue shadow-md dark:text-light-white dark:shadow-dark-very-dark-blue px-5 py-3 "
          value={filter}
          onChange={(e) => {
            changeFilter(e.target.value as Regions);
          }}
        >
          {filterByRegion.map((region, index) => {
            if (!region)
              return (
                <option value="" key={index}>
                  Filter by Region
                </option>
              );
            return (
              <option key={index} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-flow-row md:grid-cols-4 md:grid-rows-1 gap-10">
        {searchedFilteredCountries.map((country, index) => {
          return <CountryListItem key={index} country={country} />;
        })}
      </div>
    </div>
  );
};

export default Home;
