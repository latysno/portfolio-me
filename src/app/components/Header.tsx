export default function Header(){
    return (
        <header className="w-full flex justify-around items-center p-6 bg-blue-200">
            <p className="font-bold"> Álvaro Luís</p>
            <nav className="flex gap-12">
                <a href="#" className="inline-flex items-center bg-gray-200 rounded-md px-3 py-2 text-sm font-think text-black-100 shadow-lg hover:text-cyan-500">Home</a>
                <a href="#" className="inline-flex items-center bg-gray-200 rounded-md px-3 py-2 text-sm font-think text-black-100 shadow-lg hover:text-cyan-500">Sobre Mim</a>
                <a href="#" className="inline-flex items-center bg-gray-200 rounded-md px-3 py-2 text-sm font-think text-black-100 shadow-lg hover:text-cyan-500">Projetos</a>
                <a href="#" className="inline-flex items-center bg-gray-200 rounded-md px-3 py-2 text-sm font-think text-black-100 shadow-lg hover:text-cyan-500">Contato</a>
            </nav>
        </header>
    );
}

