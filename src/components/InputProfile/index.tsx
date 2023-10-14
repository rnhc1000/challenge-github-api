
import './styles.css'
import { useEffect, useState } from 'react';
import { ProfileDTO } from '../../models/profileData';


import * as searchProfile from '../../services/searchProfile';


export default function InputProfile() {

    const [profile, setProfile] = useState<string>();
    // const [profileData, setProfileData] = useState<ProfileDTO>();
    const [profileFound, setProfileFound] = useState<ProfileDTO>();
    useEffect(() => {
        searchProfile.findByProfileNickName(profile)
            .then(response => {
                setProfileFound(response.data);
                //console.log(response.data);
                // console.log(profileFound);
                // console.log(profile)
            }).catch((error) => {
                console.log(error.response)
            })
    });

    const useHandleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        searchProfile.findByProfileNickName(profile);
        console.log(profileFound)
    }

    return (
        <>
            <section>
                <div className="container-display">
                    <h3 className="main-text-display">Encontre um Perfil Github</h3>
                    <form onSubmit={useHandleSubmit}>
                        <div>
                            <input

                                type="text"
                                placeholder="Nome do Perfil"
                                name="profile"
                                value={profile}
                                className="nomePerfil"
                                onChange={(e) => setProfile(e.target.value)}>

                            </input>
                            <button type="submit" className="btn-encontrar">Encontrar</button>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className="container-display-busca">

                    <div className="container-display-avatar">
                        <img className="avatar-size" src=""></img>
                    </div>

                    <div className="container-display-data">

                        <p>Informações</p>

                        <div className="container-data-info">
                            <p>Perfil:{}</p>
                        </div>

                        <div className="container-data-info">
                            <p>Seguidores:{ }</p>
                        </div>

                        <div className="container-data-info">
                            <p>Localidade:{ }</p>
                        </div>

                        <div className="container-data-info">
                            <p>Nome:{ }</p>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}

