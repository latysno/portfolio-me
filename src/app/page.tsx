import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";

export default function Home() {
  return (
      <main>
        <Header/>
        <ThemeButton/>
        <div className="flex">
        <div className="">
          <h1 className="font-md text-5xl">Álvaro Luís</h1>
          <p>Desenvolvedor</p>
          <div className="flex gap-4">
            <button className="p-4 bg-[#FFFFFF] rounded"></button>
            <button className="p-4 bg-[#FFFFFF] rounded"></button>
          </div>
        </div>
        <div>
          <img src="./src/img/068a6d62aebf5e777f0f2833ee6f6c2e.jpg" alt="" />
        </div>

        </div>
      </main>
    
  );
}
