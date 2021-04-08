import React from 'react';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Input required label="Informe o valor da renda" />
      <Input required label="Em quantas parcelas" addon="Máximo de 12 parcelas" />
      <Input required label="Informe o percentual de MDR" />
    </div>
  );
}

export default App;
