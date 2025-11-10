import { useEffect } from "react"

type Props = {
    name: string
}

export function useMessage({name}: Props){
    function show(message: string){
        console.log(name, message)
    }

    useEffect(() =>{
        console.log("useEffect do useMessage!")
    }, [])
    return {show}
}