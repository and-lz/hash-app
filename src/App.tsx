import React from 'react';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Simule sua antecipação</h1>
        <Input required label="Informe o valor da renda" />
        <Input required label="Em quantas parcelas" addon="Máximo de 12 parcelas" />
        <Input required label="Informe o percentual de MDR" />
      </div>
      <div>
        <h2>Você receberá:</h2>
        <p>Amanhã: R$ 0</p>
        <p>Em 15 dias: R$ 0</p>
        <p>Em 30 dias: R$ 0</p>
        <p>Em 90 dias: R$ 0</p>
      </div>
    </div>
  );
}

export default App;
