import Header from '../Header';
import InputProfile from '../InputProfile';
import gihHubLogo from '../../assets/github-mark-white.svg';


import './styles.css';

export default function NotFound() {

    return (
        <section>
            
            <Header />
            <InputProfile />
            <div className="container-display-busca">
                <img src={gihHubLogo} />
                <h3>Usuário Inexistente!</h3>
            </div>

        </section>
    );
}