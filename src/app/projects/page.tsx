import CardProject from "../components/CardProject";
import Header from "../components/Header";
import { repositorios } from "../dataRepositorios";

export const metadata = {
    title: 'Projetos',
    description: 'Fale comigo sobre projetos, dúvidas e consultorias.',
  };
  

export default function ProjetoPage(){
    return(
        <main>
            <Header/>
            <h1 className="m-10 font-normal text-xl">&lt; &nbsp; Meus Projetos &nbsp; &gt;</h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                {repositorios.map((repo) => (
                    <CardProject
                    key={repo.id}
                    nome={repo.nome}
                    descricao={repo.descricao}
                    imagem={repo.imagem}
                    link={repo.link}
                    />
                ))}
            </div>
           
        </main>
    );
}