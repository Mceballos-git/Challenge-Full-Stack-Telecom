import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { getClientById } from '../../api/client';

export const AddEditClientView = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [ clientId, setClientId ] = useState();
    const location = useLocation();
    const { from } = location.state;
    
    const onSubmit = data => console.log(data);

    const handleDelete = () => {
      console.log('BORRANDO');
    }
    const handleCancel = () => {
      console.log('CANCELANDO');
    }

    useEffect( () => {
      ( async () => {
        setClientId(from);
        const { data } = await getClientById( from );
        setValue('name', data.name);
        setValue('lastname', data.lastname);
      } )();
  }, [] );
    
     
    return (
      <div className="container border shadow mt-5 w-50">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="row justify-content-md-center mt-3">
            <div className="col-md-auto form-group m-2">
              <label>Nombre</label>
              <input
                name='name'
                {...register("name")} 
                type="text" 
                className="form-control"/>
            </div>

            <div className="col-md-auto form-group m-2">
              <label>Apellido</label>
              <input 
                name='lastname'
                {...register("lastname")}
                type="text" 
                className="form-control"
              />
            </div>
          </div>

          <div className="row justify-content-md-center">

            <div className="col form-group m-2">
              <label>Sexo</label>
              <select 
                className="form-control" 
                {...register("gender")}
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>

            </div> 

            <div className="col-sm-auto form-group m-2">
              <label>Numero de telefono</label>
              <input
                name='phone'
                {...register("phone")} 
                type="text" 
                className="form-control"
              />
            </div>

            <div className="col-md form-group m-2">
              <label>DNI</label>
              <input
                name='dni'
                {...register("dni")} 
                type="text" 
                className="form-control"/>
            </div>

          </div>
         

          <div className="row justify-content-md-start">
            <div className="col-lg form-group">
              <button onClick={handleDelete} type="button" className="btn btn-danger m-3">Eliminar</button>
            </div>
            <div className="col-md-auto form-group">
            <button className="btn btn-outline-success m-3">Guardar</button>
            <button onClick={handleCancel} type="button" className="btn btn-secondary m-3">Cancelar</button>
            </div>
          </div>

        </form>
      </div>
    );
}
