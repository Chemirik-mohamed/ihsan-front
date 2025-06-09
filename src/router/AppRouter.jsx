import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../features/Home/Home";
import { About } from "../features/About/About";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "montres",
        element: (
          <div style={{ padding: "120px 20px 20px", textAlign: "center" }}>
            <h1>Montres</h1>
            <p>Page Montres - En cours de développement</p>
          </div>
        ),
      },
      {
        path: "collections",
        element: (
          <div style={{ padding: "120px 20px 20px", textAlign: "center" }}>
            <h1>Collections</h1>
            <p>Page Collections - En cours de développement</p>
          </div>
        ),
      },
      {
        path: "boutique",
        element: (
          <div style={{ padding: "120px 20px 20px", textAlign: "center" }}>
            <h1>Boutique</h1>
            <p>Page Boutique - En cours de développement</p>
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div style={{ padding: "120px 20px 20px", textAlign: "center" }}>
            <h1>Contact</h1>
            <p>Page Contact - En cours de développement</p>
          </div>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
