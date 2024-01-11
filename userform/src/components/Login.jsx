import { useState } from "react";

export default function Login() {
 // const [enteredEmail, setEnteredEmail] = useState('');
 // const [enteredPassword, setEnteredPassword] = useState('');
 const [enterValues,setEnterValues] =useState({
  Email:'',
  Password:'',

 }) 
 const handleInputChange=(identifier, value)=>{
    setEnterValues(preValues=> ({
      ...preValues,
      [identifier]: value
      
    }))
 }
 const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Submit")
    console.log("email State: ", enterValues.Email)
    console.log("Password state: ", enterValues.Password)
  }
  const handleEmailChange=(event)=>{
    setEnteredEmail(event.target.value)
    
  }
  const handlePassworedChange=(event)=>{
    setEnteredPassword(event.target.value)

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label  htmlFor="email">Email</label>
          <input onChange={(event) => handleInputChange('Email',event.target.value)} value={enterValues.Email} id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" value={enterValues.Password} onChange={(event) =>handleInputChange('Password',event.target.value)} type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
