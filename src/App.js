import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import axios from "axios";

const App = () => {
  const [chars, setChars] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const charsPromise = axios("https://swapi.dev/api/people/");
    const filmssPromise = axios("https://swapi.dev/api/films/");
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, "Dülay");
    });

    Promise.all([charsPromise, filmssPromise, promise3]).then((values) => {
      console.log(values);
      setChars(values[0].data);
      setFilms(values[1].data[0].results);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {loading && <h1>Yükleniyor...</h1>}
      {!loading && (
        <div>
          <Karakter chars={chars} films={films} />
        </div>
      )}
    </div>
  );
};

export default App;
