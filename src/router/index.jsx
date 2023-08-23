import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserProfile } from "../components/User/UserProfile";
import { ClientCreation, ClientList, Dashboard, Login, UserCreation, UserList } from "../pages/";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/users",
    element: <UserList />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/user/add",
    element: <UserCreation />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/user/:id",
    element: <UserProfile />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/cliente/add",
    element: <ClientCreation />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/clientes/",
    element: <ClientList />,
    errorElement: <div> Hubo un error!!</div>,
  }

]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
