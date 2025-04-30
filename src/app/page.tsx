import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header/>

      <body>
        <p className="inline-flex bg-cyan-900 opacity-70 rounded-full px-3 py-2 text-sm font-semibold text-cyan-500">>_ Desenvolvedor Fullstack</p>
        <h1 className="font-bold">Olá, me chamo Álvaro Luís</h1>
        <p>Transformando ideias em código e problemas em soluções digitais.</p>
      </body>
    </div>
  );
}
