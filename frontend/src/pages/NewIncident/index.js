import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea type="" placeholder="Descrição" style={{height: 270}}/>
                    <input type="" placeholder="Valor em reais"/>
                    <div className="button-next">
                        <button className="cancel" style={{width: 242}}>Cancelar</button>
                        <button className="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default NewIncident;