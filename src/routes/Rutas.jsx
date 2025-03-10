import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import NoEncontrado from "../pages/NoEncontrado";
import Usuarios from "../pages/Usuarios";

const Rutas = () => {
  const rutasApp = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/usuarios",
      element: <Usuarios />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "*",
      element: <NoEncontrado />,
    },
  ]);

  return rutasApp;
};

export default Rutas;
