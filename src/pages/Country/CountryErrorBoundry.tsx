import { Link } from "react-router-dom";

const CountryErrorBoundry = () => {
  return (
    <div className="dark:text-light-white text-light-dark-grey flex flex-col gap-2">
      Something went wrong
      <Link
        to={"/"}
        className="dark:bg-dark-dark-blue px-5 py-2 rounded-md shadow w-max"
      >
        Go back to home!!
      </Link>
    </div>
  );
};

export default CountryErrorBoundry;
