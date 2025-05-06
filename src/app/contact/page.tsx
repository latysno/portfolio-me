import Header from "../components/Header";
import ChatBot from '../components/ChatBot';

export const metadata = {
    title: 'Contato',
    description: 'Fale comigo sobre projetos, dúvidas e consultorias.',
  };
  

export default function ContactPage(){
    return(
        <main>
            <Header/>
            
            <ChatBot />
        </main>
    );
}