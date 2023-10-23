import './styles.css';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function DisplayHome() {

    return (
        <> 
        <section>
            <div className="text-display-home">
                <h1>Desafio GitHub API</h1>
                <h3>DevSuperior - Escola de Programação</h3>
                <Link to="/search">
                    <Button text="Começar"></Button>
                </Link>
            </div>
        </section>
        </>
    );
    
}

