// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the home page content.</p>
    </div>
  );
};

const SignUp = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., API call, authentication, etc.)
    // For simplicity, let's just set a flag to indicate successful sign-up
    setLoggedIn(true);
  };

  return (
    <div style={formContainerStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
};

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (e.g., API call, authentication, etc.)
    // For simplicity, let's just set a flag to indicate successful login
    setLoggedIn(true);
  };

  return (
    <div style={formContainerStyle}>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

const formContainerStyle = {
  width: '300px',
  margin: 'auto',
  marginTop: '50px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" render={() => <SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/login" render={() => <Login setLoggedIn={setLoggedIn} />} />
          {loggedIn && <Redirect to="/" />}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
