'use client';
import Header from "./components/Header";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadCVButton from "./components/DownloadCVButton";

export default function Home() {
  return (
      <main>
        <Header/>
        <div className="flex justify-between items-center px-48 py-24 flex-wrap">

          <div className="flex flex-col gap-4">

            <h1 className="text-5xl font-semibold">Álvaro Luís</h1>
            <p className="text-lg text-gray-400">Desenvolvedor</p>

            <div className="flex gap-4">
             
              <a className="p-4 bg-[#FFFFFF] rounded" href="https://www.linkedin.com/in/%C3%A1lvarolu%C3%ADs/" target="blank"><LinkedInIcon className="text-black" /></a>

              <a className="p-4 bg-[#FFFFFF] rounded" href="https://github.com/latysno" target="blank"><GitHubIcon className="text-black" /></a>

              <DownloadCVButton/>
            </div>

          </div>

          <div className="">
            <img className="w-180 h-80 object-cover rounded-lg shadow-lg border-1 border-gray-600" src="/img/hello_world.gif" alt="" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="font-normal text-xl">&gt; &nbsp; Meu Portfólio &nbsp; &lt;</h2>
          <p className="text-2xl py-8"><p>&#123; &nbsp; Aqui você encontra meus projetos, aprendizados e experiências enquanto trilho meu caminho no mundo da tecnologia &nbsp; &#125;</p>
          </p>
        </div>
      </main>
    
  );
}
