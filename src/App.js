import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Karakter from "./components/Karakter";




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [karakterler, setKarakterler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://swapi.dev/api/people/");
      console.log("result -->",result.data)
      setKarakterler(result.data);
    };

    fetchData();
  }, []);
  


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      
      <Karakter data={karakterler}/>
    
    </div>
  );
}


export default App;
