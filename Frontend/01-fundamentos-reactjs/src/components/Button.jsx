export function Button(props) {
    return (
        <button onClick={props.meuClick} className="m-3 p-3 bg-blue-700 text-white rounded-md">
            {props.nome}
        </button>
    )
}