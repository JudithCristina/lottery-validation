import React,{useEffect, useState} from 'react';
import {getListRegister} from '../../firebase/register';
import {Table} from 'react-bootstrap'
import {updateValid} from './../../firebase/register';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './Home.css'
const Home = () => {
  const [listRegister, setListRegister]=useState([])


  useEffect(() => {
    getListRegister(setListRegister)
  }, [])


  const validateOk = (valid, id) => {
    updateValid(valid,id)
  }

  const validateError = (valid,id) => {
     updateValid(valid,id)
  }


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
             <th>¿Registro Válido?</th>
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
               <td>
                 <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={200}
                  defaultPositionY={100}
                >
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <div className="tools">
                        <button className="style-button zoomIn" onClick={zoomIn}><i class="fas fa-search-plus"></i></button>
                        <button className="style-button zoomOut" onClick={zoomOut}><i class="fas fa-search-minus"></i></button>
                        <button className="style-button reset" onClick={resetTransform}><i className="fas fa-times"></i></button>
                      </div>
                      <TransformComponent>
                        <img  className="size-image-beers" src={register.registro.URLRef} alt="test" />
                      </TransformComponent>
                    </React.Fragment>
                  )}
                </TransformWrapper>
                {/* <TransformWrapper>
                  <TransformComponent>
                    <img  className="size-image-beers" src={register.registro.URLRef} alt="test" />
                  </TransformComponent>
                </TransformWrapper> */}
                 {/* <img className="size-image-beers" src={register.registro.URLRef} alt="imagen del código de la lata de cerveza"/> */}
                 </td>
               <td>
                 <button  className={register.valid == true ? "btn btn-valid-active  mx-2" : "btn btn-valid  mx-2" } onClick={()=>validateOk(true,register.id )}><i className="fas fa-check"></i><span>Válido</span></button>
                 <button className={register.valid == false ? "btn btn-invalid-active  mx-2" : "btn btn-invalid  mx-2" } onClick={()=>validateError(false,register.id )} ><i className="fas fa-times"></i><span>Inválido</span></button>
               </td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home
