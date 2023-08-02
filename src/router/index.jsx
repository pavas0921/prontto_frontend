import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div> Hubo un error!!</div>,
  },
  
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
