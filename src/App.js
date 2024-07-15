import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const alturaMetros = altura / 100; // Convertendo altura para metros
      const imc = peso / (alturaMetros * alturaMetros);
      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Magreza';
      } else if (imc < 24.9) {
        classificacao = 'Normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau I';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau II';
      } else {
        classificacao = 'Obesidade Grau III';
      }

      setResultado({ imc: imc.toFixed(2), classificacao });
    } else {
      setResultado(null);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-5">Calculadora de IMC</h1>
      <Form onSubmit={handleCalcularIMC}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="altura">
            <Form.Label>Altura (cm)</Form.Label>
            <Form.Control
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="peso">
            <Form.Label>Peso (kg)</Form.Label>
            <Form.Control
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Calcular IMC
        </Button>
      </Form>

      {resultado && (
        <Alert variant="info" className="mt-3">
          <p>Seu IMC é: <strong>{resultado.imc}</strong></p>
          <p>Classificação: <strong>{resultado.classificacao}</strong></p>
        </Alert>
      )}
    </Container>
  );
}

export default App;
