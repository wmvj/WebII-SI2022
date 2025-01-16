// JSX = JavaScript + XML (HTML)
import {Post} from "./components/Post"
import {Button} from "./components/Button"
import { useState } from "react"

function App() {
  
 const [count, setCount] = useState(0)
 const [nameInput, setnameInput] = useState('')
 const [fullName, setfullName] = useState({name:"",lastName:""})

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
  <div>  
   <h1>Hello World</h1>
   <Post author="Jhon Winker" content="Meu primeiro post"/>
   <Post author="João" content="Meu primeiro post"/>
   <Post author="Ruan" content="Meu primeiro post"/>

   <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <Button nome="Conta +1" meuClick={handleClick}/>
      <input 
        type="text"
        className="border border-black p-3 text-xl text-black rounded" 
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={(e) => setnameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>

      <h1 className="p-5 italic">Formulario</h1>
      <input 
        type="text"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
        placeholder="Digite seu nome"
        value={fullName.name}
        onChange={(e) => setfullName({...fullName, name: e.target.value})}
      />
      <input 
        type="text"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
        placeholder="Digite seu sobrenome"
        value={fullName.lastName}
        onChange={(e) => setfullName({...fullName, lastName: e.target.value})}
      />
  <p>{fullName.name} {fullName.lastName}</p>
   </div> 
  </div>
  )
}

export default App