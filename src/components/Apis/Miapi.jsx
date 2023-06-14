import {useEffect} from "react";

const Miapi = ({ setDato }) => {
  
    const getDatos = async () => {
      const datos = await fetch("https://api.jikan.moe/v4/anime");
      const anime = await datos.json();
      const datosAnime = anime.data;
      setDato(datosAnime);
    }
    
    useEffect(() => {
      getDatos();
    }, []); 

  return ;
};

export default Miapi;
