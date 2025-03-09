const Formulario = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold my-4">
        Formulario de carga/edición de productos
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <form className="bg-white border rounded-lg p-6">
          <label
            htmlFor="lbl-nombre"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="lbl-nombre"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label
            htmlFor="lbl-apellido"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lbl-apellido"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label
            htmlFor="lbl-edad"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Edad
          </label>
          <input
            type="text"
            id="lbl-edad"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label
            htmlFor="lbl-puesto"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Puesto
          </label>
          <input
            type="text"
            id="lbl-puesto"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label
            htmlFor="lbl-foto"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Foto
          </label>
          <input
            type="text"
            id="lbl-foto"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>

          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
              type="submit"
            >
              Crear/Editar
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              type="reset"
            >
              Resetear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
