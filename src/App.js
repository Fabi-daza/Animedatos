import { useState} from "react";
import "./App.css";
import banner from "./img/banner.jpg";
import Cards from "./components/Cards/Cards"
import Filtro from "./components/Filtro/Filtro";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Miapi from "./components/Apis/Miapi";
import Buscador from "./components/Buscador/Buscador";

function App() {
  const [dato, setDato] = useState([])
  const [search, setSearch] = useState("")
  const [orden, setOrden] = useState("")
  
  return (
    <>
      <div className="banner">
        <img src={banner} alt=""></img>
      </div>
      <Buscador setSearch={setSearch}
      setOrden ={setOrden}/>
      <Filtro dato = {dato}
        search = {search}
        orden = {orden} />
      <section className="m-5">
        <h2 className="text-center m-5"> Encuentra todos los datos de tu anime favorito </h2>
        <Cards dato = {dato} orden ={orden}/>
      </section>
      <Miapi setDato= {setDato}/>
    </>
  );
}

export default App;
