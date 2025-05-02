export default function Header(){
    return (
        <header className="w-full flex justify-around items-center p-2 bg-[#0D201F] shadow-lg">
            <p className="font-think text-[#FFFFFF]"> Álvaro Luís</p>
            <nav className="flex gap-12">
                <a href="#" className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500">Home</a>
                <a href="#" className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500">Sobre Mim</a>
                <a href="#" className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500">Projetos</a>
                <a href="#" className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500">Contato</a>
            </nav>
        </header>
    );
}

