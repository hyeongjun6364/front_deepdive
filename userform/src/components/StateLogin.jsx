import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enterValues, setEnterValues] = useState({
    Email: '',
    Password: '',

  })
  const [didEdit, setDidEdit] = useState({
    Email:false,
    Password:false,
  })
  const handleInputChange = (identifier, value) => {
    setEnterValues(preValues => ({
      ...preValues,
      [identifier]: value

    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]:false,
    }))
  }
  function handleInputBlur(Identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [Identifier]:true
    }))
  }
  const emailIsInvalid = didEdit.Email  && !enterValues.Email.includes('@');
  const PasswordIsInvalid = didEdit.Password  && !enterValues.Password.trim().length < 6;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit")
    console.log("email State: ", enterValues.Email)
    console.log("Password state: ", enterValues.Password)
  }
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value)

  }
  const handlePassworedChange = (event) => {
    setEnteredPassword(event.target.value)

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="Email" name="Email"  onChange={(event) => handleInputChange('Email', event.target.value)}
            value={enterValues.Email} onBlur={()=>handleInputBlur('Email')} error={emailIsInvalid && 'Please enter a vaild email!'}/>
        
        <Input label="Password" id="Password" name="Password"  onChange={(event) => handleInputChange('Password', event.target.value)}
            value={enterValues.Password} onBlur={()=>handleInputBlur('Password')}
            error={PasswordIsInvalid && 'Please enter a vaild Password!'}/>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
