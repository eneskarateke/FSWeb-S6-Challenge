// Karakter bileşeniniz buraya gelecek
import React from 'react';
import styled from 'styled-components';

const KarakterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  margin: 10px;
  text-align: center;
  color: cyan;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Collapse = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  color: black;
  max-height: ${props => props.open ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 10px;
  width: 30rem;

`;

function Karakter({data}) {
  const [openIndex, setOpenIndex] = React.useState(null);
  
  // console.log("karakterler: ", data)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <KarakterCard>
      {Array.isArray(data) &&
        data.map((karakter, index) => (
          <div key={index}>
            <Button onClick={() => handleClick(index)}>
              {karakter.name}
            </Button>
            <Collapse open={openIndex === index}>
              <CardBody>
                <p>Height: {karakter.height}</p>
                <p>Mass: {karakter.mass}</p>
                <p>Hair color: {karakter.hair_color}</p>
                <p>Skin color: {karakter.skin_color}</p>
                <p>Eye color: {karakter.eye_color}</p>
                <p>Birth year: {karakter.birth_year}</p>
                <p>Gender: {karakter.gender}</p>
                <p>Films: {karakter.films}</p>
              </CardBody>
            </Collapse>
          </div>
        ))}
    </KarakterCard>
  );
};

export default Karakter;