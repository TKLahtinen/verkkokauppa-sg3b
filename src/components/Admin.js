import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

export default function Admin({url}) {

  
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  const isAdmin = userData && userData[0].rights === 'a'

  const { register, handleSubmit }  = useForm()
  const [messageTr, setMessageTr] = useState('')
  const [messageAi, setMessageAi] = useState('')
  const [messageDi, setMessageDi] = useState('')

  
  function addCategory(data) {
        axios.post(url + 'addCategory.php', data)
        .then(res => {
            const data = res.data
            setMessageTr(data.message)
            
        })
        .catch(err => {
            setMessageTr(err.message)
        
        })
  }
  
  function addItem(data) {
        axios.post(url+'addProduct.php', data)
        .then(res => {
            const data = res.data
            setMessageAi(data.message)
            
        })
        .catch(err => {
            setMessageAi(err.message)
        
        })
  }
  
  function deleteItem(data) {
        axios.post(url+'deleteItem.php', data)
        .then(res => {
            const data = res.data
            setMessageDi(data.message)
            
        })
        .catch(err => {
            setMessageDi(err.message)
        
        })
  }
  
  return (
    <div className='container'>
      {isAdmin ? (
        <div className="accordion m-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Lisää tuoteryhmä
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <form onSubmit={handleSubmit(addCategory)}>
                    <div className="py-3">
                    <input type="text" className="form-control" placeholder="Tuoteryhmän nimi" {...register('trnimi')}/>
                    </div>
                    <div className="py-3">
                    <input type="number" className="form-control" placeholder="Tuoteryhmän id" {...register('trid')}/>
                    </div>
                    <span>{messageTr}</span>
                    <div className="messagebtn text-center">
                    <button type="submit">Lisää</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lisää tuote
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <form onSubmit={handleSubmit(addItem)}>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Nimi" {...register('nimi')}/>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Kuva" {...register('img')}/>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Valmistaja" {...register('valmistaja')}/>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Toimittaja" {...register('toimittaja')}/>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="number" className="form-control" placeholder="Hinta" {...register('hinta')}/>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="number" className="form-control" placeholder="Tuoteryhmä id" {...register('trid')}/>
            </div>
            <div className="form-group" style={{ marginTop: '30px' }}>
              <textarea className="form-control" rows="5" placeholder="Kuvaus" {...register('kuvaus')} />
            </div>
            <span>{messageAi}</span>
            <div className="messagebtn text-center">
              <button type="submit">Lisää</button>
            </div>
          </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Poista tuote
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <form onSubmit={handleSubmit(deleteItem)}>
                    <div className="py-3">
                    <input type="number" className="form-control" placeholder="Tuoteryhmän id" {...register('tuoteid')}/>
                    </div>
                    <span>{messageDi}</span>
                    <div className="messagebtn text-center">
                    <button type="submit">Poista</button>
                    </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div>
          <h2>Access Denied</h2>
          <p>You do not have admin rights.</p>
        </div>
      )}
    </div>
  )
}