import "./global.css"

import {Button} from "./components/button"
import { useMessage } from "./hooks/useMessage"

import styles from "./app.module.css"

export function App(){

  const message = useMessage({name: "Warley Jr"})

  return (
    <div className={styles.container}>
        <Button 
          name="Adicionar" 
          onClick={() => message.show("Mensagem personalizada do meu hook!")}
        />
        <span>0</span>  
        <Button name="Remover"/>
    </div>
  )
}