import Header from "../components/Header";
import ChatBot from '../components/ChatBot';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const metadata = {
    title: 'Contato',
    description: 'Fale comigo sobre projetos, dúvidas e consultorias.',
  };
  

export default function ContactPage(){
    return(
        <main className="flex flex-col min-h-screen">
            <Header/>
            <h1 className="m-10 font-normal text-xl">&lt; &nbsp; Contato &nbsp; &gt;</h1>
            <div className="flex-1 flex items-center justify-center">
                <ChatBot />
            </div>
            <div className="flex gap-4 justify-center mb-16">
             
              <a className="p-2 bg-[#FFFFFF] rounded" href="https://www.linkedin.com/in/%C3%A1lvarolu%C3%ADs/" target="blank"><LinkedInIcon className="text-black" /></a>

              <a className="p-2 bg-[#FFFFFF] rounded" href="https://github.com/latysno" target="blank"><GitHubIcon className="text-black" /></a>

              <a className="p-2 bg-[#FFFFFF] rounded" href="https://mail.google.com/mail/?view=cm&fs=1&to=alvaroluis.dev@gmail.com&su=Contato"
            target="_blank" ><EmailIcon className="text-black" /></a>


              
            </div>
        </main>
    );
}