import { useEffect, useContext, useState } from 'react';
import { ClientsContext } from '../context/ClientsContext';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { deleteClient, getClientById } from '../../api/client';
import Swal from 'sweetalert2';


export const AddEditClientView = () => {

    const { deleteClientContext, setClients, clients } = useContext( ClientsContext );
    const { register, handleSubmit, setValue } = useForm();
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    
    const onSubmit = data => console.log(data);

    const handleCancel = () => {
      setIsLoading(false);
      navigate(-1);
    };

    const handleDelete = async () => {
      setIsLoading(true);
      await Swal.fire({
        title:'¿Estas seguro de eliminar el cliente?',
        text:'Una vez eliminado no podrás volver a visualizarlo',
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor: 'grey',
        cancelButtonColor: 'red',
        confirmButtonText: 'Si Eliminar!',
        cancelButtonText: 'Cancelar',
      }).then(async (result) => {
        console.log('ok');
        if (result.isConfirmed) {
          const resp = await deleteClient( id );
          if ( !resp ) {
            setIsLoading(false);
            return Swal.fire(
              'Error!',
              'Se produjo un error de conexión, por favor reintente nuevamente',
              'error'
            );

          }
          if( resp.status === 200 ) {
            deleteClientContext( parseInt(id) );
            await Swal.fire({
              title:'Eliminado!',
              text:'El cliente fue eliminado correctamente',
              icon:'success',
              confirmButtonColor: 'grey',
              confirmButtonText: 'OK',
            });
            setIsLoading(false);
            navigate(-1);
          }
          if ( resp.status == 404 ) {
            setIsLoading(false);
            return Swal.fire(
              'Error!',
              'Se produjo un error, por favor reintente nuevamente',
              'error'
            ).then(navigate(-1));


          }
        }
      })
    };

    useEffect( () => {
      ( async () => {
        if ( id !== undefined ) {  
          const {data} = await getClientById( id ); 
          setValue('name', data.name);
          setValue('lastname', data.lastname);
          setValue('sexo', data.gender);
          setValue('phone', data.phone);
          setValue('dni', data.dni);
        }
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
              <button disabled={isLoading} onClick={ () => handleDelete() } type="button" className="btn btn-danger m-3">Eliminar</button>
            </div>
            <div className="col-md-auto form-group">
            <button disabled={isLoading} className="btn btn-outline-success m-3">Guardar</button>
            <button disabled={isLoading} onClick={handleCancel} type="button" className="btn btn-secondary m-3">Cancelar</button>
            </div>
          </div>

        </form>
      </div>
    );
}
