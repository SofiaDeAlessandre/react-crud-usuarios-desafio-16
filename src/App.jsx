import Formulario from "./components/Formulario";
import ListadoUsuarios from "./components/ListadoUsuarios";
import { useState } from "react";
import USUARIOS from "./constants/USUARIOS";

const App = () => {
  const [usuarios, setUsuarios] = useState(USUARIOS)

  const agregarUsuario = (nuevoUsuario) => {
const nuevoEstadoUsuarios = [...usuarios, nuevoUsuario]
setUsuarios(nuevoEstadoUsuarios)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-5">CRUD Usuarios</h1>
      <hr />
      <Formulario agregarUsuario={agregarUsuario}/>
      <ListadoUsuarios usuarios={usuarios} />
    </div>
  );
};

export default App;
