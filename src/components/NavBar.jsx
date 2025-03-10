

const NavBar = () => {
  return (
    <nav className="bg-amber-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-lg font-bold">Educación IT</a>
            <ul className="flex space-x-4">
                <li><a href="/" className="text-white hover:text-gray-200">Inicio</a></li>
                <li><a href="/usuarios" className="text-white hover:text-gray-200">Usuarios</a></li>
                <li><a href="/nosotros" className="text-white hover:text-gray-200">Nosotros</a></li>
                <li><a href="/contacto" className="text-white hover:text-gray-200">Contacto</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar