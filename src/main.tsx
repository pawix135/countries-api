import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getCountries, getCountry } from "./utils/fetcher.ts";
import Country from "./pages/Country/index.tsx";
import ErrorBoundary from "./components/errors/Error.tsx";
import Home from "./pages/Home/index.tsx";

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorBoundary />,
          loader: async () => {
            let countries = await getCountries();
            return countries;
          },
        },
        {
          path: "/country/:id",
          element: <Country />,
          errorElement: <ErrorBoundary />,
          loader: async ({ params }) => {
            let country = await getCountry(params.id as string);
            return country;
          },
        },
      ],
    },
  ],
  {
    basename: "/countries-api",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
