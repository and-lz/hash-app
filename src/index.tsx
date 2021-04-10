import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CalculatorPage from './pages/Calculator/Calculator'

ReactDOM.render(
  <React.StrictMode>
    <CalculatorPage antecipationDays={[1, 15, 30, 90]} />
  </React.StrictMode>,
  document.getElementById('root'),
)
