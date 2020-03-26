import React, {useState , useEffect } from "react";
import { Link  , useHistory } from "react-router-dom";
import { FiPower  , FiTrash2} from 'react-icons/fi';


import logo from '../../assets/logo.svg'
import api from '../../services/api'


import './styles.css'
export default function Profile(){

    const [incidents ,setIncidents] = useState([]);


    const history= useHistory()
    const ongId = localStorage.getItem('ongId'); 
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile' , {
            headers: {
                Authorization : ongId,
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    } , [ongId]);


    async function handleDeleteIncidents(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization : ongId,
                }
            });

            setIncidents(incidents.filter(itens => itens.id !== id));
        } catch (err) {
            alert("Erro ao deletar cado , tente novamente")
        }
    }


    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }
    return(


        <div className="profile-container">
            <header>
                <img src={logo} alt="be the hero"/>
                <span>Bem vindo , {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <ul>
                {incidents.map(itens => (
                    <li key={itens.id}>
                        <strong> Caso:</strong>
                            <p>{itens.title}</p>

                        <strong>Descrição:</strong>
                            <p>{itens.description}</p>

                        <strong>Valor:</strong>
                            <p>{new Intl.NumberFormat('pt-BR' ,
                             {style: 'currency' , currency: 'BRL'}).format(itens.value)}
                            </p>

                        <button onClick={() => handleDeleteIncidents(itens.id)} type= "button">
                            <FiTrash2 size={20} color = "#a8a8b3" />
                        </button>
                    </li>
                ))}                
            </ul>
        </div>
    )
}