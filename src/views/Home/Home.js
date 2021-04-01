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
               <td><img src='data:image/png;base64,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' alt=""/></td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home
