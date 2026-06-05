// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../services/user-service";
// import "../styles/login-page.css";

// function LoginPage() {
//   const [email, setEmail] = useState("admin@gmail.com");
//   const [password, setPassword] = useState("password");
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function handleLogin(event) {
//     event.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const data = await login(email, password);

//       localStorage.setItem("token", data.response.body.token);
//       localStorage.setItem("email", data.response.body.email);
//       localStorage.setItem("role", data.response.body.role);

//       if (data.response.body.role === "ADMIN") {
//         navigate("/reports");
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error(error);
//       setError("Login failed. Please check your email and password.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <div className="login-container">
//         <div className="login-card">
//           <h2 className="login-title">Welcome back</h2>
//           <p>Please enter your details.</p>

//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email"
//               />
//               <label htmlFor="email">Email:</label>
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter password"
//               />
//               <label htmlFor="password">Password:</label>
//             </div>
//             <button className="login-button" type="submit" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <p className="register-text">
//               New user?{" "}
//               <span
//                 onClick={() => navigate("/register")}
//                 className="register-link"
//               >
//                 Create an account
//               </span>
//             </p>

//             {error && <p className="error">⚠ {error}</p>}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user-service";
import AuthForm from "../components/AuthForm";

function LoginPage() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.response.body.token);
      localStorage.setItem("email", data.response.body.email);
      localStorage.setItem("role", data.response.body.role);

      navigate(data.response.body.role === "ADMIN" ? "/reports" : "/dashboard");

    } catch (err) {
      setError("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <AuthForm
        type="login"
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
        loading={loading}
        error={error}
      />

      <p className="auth-switch">
        Join us Now!{" "}
        <span onClick={() => navigate("/register")}>
          Create account
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
