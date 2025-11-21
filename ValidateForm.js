import React, { useState } from 'react'
import { Eye } from 'lucide-react';

function ValidateForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All Fields are required!");
            return;
        }
        if (!email.includes('@')) {
            setError("Enter a valid email with '@' ");
            return;
        }

        if (password.length < 6) {
            setError("Enter At least 6 character")
        }
        setError("");
        alert(`Form Submitted Successfully\n Email : ${email}\n Password : ${password}`);
    }

    return (
        <div style={{ justifySelf: "center", marginTop: "130px" }}>
            <h2 style={{ margin: "50px 0px", textAlign: "center" }}>Basic From</h2>
            <form onSubmit={handleSubmit}>
                <input type='email'
                    value={email}
                    placeholder='Enter Your Email..'
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "8px 12px", fontWeight: "bold" }}
                />
                <br /><br /><br />
                <input type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "8px 12px", fontWeight: "bold" }}
                />&nbsp;&nbsp;
                {error && <p style={{ color: "red" }}>{error}</p>}
                <br /><br /><br />
                <button type='submit' style={{ padding: "8px 12px", fontWeight: "bold", borderRadius: "5px", marginLeft: "60px" }}>Submit</button>
            </form>
        </div>
    )
}

export default ValidateForm
