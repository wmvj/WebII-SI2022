import { useEffect, useState } from "react";

function warningAPI(){
    console.log("Estou faendo uma requisição para a API")
}

export function Footer() {

    const [list, setList] = useState([])
    const [filter, setFilter] = useState("")
    const [filterList, setfilterList] = useState([])

    // Primeiro exemplo de useEffect
    useEffect(() =>{
        console.log(list)
        warningAPI()
    }, [list])

    // Segundo exemplo de useEffect
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> response.json())
            .then(data => {
                setList(data.map(item => item.name ))
            })
    }, [])

    // Terceiro exemplo de useEffect
    useEffect(() =>{
        setfilterList(list.filter(item => item.includes(filter)))
    },[filter])


    function addList(){
        setList(state => [...state, "Novo item"])
        console.log(list)
        warningAPI()
    }

    return(
        <div>
            <ul>
                {list.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={addList} className="bg-black text-white border px-4 py-4, rounded-md">Adicionar um item de lista</button>

            <input 
                type="text"
                className="border border-black"
                placeholder="Digite um filtro"
                onChange={e=>setFilter(e.target.value)}
                value={filter}
            />
            <ul>
                {filterList.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}