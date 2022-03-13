import "./styles.css";
import Header from "./Componentes/header/Header";
import Search from "./Componentes/search/Search";
import Results from "./Componentes/results/Results";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsdarkMode] = useState(false);

  const manejoDarkMode = () => {
    setIsdarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} manejoDarkMode={manejoDarkMode} />
      <Search isDarkMode={isDarkMode} />
      <Results isDarkMode={isDarkMode} />
    </div>
  );
}
