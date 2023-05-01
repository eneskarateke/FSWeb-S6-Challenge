import Accordeon from "./Accordeon";
import Filmler from "./Filmler";

function Karakter({ chars, films }) {
  return (
    <div>
      {chars.map((char, i) => (
        <Accordeon key={i} title={char.name}>
          <p>
            <span>Gender: </span>
            {char.gender}
          </p>
          <p>
            <span>Height: </span>
            {char.height}
          </p>
          <p>
            <span>Mass: </span>
            {char.mass}
          </p>
          <p>
            <span>Birth Year: </span>
            {char.birth_year}
          </p>
          <p>
            <span>Eye Color: </span>
            {char.eye_color}
          </p>
          <p>
            <span>Hair Color: </span>
            {char.hair_color}
          </p>
          <p>
            <span>Skin Color: </span>
            {char.skin_color}
          </p>
          <p>
            <span>Appears in: </span>
          </p>
          <Filmler char={char} films={films} />
        </Accordeon>
      ))}
    </div>
  );
}

export default Karakter;
