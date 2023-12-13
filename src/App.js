import React from "react";

import { BrowserRouter as Router,  createBrowserRouter, RouterProvider} from "react-router-dom";

import { About,Cart,Orders,Homepage,Error,Landing,Products,SingleProduct,Register,Checkout,Login } from "./pages";

import { ErrorElement } from "./components";

//loader
import {loader as landingLoader}  from "./pages/Landing";
//actions 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id", // :id şeklinde parametre kullanımı
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);


const App = () => {
  return <RouterProvider router={router} />
  
}

export default App;
