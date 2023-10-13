import './styles.css';
import homeSvg from '../../assets/home-svgrepo-com 1.svg';
import { Link } from 'react-router-dom';
export default function Header() {

    return (

        <header className="header-container">
            <div className="header-container-text">
                <p>GitHub API
                <Link to='/'>
                    
                        <img className="nav-img" src={homeSvg}></img>
                   
                </Link>
                </p>
            </div>
        </header>
    );
}