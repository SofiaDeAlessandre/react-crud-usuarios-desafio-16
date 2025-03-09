import { useState } from "react";
import USUARIOS from "../constants/USUARIOS";
import Fila from "./Fila";



const ListadoUsuarios = () => {

  const [usuarios, setUsuarios] = useState(USUARIOS)

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          <th className="px-6 py-3">Nombre</th>
          <th className="px-6 py-3">Apellido</th>
          <th className="px-6 py-3">Edad</th>
          <th className="px-6 py-3">Puesto</th>
          <th className="px-6 py-3">Foto</th>
          <th className="px-6 py-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          usuarios.map((usuario) => (
            <Fila usuario={usuario} key={usuario.nombre}/>
          ))
        }
      </tbody>

    </table>
  );
};

export default ListadoUsuarios;
