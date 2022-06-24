import { useState} from "react";
import { Listar, Novo} from "./sla.js"
import "./App.scss"

export default function Inicial ( ) {

    const [Anime, setAnime] = useState("")

    async function ListarAnimes() {
      const resp = await Listar()
      setAnime(resp)
    }

    async function NovoAnime() {
      if(!Anime.trim()){
          alert('Digite um texto valido!');
      }else{
          const resposta = await Novo(Anime);
          setAnime('');
          alert('Anime cadastrado com sucesso!');
      }
  }

  return(
    <div className="tudo2">
      <div> Animes </div>
      <input onChange={e => setAnime(e.target.value)}></input> <button onClick={NovoAnime}> Postar</button>

      <div> <button onClick={ListarAnimes}>
        Ver Todos
        </button></div>
    <div>
    </div>
        
    </div>
  );
}