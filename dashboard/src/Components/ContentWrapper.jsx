import React,{useState,useEffect} from "react";
import '../assets/css/ContentWrapper.css'

function ContentWrapper(){

  const [users, setUsers] = React.useState([])

  React.useEffect(()=>{
      console.log('useEffect')
      document.title = 'Dashboard de usuarios'
      obtenerDatos()
  }, [])

  const obtenerDatos = async() => {
      const data = await fetch ('http://localhost:9000/products')
      const usuarios = await data.json()
      console.log(usuarios)
      setUsers(usuarios)
  }
      

    return(
       <div className="tableContainer">
        <h1>Listado de productos:</h1>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Producto</th>
      <th scope="col">Marca</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Imagen</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(item=>(
        <tr>
        {/* <li key={item.id}>{item.name}</li> */}
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.brand.name}</td>
        <td>{item.description}</td>
        <td><img className="w-100" src={item.images[0].url} alt="Imagen Producto"/></td>
      </tr>
      ))
    }      
  </tbody>
</table>
       </div>
    )
    
}

export default ContentWrapper