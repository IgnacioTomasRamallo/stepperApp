import { useState } from 'react';
import { FONTS } from './Helpers/fonts';
import { Form } from './components/Form/Form';
import './App.css';
import { Button } from './components/Button/Button';
import { Stepper } from './components/Stepper/Stepper';


function App() {

  const [applicantInformation, setApplicantInformation] = useState({
    name: '',
    lastName: '',
    numberPhone: '',
    workPosition: '',
    country: '',
    age: '',
    city:'',
    gender:'',
    email:'',
  })

  const [page, setPage] = useState(0);
  const [steps, setStep] = useState([{
    id: 0,
    name: 'nombre del colega',
    isActive: false,
  },
  {
    id: 1,
    name: 'materias a rendir',
    isActive: false,
  },
  {
    id: 2,
    name: 'elegir profesor',
    isActive: false,
  }
])

  const handleClick = () => {

    page !== 2 && setPage(page + 1)
  }

  const decrement = () => {
     page !== 0 && setPage(page - 1) 
  }
  
  

  const firstForm = [
      {name:'name', value: applicantInformation.name, label:'nombre'}, 
      {name:'lastName', value: applicantInformation.lastName, label:'apellido'},
      {name:'age', value: applicantInformation.age, label:'edad'},
      {name:'gender', value: applicantInformation.gender, label:'genero'}
    ];
    const secondForm = [
      {name:'country', value: applicantInformation.country, label:'Pais'}, 
      {name:'workPosition', value: applicantInformation.workPosition, label:'Posicion laboral'},
      {name:'city', value: applicantInformation.city, label:'ciudad'},
    ];
    const thirdForm = [
      {name:'email', value: applicantInformation.email, label:'email'}, 
      {name:'numberPhone', value: applicantInformation.numberPhone, label:'numero de telefono'},
    ];
    

  const handleChange = (event) => {
    setApplicantInformation({
      ...applicantInformation,
      [event.target.name]:event.target.value
    })
  }


 
  return (
    <div className='box-app'>
      <div>
        <h2 style={FONTS.ROBOTO_REGULAR} className='title'>Bienvenido al Formulario Join Job</h2>
      </div>
      <div className='box-input'>

        <Stepper steps={steps} />
        <Form formFields={firstForm} handleChange={handleChange} numberPage={page} numberStep={steps}/>

        {/* {
          steps[0].number === true &&
          <div>
            <Form formFields={firstForm} handleChange={handleChange} countPage={page} />
          </div>
        }

          {
            page === 2 ? 
            <Button click={handleClick} value={'Finalizar'} /> :
            page !== 2 &&
            <Button click={handleClick} value={'siguiente'} /> 
          }

        {
          page !== 0 &&
          <Button click={decrement} value={'back'} />
        } */}

        
      </div>
    </div>
  )
}

export default App
