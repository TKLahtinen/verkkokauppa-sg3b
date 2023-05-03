import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import  {useForm} from 'react-hook-form'

export default function Signin() {
    const {register, handleSubmit} = useForm();
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState()

    function onSubmit(data){
        axios.post('http://localhost:3001/phpbackend/SignIn.php', data)
        .then(resp => {
            setMsg(resp.data)
        })
        .catch(error => {
            setMsg("Kirjautuminen epäonnistui")
        })
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='m-3'>
                <label className="form-label">Käyttäjänimi</label>
                <input className='form-control' {...register('username')}/>
                <label className="form-label">Salasana</label>
                <input className='form-control' type='password' {...register('password')}/>
        
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <span>{msg}</span>
    </div>
  )
}
