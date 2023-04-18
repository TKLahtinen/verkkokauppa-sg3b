import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("login.php", { email, password });
            const { accessToken } = response.data;
            localStorage.setItem("accessToken", accessToken);
            window.location.href = "login";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Sähköposti" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="Salasana" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Kirjaudu sisään</button>
        </form>
    );
};

export default LoginForm;

