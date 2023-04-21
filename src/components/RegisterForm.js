import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import Switch from 'react-switch';

const BASE_URL = "http://localhost:3001/signin";
const URL_REGISTER = BASE_URL + "register.php";

function RegisterUser() {

    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(data) {
        data.preventDefault();
        axios.post(URL_REGISTER, data)
            .then(resp => {
                setMessage("Käyttäjä nimellä " + data.firstname + " " + data.lastname + " rekisteröity!")
            })
            .catch(error => {
                setMessage("Virhe rekisteröitymisessä");
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Etunimi" value={firstname} onChange={(event) => setFirstname(event.target.value)}/>
                <input type="text" placeholder="Sukunimi" value={lastname} onChange={(event) => setLastname(event.target.value)}/>
                <input type="text" placeholder="Sähköposti" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type="password" placeholder="Salasana" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button type="submit">Kirjaudu sisään</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default RegisterUser;



