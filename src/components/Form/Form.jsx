import React from 'react'
import { Input } from '../Input/Input'



export const Form = (props) => {

     const {formFields, handleChange, numberPage, numberStep} = props;



  return (
    <div>
        {/* <Input type="text" placeholder={'Ingresar nombre del postulante'} label={'Nombre'}required />
        <Input type="text" placeholder={'Ingresar Apellido del postulante'}label={'Apellido'} required />
         */}

        {
            formFields.map((i, index)=>{
                return (
                  <div>
                    <Input key={index} type="text" placeholder={`Ingresar ${i.label} del postulante`} label={i.label} required name={i.name} value={i.value} onChange={handleChange}/> 
                  </div>
                )
            })
        }
    </div>
  )
}
