import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { useState } from 'react';
import Results from './components/Results';
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expecteReturn: 6,
    duration: 10
})
function hadnleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue
      }
  })
}
const inputIsValid = userInput.duration >= 1;
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={hadnleChange}/>
      {inputIsValid ? <Results input={userInput}/> : null}
    </div>

  );
}

export default App;
