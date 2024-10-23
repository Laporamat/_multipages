import "./Login.css";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { verifyUser } from '../../data/users';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login({ setToken, setRole }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="Login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        aria-describedby="usernameHelpBlock"
        placeholder="User"
        ref={usernameRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        aria-describedby="passwordHelpBlock"
        placeholder="Password"
        ref={passwordRef}
      />
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const username = usernameRef.current.value.trim();
          const password = passwordRef.current.value.trim();

          const userInfo = verifyUser(username, password);

          usernameRef.current.value = '';
          passwordRef.current.value = '';

          if (userInfo === null) {
            alert('Wrong username or password');
            usernameRef.current.focus();
            passwordRef.current.focus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
