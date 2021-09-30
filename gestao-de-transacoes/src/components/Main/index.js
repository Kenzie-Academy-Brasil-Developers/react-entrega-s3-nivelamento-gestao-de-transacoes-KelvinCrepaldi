import DisplayList from "../DisplayList";
import { Container } from "./style";
import RegistrationForm from "../RegistrationForm";
import { useState } from "react";
import DisplayFilter from "../DisplayFilter";
import Calculation from "../Calculation";

const Main = () => {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <Container>
      <h1>Gestão de transações</h1>
      <RegistrationForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Calculation transactions={transactions} />
      <DisplayList transactions={transactions}></DisplayList>
      <DisplayFilter transactions={transactions}></DisplayFilter>
    </Container>
  );
};

export default Main;
