import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginInfo = {
        email: formValues.email,
        password: formValues.password,
      };
      const BASE_URI = "http://localhost:4000/auth/login";
      const res = await axios.post(BASE_URI, loginInfo);
      navigate("/rides");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="signin flex-col max-container">
      <h1>Sign In</h1>
      <div className="form-wrapper centered">
        <form className="wrapper" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              required
            />
          </div>
          <button className="btn-primary" disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
        <Link to="/auth/register">
          <button className="btn-primary">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
