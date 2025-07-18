'use client';
import Header from "./components/Header";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadCVButton from "./components/DownloadCVButton";

export default function Home() {
  return (
    <main>
      <Header />

      
      <section className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-20 py-12 md:py-24 gap-10 text-center md:text-left">
        
        
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-4xl md:text-5xl font-semibold">Álvaro Luís</h1>
          <p className="text-lg text-gray-400">Desenvolvedor</p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <a
              className="p-5 bg-white rounded flex items-center justify-center hover:bg-gray-200"
              href="https://www.linkedin.com/in/%C3%A1lvarolu%C3%ADs/"
              target="_blank"
            >
              <LinkedInIcon className="text-black" />
            </a>

            <a
              className="p-5 bg-white rounded flex items-center justify-center hover:bg-gray-200"
              href="https://github.com/latysno"
              target="_blank"
            >
              <GitHubIcon className="text-black" />
            </a>

            <DownloadCVButton />
          </div>
        </div>

        
        <div className="w-full flex justify-center md:justify-end">
          <img
            className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg border border-gray-600"
            src="/img/hello_world.gif"
            alt="Hello World"
          />
        </div>
      </section>

      
      <div className="text-center px-6">
        <h2 className="font-normal text-xl">&gt; &nbsp; Meu Portfólio &nbsp; &lt;</h2>
        <p className="text-base md:text-xl py-8 max-w-3xl mx-auto leading-relaxed">
          &#123; &nbsp; Aqui você encontra meus projetos, aprendizados e experiências enquanto trilho meu caminho no mundo da tecnologia &nbsp; &#125;
        </p>
      </div>
    </main>
  );
}
