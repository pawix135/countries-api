import React from "react";
import { Link } from "react-router-dom";

interface Props {
  country: Country;
}

const CountryListItem: React.FC<Props> = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <div className=" dark:bg-dark-dark-blue bg-light-white dark:shadow-dark-very-dark-blue shadow-sm rounded-md">
        <img
          src={country.flag ?? country.flags.svg}
          alt={country.name}
          loading="lazy"
          style={{ objectFit: "cover" }}
          className="object-cover w-full md:h-[250px]"
        />

        <div className="flex flex-col gap-2 py-10 px-5 dark:text-light-white">
          <h1 className="font-bold mb-5 text-lg">{country.name}</h1>
          <h2>Population: {country.population}</h2>
          <h2>Region: {country.region}</h2>
          <h2>Capital: {country.capital}</h2>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(CountryListItem);
