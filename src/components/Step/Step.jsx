export const Step = (props) => {
    
    const { isActive, name, number} = props;
    
    console.log(isActive);

  return (
    <div className={''}>
        <p>{isActive}</p>
        <li>{number}</li>
        <p>{name}</p>
    </div>
  )
}
