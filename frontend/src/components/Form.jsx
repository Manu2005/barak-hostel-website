import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isLogin = method === "login";
    const name = isLogin ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (isLogin) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-bg">
            <form onSubmit={handleSubmit} className="form-container">
                <h2>{name}</h2>
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {/* {loading && <LoadingIndicator />} */}
                <button className="form-button" type="submit" disabled={loading}>
                    {loading ? "Please wait..." : name}
                </button>
                <p>
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <Link to="/register">Register</Link>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                        </>
                    )}
                </p>
            </form>
        </div>
    );
}

export default Form;