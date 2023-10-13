
import './styles.css'
import { useState } from 'react';
import * as searchProfile from '../../services/searchProfile';

import { Link } from 'react-router-dom';

export default function DisplayBusca() {

    const [id, setId] = useState('');
    const [data, setData] = useState({});

    const postData = () => {
        searchProfile.findByProfileNickName(id)
        .then(response => {
           // console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);

        });
    }

    console.log(data);

    return (
        <>
        <section>
            <div className="container-display">
                <h3 className="main-text-display">Encontre um Perfil Github</h3>
                {/* <form onSubmit={useHandleFormSubmit}> */}
                <form>
                    <div>
                        <input
                    
                            type="text"
                            placeholder="Nome do Perfil"
                            name="id"
                            value={id}
                            className="nomePerfil"
                            // onChange={handleInputChange}>
                            onChange={(e) => setId(e.target.value)}>

                        </input>
                    </div>
                </form>

                <div className="btn-encontrar">
                    <Link to="/profile">
                <button onClick={postData} type="submit" className="btn-search">Encontrar</button>
                </Link>
                </div>

            </div>
        </section>

        </>
    );
}