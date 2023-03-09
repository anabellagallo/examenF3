import React, { useState } from "react"
import "../componentes/Form.css"
const Form = () => {const [user, setUser] = useState({
    nombre:"" ,
    pelicula: "",
    email:"",
    genero:"",
   })
   const [show,setShow] =useState(false)
   const[err,setErr] =useState(false)
    const handleSubmit =(event)=>{
        event.preventDefault()
       if (user.nombre.length > 3 && user.nombre !== "" && user.pelicula.length > 6){
        setShow (true)
        setErr(false)}
       else setErr(true)
    }
  return ( 
    
    <>
    <form onSubmit={handleSubmit}>
    <label > Nombre Completo</label>
        <input  className="input" type="text" onChange={(event)=> setUser({...user,nombre:event.target.value})} />
        <label > Pelicula </label>
        <input  className ="inpu"type="text" onChange={(event)=> setUser({...user,pelicula :event.target.value})} />
        <label >Email</label>
        <input  className ="inpu"type="email" onChange={(event)=> setUser({...user,email:event.target.value})} />
        <select  onChange={(event)=> setUser({...user,genero:event.target.value})}>
            <option value="">Seleccione una respuesta</option>
            <option value="Comedia">Comedia</option>
            <option value="Terror">Terror</option>
            <option value="Policial">Policial</option>
            <option value = "Suspenso ">Suspenso</option>
        </select>
        {err ? "Por favor chequea que la informacion sea correcta" : null}
    
        <button className="button">Enviar</button>
    </form>
    { show 
    ?
    <>
    
    <Card  nombre={user.nombre} pelicula= {user.pelicula}></Card>
   
    </>
       :
       null  
      }
      </>
   
     )
      }

export default Form