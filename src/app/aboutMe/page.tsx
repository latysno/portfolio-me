import Header from "../components/Header";
import Image from "next/image";

export const metadata = {
    title: 'Sobre mim',
    description: 'Fale comigo sobre projetos, dúvidas e consultorias.',
  };
  

export default function AboutMePage(){
    return(
        <main>
            <Header/>

            <h1 className="m-10 font-normal text-xl">&lt; &nbsp; Sobre Mim &nbsp; &gt;</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="flex-shrink-0">
                    <figure className="flex justify-center ">
                        <Image
                            src="/img/eu.jpg"
                            alt="Foto de Álvaro Luís"
                            width={250}
                            height={250}
                            className="rounded-lg shadow-lg object-cover border-2 border-gray-300 dark:border-gray-600"
                            loading="lazy"
                        />
                    </figure>
                </div>
                <div className="flex-1  prose prose-lg dark:prose-invert max-w-prose text-center md:text-left">

                    <p>
                        Sou Álvaro Luís, estudante de Sistemas de Informação e apaixonado por desenvolvimento de software. Ao longo da minha formação, venho explorando diferentes áreas da tecnologia, com experiências práticas em projetos que envolvem tanto frontend quanto backend.
                    </p>
                    
                    <p className="pt-4">
                        Já participei de iniciativas como o Programa Desenvolve (Grupo Boticário), Decola Tech (Avanade) e cursos voltados para desenvolvimento backend na Cubos Academy. Nessas oportunidades, pude aplicar meus conhecimentos em projetos reais, como um painel de monitoramento de dados de saúde e uma ferramenta de conversão de arquivos com React e Python.
                    </p>
                    
                    <p className="pt-4">
                        Valorizo o aprendizado contínuo, o trabalho em equipe e a criação de soluções que façam sentido na prática. Busco crescer como desenvolvedor, contribuindo com projetos eficientes, bem estruturados e com foco no usuário.
                    </p>
                </div>
            </div>
            
            
        </main>
    );
}