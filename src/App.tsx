import { FC } from "react";
import Layout from "./pages/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/drinks",
        element: <>NIGGA PAGE</>
      }
    ]
  }
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
