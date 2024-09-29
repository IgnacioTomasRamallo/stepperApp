import React from 'react'
import { Step } from '../Step/Step';
import './stepper.css';

export const Stepper = (props) => {

    const { steps } = props;

    console.log(steps)

  return (
    <div className='box-steppers'>
        {
            steps.map((i, index)=>{
                return <Step  key={index} isActive={i.isActive} name={i.name} number={i.id} />
            })
        }
        
    </div>
  )
}
