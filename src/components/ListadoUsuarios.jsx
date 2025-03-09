import Fila from "./Fila";

const ListadoUsuarios = () => {
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
        <tr className="bg-white border-b border-gray-200">
          <th className="px-6 py-4">Sofia</th>
          <td className="px-6 py-4">De Alessandre</td>
          <td className="px-6 py-4">33</td>
          <td className="px-6 py-4">Desarrolladora web</td>
          <td className="px-6 py-4">Foto</td>
          <td className="px-6 py-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2">Ver</button>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">Editar</button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">Borrar</button>
          </td>
        </tr>
      </tbody>

      <Fila />
    </table>
  );
};

export default ListadoUsuarios;
