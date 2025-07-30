import { useState } from "react"
import Header from "./components/header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"


function App() {
  const [initialValue, setInitialValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = initialValue.duration > 0;
  function handleValuChange (newValue) {
    setInitialValue((prevValue) =>({
      ...prevValue,
      ...newValue,
    }))
  } 
  return (
    <>
    <Header />
    <div id="user-input">
            <div className="input-group">
              <UserInput name = {"initialInvestment"} label={"initial investment"} value = {initialValue.initialInvestment} onChangeValue={handleValuChange} />
              <UserInput name = {"annualInvestment"} label={"annual investment"} value = {initialValue.annualInvestment} onChangeValue={handleValuChange}/>
            </div>
            <div className="input-group">
              <UserInput name = {"expectedReturn"} label={"expected return"} value = {initialValue.expectedReturn} onChangeValue={handleValuChange}/>
              <UserInput name = {"duration"} label={"duration"} value = {initialValue.duration} onChangeValue={handleValuChange}/>
            </div>
    </div>
    {inputIsValid ? <Results values={initialValue}/> : <p className="center">please enter a duration greater than 0</p>}
    </>
  )
}

export default App
