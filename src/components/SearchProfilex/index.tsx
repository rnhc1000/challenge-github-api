import './styles.css';
import { ProfileDTO } from '../../models/profileData';
import { useState } from 'react';
import * as searchProfile from '../../services/searchProfile';

type Props = {
    profileFound: ProfileDTO
}
export default function SearchProfile({ profileFound }: Props) {

    const [profileData, setProfileData] = useState<ProfileDTO>();

    searchProfile.findByProfileNickName()





    return (
        <section>
            <div className="container-display-busca">

                <div className="container-display-avatar">
                    <img className="avatar-size" src={profileFound.avatar}></img>
                </div>

                <div className="container-display-data">

                    <p>Informações</p>

                    <div className="container-data-info">
                        <p>Perfil:{profileFound.name}</p>
                    </div>

                    <div className="container-data-info">
                        <p>Seguidores:{profileFound.id}</p>
                    </div>

                    <div className="container-data-info">
                        <p>Localidade:{profileFound.name}</p>
                    </div>

                    <div className="container-data-info">
                        <p>Nome:{profileFound.name}</p>
                    </div>

                </div>

            </div>
        </section>
    );
}