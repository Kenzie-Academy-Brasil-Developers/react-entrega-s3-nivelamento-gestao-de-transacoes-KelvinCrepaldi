import { Container } from "./style";

const DisplayList = ({ transactions }) => {
  return (
    <Container>
      <h1>Lista de movimentações</h1>
      <ul>
        {transactions.map((item) => (
          <li>
            nome:{item.name} | quantidade: {item.quantity} | valor:
            {" " + item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default DisplayList;
