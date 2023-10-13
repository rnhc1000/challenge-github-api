import './styles.css'

type Props = {
    text: string;
}

export default function Button({ text }: Props) {

    return (
        <div className="btn-github-api">
            <p className="text-btn-github-api btn-home">{ text }</p>
        </div>
    );
}