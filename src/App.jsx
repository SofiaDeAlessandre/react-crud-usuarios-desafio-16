import Formulario from "./components/Formulario";
import ListadoUsuarios from "./components/ListadoUsuarios";
import { useEffect, useState } from "react";


const App = () => {
  const [usuarios, setUsuarios] = useState(null);
  const [usuarioAEditar, setUsuarioAEditar] = useState(null);


  useEffect(() => {
  getAllUsuarios()
  }, [])
  


  const getAllUsuarios = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND);
      if (!res.ok) {
        throw new Error("No se pudo hacer la petición");
      }

      const data = await res.json();
      setUsuarios(data)

    } catch (error) {
      console.error(error.message);
    }
  };
  getAllUsuarios();

  const agregarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = Date.now();
    const nuevoEstadoUsuarios = [...usuarios, nuevoUsuario];
    setUsuarios(nuevoEstadoUsuarios);
  };

  const editarUsuario = (usuarioEditado) => {
    const nuevoEstadoUsuarios = usuarios.map((usuario) =>
      usuario.id === usuarioEditado.id ? usuarioEditado : usuario
    );
    usuarioEditado.edad = Number(usuarioEditado.edad);
    setUsuarios(nuevoEstadoUsuarios);
  };

  const borrarUsuario = (id) => {
    const nuevoEstadoUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevoEstadoUsuarios);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-5">CRUD Usuarios</h1>
      <hr />
      <Formulario
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <ListadoUsuarios
        usuarios={usuarios}
        borrarUsuario={borrarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  );
};

export default App;
