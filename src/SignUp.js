import { useState } from "react";
import "./SignUp.css";

const SignUp = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [repPass, setRepPass] = useState('')


  const handleSubmit = e => {
    e.preventDefault();

    console.log('Nazwa użytkownika ' + username + ' waliduje się')
    console.log('Nazwa email ' + email + ' waliduje się')
    console.log('Hasło ' + password + ' waliduje się')
    console.log('Hasło 2 ' + repPass + ' waliduje się')
  }

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User name"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => { setPass(e.target.value) }}
          value={password}
        />

        <input
          type="text"
          name="repeatPassword"
          placeholder="Repeat password"
          value={repPass}
          onChange = {(e) => {setRepPass(e.target.value)}}
        />

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

// 1.walidacja jednego
// bez bialyach znakow i wymagane 4 litery
// nie pozwalaj wyslac form 