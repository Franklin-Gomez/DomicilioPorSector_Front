
export default function Header() {
  return (
    <header className="px-0 bg-gray-800 pt-4 pb-6">

        <div className="container mx-auto p-4 flex flex-col justify-between h-full ">

            <div className="w-full max-w-7xl mt-0 mb-auto ">
                  
                <div className="flex justify-between w-full mx-auto">
                    <a href="/">
                        <h1 className="text-white px-2 py-1 text-2xl hover:font-bold "> Domicilios por Sector</h1>
                    </a>

                    <div className=" lg:hidden">
                        <img src="/img/barras.svg" className="w-20" alt="icono menu responsive"/>
                    </div>

                    <div className="flex flex-row-reverse items-center  gap-3 text-white ">
                        <img className=" w-20" src="/img/dark-mode.svg"/>

                        <nav className=" flex gap-2 text-xl"  >
                            <a href="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Nosotros</a>
                            <a href="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Anuncios</a>
                            <a href="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Blog</a>
                            <a href="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Contacto</a>
                        </nav>
                    </div>
                    
                </div> 

            </div>

        </div>

    </header> 
  )
}
