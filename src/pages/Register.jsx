import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();

  //   const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserInfo = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      };
      const BASE_URI =
        "https://park-pass-plus-server-845d186c79ad.herokuapp.com/auth/register";
      const res = await axios.post(BASE_URI, newUserInfo);
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="signin flex-col max-container">
      <h1>
        Create <br /> Your Account
      </h1>
      <div className="form-wrapper centered">
        <form className="wrapper" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Your Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="btn-primary"
            type="submit"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

//   return (
//     <div>
//       <h2>Signup</h2>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formValues.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formValues.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formValues.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
