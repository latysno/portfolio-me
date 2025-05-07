import Header from "../components/Header";

export const metadata = {
    title: 'Sobre mim',
    description: 'Fale comigo sobre projetos, dúvidas e consultorias.',
  };
  

export default function AboutMePage(){
    return(
        <main>
            <Header/>

            <h1 className="m-10 font-normal text-xl">&lt; &nbsp; Sobre Mim &nbsp; &gt;</h1>
            
            <div>

            </div>
            <div className="flex-1 flex w-200 justify-center">
                <p>Sou Álvaro Luís, estudante de Sistemas de Informação e apaixonado por desenvolvimento de software. Ao longo da minha formação, venho explorando diferentes áreas da tecnologia, com experiências práticas em projetos que envolvem tanto frontend quanto backend.

                Já participei de iniciativas como o Programa Desenvolve (Grupo Boticário), Decola Tech (Avanade) e cursos voltados para desenvolvimento backend na Cubos Academy. Nessas oportunidades, pude aplicar meus conhecimentos em projetos reais, como um painel de monitoramento de dados de saúde e uma ferramenta de conversão de arquivos com React e Python.

                Valorizo o aprendizado contínuo, o trabalho em equipe e a criação de soluções que façam sentido na prática. Busco crescer como desenvolvedor, contribuindo com projetos eficientes, bem estruturados e com foco no usuário.</p>
            </div>
            
        </main>
    );
}