
import { useParams } from 'react-router-dom';
import './styles.css'
import { useState, useEffect } from 'react';
import * as searchProfile from '../../services/searchProfile';
import Button from '../Button';

type FormPerfil = {
    buscaPerfil: string,
}

export default function DisplayBusca() {

    const [formPerfil, setFormPerfil] = useState(' ');


    const params = useParams();

    useEffect(() => {
        searchProfile.findByProfileNickName(String(params.formPerfil))
            .then(response => {
                console.log(response.data);
                setFormPerfil(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

            })
    }, []);

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        setFormPerfil({ ...formPerfil, [name]: value })
    }


    function useHandleFormSubmit(event: any) {
        event.preventDefault();
        setLoginName(formPerfil.buscaPerfil);  
    }

    function postData() {
        console.log(formPerfil);
    }

    return (
        <section>
            <div className="container-display">
                <h3 className="main-text-display">Encontre um Perfil Github</h3>
                {/* <form onSubmit={useHandleFormSubmit}> */}
                <form>
                    <div className="formula">
                        <input

                            type="text"
                            placeholder="Nome do Perfil"
                            name="buscaPerfil"
                            //value={formPerfil.buscaPerfil}
                            className="nomePerfil"
                            // onChange={handleInputChange}>
                            onChange={(e) => setFormPerfil(e.target.value)}>

                        </input>
                    </div>
                    {/* <Button  type ="submit"/> */}
                    <button onClick={postData} type="submit" className="formula">Encontrar</button>
                </form>
                <div className="btn-encontrar">

                </div>

            </div>
        </section>
    );
}