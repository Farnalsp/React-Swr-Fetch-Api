import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import "./App.css";

// const fetcher = (url) => axios.get(url).then(res => res.data);

export default function App() {
  const [setError, bulbasaur, setBulbasaur] = useState({});

  // const { data: pokemon, error } = useSWR("https://pokeapi.co/api/v2/pokemon/1", fetcher);

  useEffect(() => {
    //   fetch("https://pokeapi.co/api/v2/pokemon/1")
    //     .then((res) => res.json())
    //     .then((res) => setBulbasaur(res));
    // }, []);

    /*INI PADA PENGGUNAAN AXIOS */

    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => {
        setBulbasaur(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Halo, Selamat Datang di Jayjay API</h1>
      <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
      <hr />
      <h1 style={{ textTransform: "capitalize" }}>{bulbasaur?.name}</h1>
      <img src={bulbasaur?.sprites?.other["official-artwork"].front_default} alt={bulbasaur?.name} />
      {/*INI PADA PENGGUNAAN SWR */}
      {/* <h1>Halo, Selamat Datang di Jayjay API</h1>
      <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
      <hr />
      <h1 style={{ textTransform: "capitalize" }}>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt={pokemon?.name} /> */}
    </div>
  );
}
