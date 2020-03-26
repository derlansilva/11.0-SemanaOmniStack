import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom'
import './styles.css'


import heroes from  '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import api from '../../services/api'


function Login(){
    const [id , setId]= useState('')
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        try {
            
            const resposta = await api.post('sessions' , {id})

            localStorage.setItem('ongId' , id);
            localStorage.setItem('ongName' , resposta.data.name)
            history.push("/profile")
        } catch (error) {
            alert("Falha no login , verifique os dados e tente novamente")
            
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="be te hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e=> setId(e.target.value)}/>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tem cadastro?
                    </Link>

                </form>
            </section>

            <img src={heroes} alt= "Heroes"/>
        </div>
    )
}

export default Login;