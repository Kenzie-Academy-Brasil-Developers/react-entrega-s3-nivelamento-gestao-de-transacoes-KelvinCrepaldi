import { Container, Info } from "./style";

const Calculation = ({ transactions }) => {
  const listaDeSaida = transactions.filter((fruta) => fruta.quantity < 0);

  const totalDeSaida = listaDeSaida.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
  const totalDeEntrada = transactions
    .filter((fruta) => fruta.quantity > 0)
    .reduce((previous, current) => previous + current.quantity, 0);

  const totalVenda = listaDeSaida
    .reduce((previous, current) => previous + current.price, 0)
    .toFixed(2);
  return (
    <Container>
      <h1>Informações:</h1>
      <label>Total de frutas vendidas:{` ${0 - totalDeSaida}`}</label>
      <label>Total de frutas recebidas: {` ${totalDeEntrada}`}</label>
      <label>Valor total de venda: {` ${totalVenda}`}</label>
    </Container>
  );
};

export default Calculation;
