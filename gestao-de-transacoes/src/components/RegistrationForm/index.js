import { Container } from "./styled";
import { useState } from "react";

const RegistrationForm = ({ transactions, setTransactions }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);

  const handleForm = (type) => {
    const quantityFormat = parseInt(quantity);
    const valueFormat = parseInt(value);
    const nameFormat = name.toLowerCase();

    const transaction = {
      name: nameFormat,
      quantity: quantityFormat,
      price: valueFormat,
    };

    if (type) {
      setTransactions([...transactions, transaction]);
    }

    if (!type) {
      transaction.quantity = 0 - transaction.quantity;
      setTransactions([...transactions, transaction]);
    }

    setName("");
    setQuantity(0);
    setValue(0);
  };
  console.log(transactions);

  const nameChange = (e) => {
    setName(e);
  };

  const quantityChange = (e) => {
    if (e >= 0) {
      setQuantity(e);
    }
  };

  const valueChange = (e) => {
    setValue(e);
  };

  return (
    <Container>
      <h1>Cadastrar entrada e saida:</h1>

      <input
        placeholder="nome"
        type="text"
        value={name}
        onChange={(e) => nameChange(e.target.value)}
      />
      <input
        placeholder="quantidade"
        type="number"
        value={quantity}
        onChange={(e) => quantityChange(e.target.value)}
      />
      <input
        placeholder="valor"
        type="number"
        value={value}
        onChange={(e) => valueChange(e.target.value)}
      />
      <button onClick={() => handleForm(true)}>Entrada</button>
      <button onClick={() => handleForm(false)}>Saida</button>
    </Container>
  );
};

export default RegistrationForm;
