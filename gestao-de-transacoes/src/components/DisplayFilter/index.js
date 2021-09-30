import { Container } from "./style";
import { useState } from "react";

const DisplayFilter = ({ transactions }) => {
  const [display, setDisplay] = useState(true);

  const filterEntrada = transactions.filter((e) => e.quantity > 0);
  const filterSaidas = transactions.filter((e) => e.quantity < 0);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <Container>
      <h1>Filtar lista</h1>

      {display ? (
        <div>
          <button onClick={handleClick}>mostrar saidas</button>
          {filterEntrada.map((item) => (
            <li>
              nome:{item.name} | quantidade: {item.quantity} | valor:
              {" " + item.price.toFixed(2)}
            </li>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>mostrar entradas</button>
          {filterSaidas.map((item) => (
            <li>
              nome:{item.name} | quantidade: {item.quantity} | valor:
              {" " + item.price.toFixed(2)}
            </li>
          ))}
        </div>
      )}
    </Container>
  );
};

export default DisplayFilter;
