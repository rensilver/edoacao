import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo-edoacao.png';


const Home = () => {
    return (
        <div id="page-home">
        <div className="content">
            <header>
            <img src={logo} alt="Edoação" />
            </header>
            <main>
                <h1>Doe a quem precisa.</h1>
                <p>Um marketplace que ajuda pessoas a praticarem a caridade.</p>
                <Link to="/create-point">
                    <span>
                        <FiLogIn />
                    </span>
                    <strong>Cadastre um local de doação</strong>
                </Link>
            </main>
        </div>
    </div>
    )
}

export default Home;