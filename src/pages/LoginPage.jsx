import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user-service";
import "../styles/login.css";

export default function LoginPage() {
    const [email, setEmail] = useState("abu.garcia@gmail.com");
    const [password, setPassword] = useState("password");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleLogin(event) {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const data = await login(email, password);

            localStorage.setItem("token", data.response.body.token);
            localStorage.setItem("email", data.response.body.email);
            localStorage.setItem("role", data.response.body.role);

            if (data.response.body.role === "ADMIN") {
                navigate("/reports");
            } else {
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            setError("Login failed. Please check your email and password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title" >Welcome back</h2>
                    <p>Please enter your details.</p>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>
                        <button className="login-button" type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}
