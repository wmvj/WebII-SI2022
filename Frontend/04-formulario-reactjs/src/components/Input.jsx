import { useController } from "react-hook-form"

export const Input = (props) => {
    
    const {field, fieldState} = useController(props)

    return(
        <div>
            <input 
                {...field}
                placeholder={props.name} 
            />
            {fieldState.error?.type === "required" && <p>Campo obrigatório</p>}
            {fieldState.error?.type === "min" && <p>Valor mínimo exigido</p>}
            {fieldState.error?.type === "max" && <p>Valor maximo exigido</p>}
        </div>
    )
}