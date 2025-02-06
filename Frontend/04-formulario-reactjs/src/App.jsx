import './App.css'
import { Input } from './components/Input'
import {useForm} from 'react-hook-form'

function App() {

const {
      register, 
      handleSubmit,
      formState: {errors},
      control
    } = useForm()

    const handleFormSubmit = (data) => {
      console.log(data)
    }

  return (
    <>
      <div>
        <form
           onSubmit={handleSubmit(handleFormSubmit)}
        >

          <Input
            control={control}
            name='name'
            rules={{required: true, minLength: 3, maxLength: 20}}
          />

          <Input
            control={control}
            name='lastName'
          />

          <Input
             control={control}
             name='age'
             rules={{required: true, min: 18, max: 65}}
          />

          {/* <input 
            {...register('name', {required: true, minLength: 3, maxLength: 20})}
            placeholder='Digite seu nome'
          />
          <br />
            {errors.name?.type === 'required' && <p>O campo nome é obrigatório</p>}
            {errors.name?.type === 'minLength' && <p>Precisa ter 2 caracteres</p>}

          <input
            {...register('lastName', {pattern: /^[a-zA-Z]+$/})}
            placeholder='Digite seu sobrenome'
          />
          
          <br />
          <input
            type='number'
            {...register('age', {required: true, min: 18, max: 65})}
            placeholder='Digite sua idade'
          />
          <br />
          {errors.age?.type === 'min' && <p>Precisa ser maior que 18 anos</p>}
          {errors.age?.type === 'max' && <p>Precisa ser menor que 65 anos</p>} */}

          <input type='submit' value="Enviar" />
        
        </form>
      </div>
    </>
  )
}

export default App
