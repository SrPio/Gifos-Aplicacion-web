import { useEffect, useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [search, setSearch] = useState("");
  const [gifData, setGifData] = useState([]);
  const [mostrarAC, setMostrarAC] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [gifSugerido, setGifSugerido] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=nLrMw4CPGvK7agSzjmlE2iReRZwmPyhf&q=${search}&limit=25&offset=0&rating=g&lang=en`;

    const service = fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // para mostrar el loading
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setMostrarAC(false);
        }, 800);
        //
        setGifData(res.data);
      })
      .catch((error) => {
        console.log("algo salio mal");
      });
  }, [search]);

  // Autocompleado
  useEffect(() => {
    if (inputValue.length > 2) {
      setMostrarAC(true);
    } else {
      setMostrarAC(false);
    }
    console.clear();
    let apiKey = "nLrMw4CPGvK7agSzjmlE2iReRZwmPyhf";
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${inputValue}`
    );
    /*setLoading(true);*/
    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSugerencias(res.data);
        /*setLoading(false);*/
      })
      .catch((error) => {
        console.log("algo salio mal");
      });
  }, [inputValue]);

  // Trending gifs
  useEffect(() => {
    console.clear();
    let apiKey = "nLrMw4CPGvK7agSzjmlE2iReRZwmPyhf";
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&rating=g`
    );
    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setGifData(res.data);
      })
      .catch((error) => {
        console.log("algo salio mal");
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        gifData,
        mostrarAC,
        setMostrarAC,
        inputValue,
        setInputValue,
        sugerencias,
        setSugerencias,
        gifSugerido,
        setGifSugerido,
        loading,
        setLoading
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
