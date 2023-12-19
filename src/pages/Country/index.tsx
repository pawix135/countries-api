import { ArrowLeft } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";

const Country = () => {
  let country = useLoaderData() as Country;

  console.log(country);

  return (
    <div className="flex flex-col gap-10 px-10">
      <Link
        to={"/"}
        className="dark:bg-dark-dark-blue dark:text-light-white shadow-md mr-auto px-10 py-2 flex flex-row gap-3 font-semibold rounded-md"
      >
        <ArrowLeft />
        Back
      </Link>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 md:pr-10">
          <img src={country.flag} alt="" />
        </div>
        <div className="flex flex-col gap-10 justify-center  flex-1 dark:text-light-white text-light-very-dark-blue">
          <h1>{country.name}</h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 ">
            <div className="flex flex-col gap-5 ">
              <p>
                <span className="font-bold">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-bold">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              <p>
                <span className="font-bold">Currencies: </span>
                {country.currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <span className="font-bold">Languages: </span>
                {country.languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <span className="font-semibold">Border Countries: </span>
            <div className="flex flex-row flex-wrap justify-center gap-3">
              {country.borders.map((border, index) => {
                return (
                  <Link
                    key={index}
                    to={`/country/${border}`}
                    className="dark:bg-dark-dark-blue dark:text-light-white px-5 py-2 bg-light-very-light-grey shadow-light-dark-grey shadow-sm rounded-md"
                  >
                    {border}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
