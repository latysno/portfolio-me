import GitHubIcon from '@mui/icons-material/GitHub';
import { repositorios } from "../dataRepositorios";

interface CardProjectProps {
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

export default function CardProject({ nome, descricao, imagem, link }: CardProjectProps) {
  return (
    <div className="bg-[#0D201F] rounded-xl border border-[#3F3D3D] w-80 p-4 flex flex-col items-center space-y-4 shadow-lg">
      <img
        src={imagem}
        alt={nome}
        className="rounded-md w-full h-48 object-cover"
      />
      <div className="text-center text-white">
        <h2 className="text-lg font-semibold">{nome}</h2>
        <p className="text-sm mt-2 text-gray-300">{descricao}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-md hover:bg-gray-200 transition"
      >
        <GitHubIcon  className="text-black " />
      </a>
    </div>
  );
}
