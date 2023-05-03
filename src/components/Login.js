import React from 'react'
import { set, useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';

export default function Login({url, handleLogin, msg}) {

    const {register, handleSubmit} = useForm();

  return (
    <div className='container'>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className='m-3'>
                <label className="form-label">Käyttäjänimi</label>
                <input className='form-control' {...register('username')}/>
                <label className="form-label">Salasana</label>
                <input className='form-control' type='password' {...register('password')}/>
        
            </div>
            <button type="submit" class="btn btn-primary">Kirjaudu</button>
        </form>
        <span>{msg}</span>
    </div>
  )
}
