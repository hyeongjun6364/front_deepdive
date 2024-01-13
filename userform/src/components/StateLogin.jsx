import Input from "./Input";
import { isEmail,isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput";

export default function StateLogin() {
  const {value:emailValue, handleInputChange:handleEmailChange, handleInputBlur:handleEmailBlur, hasError:emailhasError} = useInput('',(value) => {
    isEmail(value) && isNotEmpty(value)
  });
  const {value:passwordValue, handleInputChange:handlePasswordChange, handleInputBlur:handlePsswordBlur, hasError: passwordHasError} = useInput('',(value) => hasMinLength(value,6));
  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailhasError || passwordHasError){
      return;
    }
    console.log("Submit")
    console.log("email State: ", emailValue)
    console.log("Password state: ", passwordValue)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="Email" name="Email"  onChange={handleEmailChange}
            value={emailValue} onBlur={handleEmailBlur} error={emailhasError && 'Please enter a vaild email!'}/>
        
        <Input label="Password" id="Password" name="Password"  onChange={handlePasswordChange}
            value={passwordValue} onBlur={handlePsswordBlur}
            error={passwordHasError && 'Please enter a vaild Password!'}/>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
