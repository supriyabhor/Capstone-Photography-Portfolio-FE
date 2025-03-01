import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "final" && password === "project") {
      // Login successful, redirect to photographer page
      // window.location.href = "/photographer";
       nav('/photographer');
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /> <br />
        
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /> <br />
        
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}