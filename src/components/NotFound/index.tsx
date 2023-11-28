import './styles.css';
import Header from '../Header';
import InputProfile from '../InputProfile';
import gihHubLogo from '../../assets/github-mark-white.svg';
import { useState } from 'react';


type validity = {
    valid: boolean
}


export default function NotFound() {

    const [ valid, setValid] = useState<validity>();
    function handleSearch(v: boolean) {

        setValid(() => ({
            valid: v
        })
        );
        console.log(valid)
    }

    return (
        <section>

            <Header />
            <InputProfile onSearch={handleSearch} />
            {
                !valid &&
            <div className="container-display-busca">
                <img src={gihHubLogo} />
                <h3>Usuário Inexistente!</h3>
            </div>
}

        </section>
    );
}