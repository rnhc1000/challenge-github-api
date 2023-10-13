import './styles.css';

export default function ResultadoBusca() {

    return (
        <section>
            <div className="container-display-busca">
                <div className="container-display-avatar">
                    <img className="avatar-size" src={"https://avatars.githubusercontent.com/u/13897257?v=4"}></img>
                </div>
                <div className="container-display-data">

                    <p>Informações</p>

                    <div className="container-data-info">
                        <p>Perfil:</p>

                    </div>
                    <div className="container-data-info">
                    <p>Seguidores:</p>

                    </div>
                    <div className="container-data-info">
                    <p>Localidade:</p>

                    </div>
                    <div className="container-data-info">
                    <p>Nome:</p>

                    </div>

                    {
                        // {
                        //     data.map(item => (
                        //         <ProductCategory key={item.id} name={item.name} />
                        //     ))
                        // }
                    }
                </div>
            </div>
        </section>
    );
}