
import './styles.css'
import { useEffect, useState } from 'react';
import { ProfileDTO } from '../../models/profileData';
import * as searchProfile from '../../services/searchProfile';
import { useNavigate } from 'react-router-dom';

type gitHubProfile = {
    profile?: string
}


type Props = {
    onSearch: Function;
}

export default function InputProfile({onSearch}: Props) {


    const [profileData, setProfileData] = useState<gitHubProfile>({});
    const [profileFound, setProfileFound] = useState<ProfileDTO>();
    const [validProfile, setValidProfile] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect( () => {
        searchProfile.findByProfileNickName(String(profileData.profile))
        .then((response) => {
            setProfileFound(response.data);
            setValidProfile(true);
        }, [])
        .catch(error => {
            if (error.response.status === 404) {
                setValidProfile(false);
                navigate("/404");
            }
        })
    }, [])

    const useHandleSubmit = (event: any) => {

        event.preventDefault();
        onSearch(validProfile);



        // .finally(()=> {
        //     navigate("/search");
        // })        
    }

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.name;
        setProfileData({ ...profileData, [name]: value });
    }


    return (
        <>
            <section>
                <div className="container-display">
                    <h3 className="main-text-display">Encontre um Perfil Github</h3>
                    <form onSubmit={useHandleSubmit}>

                        <div>
                            <input
                                id="profile"
                                type="text"
                                placeholder="Nome do Perfil"
                                name="profile"
                                value={profileData.profile}
                                className="nomePerfil"
                                onChange={handleInputChange}
                            >
                            </input>
                            <button type="submit" className="btn-encontrar">Encontrar</button>
                        </div>

                    </form>
                </div>
            </section>
            {

                validProfile &&

                <section>
                    <div className="container-display-busca">
                        <div className="container-display-avatar">
                            <img className="avatar-size" src={profileFound?.avatar_url}></img>

                            <div className="container-display-data">
                                <p>Informações</p>
                                <div className="container-data-info">
                                    <p>Perfil: {profileFound?.html_url}</p>
                                </div>
                                <div className="container-data-info">
                                    <p>Seguidores: {profileFound?.followers}</p>
                                </div>
                                <div className="container-data-info">
                                    <p>Localidade: {profileFound?.location}</p>
                                </div>
                                <div className="container-data-info">
                                    <p>Nome: {profileFound?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            }

        </>
    );
}

