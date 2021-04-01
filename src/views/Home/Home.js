import React,{useEffect, useState} from 'react';
import {getListRegister} from '../../firebase/register';
import {Table} from 'react-bootstrap'
import './Home.css'
const Home = () => {
  const [listRegister, setListRegister]=useState([])
  console.log(listRegister,"lista de registrados")
  useEffect(() => {
    getListRegister(setListRegister)
  }, [])
  return (
    <div className='box-table'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>DNI</th>
            <th>Fecha de Nacimiento</th>
            <th>Celular</th>
            <th>Código</th>
             <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {
            listRegister.map((register, i) => (
            <tr>
              <td>{i+1}</td>
              <td>{register.registro.dataForm.firstName}</td>
               <td>{register.registro.dataForm.lastName}</td>
               <td>{register.registro.dataForm.email}</td>
               <td>{register.registro.dataForm.dni}</td>
               <td>{register.registro.dataForm.birth}</td>
               <td>{register.registro.dataForm.phone}</td>
               <td>{register.registro.dataForm.code}</td>
               <td><img className="size-image-beers" src={register.registro.URLRef} alt="imagen del código de la lata de cerveza"/></td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home
