import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [showPass, setShowPass] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErr("All fields are required!");
            return;
        } else if (!email.includes('@')) {
            setErr("Please enter a valid email.");
            return;
        } else if (password.length < 6) {
            setErr("Password must be at least 6 characters.");
            return;
        }

        setErr("");
        alert(`Form Submitted Successfully!\nEmail: ${email}\nPassword: ${password}`);
    };

    const showHidePassword = () => {
        setShowPass(!showPass);
    };


    return (
        <div>
            <form onSubmit={submitForm} style={{ justifySelf: "center", marginTop: "100px" }}>
                <h2 style={{ textAlign: "center" }}>Login Form</h2>

                <input
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "6px 14px" }}
                />
                <br /><br />

                <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "6px 14px" }}

                />
                <span onClick={showHidePassword} style={{ cursor: "pointer", marginLeft: "5px" }}>
                    {showPass ? <Eye size={15} /> : <EyeOff size={15} />}
                </span>

                <br /><br />
                <button type="submit" style={{ padding: "6px 14px", marginLeft: "55px" }}
                >Submit</button>

                {err && <p style={{ color: "red" }}>{err}</p>}
            </form>
        </div >
    );
}

export default Login;
