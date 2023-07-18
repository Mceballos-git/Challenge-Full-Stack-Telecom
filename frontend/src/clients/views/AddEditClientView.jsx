import { useEffect, useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ClientsContext } from '../../context/ClientsContext';
import { createNewClient, deleteClient, getClientById, updateClient } from '../../../api/client';


export const AddEditClientView = () => {

    const { deleteClientContext, addClientContext, editClientContext } = useContext( ClientsContext );
    const { register, handleSubmit, setValue} = useForm();
    const navigate = useNavigate();    
    const { id } = useParams();
    const isCreateMode = !id; // agrego variable para identificar si es creacion o edicion de cliente   


    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle ] = useState('Agregar Cliente');

    const validGenders = ['masculino', 'femenino', 'otro'];
    
    const onSubmit = async (data) => {
      setIsLoading(true);

      const dataToSend ={
          ...data,
          dni: parseInt(data.dni),
          gender: data.gender.toLowerCase()
        }

      if(isCreateMode){       

        console.log(dataToSend);

        const resp = await createNewClient( dataToSend );

        if( resp.status === 201 ) {
          addClientContext( resp.data );
          await Swal.fire({
            title:'Exito!',
            text:'El cliente fue creado correctamente',
            icon:'success',
            confirmButtonColor: 'grey',
            confirmButtonText: 'OK',
          });
          setIsLoading(false);
          navigate('/');
        } else {
          setIsLoading(false);
        }
      }else{      
      
        const resp = await updateClient( id, dataToSend );
        if( resp.status === 200 ) {
          editClientContext( parseInt(id), dataToSend );
          await Swal.fire({
            title:'Exito!',
            text:'El cliente fue editado correctamente',
            icon:'success',
            confirmButtonColor: 'grey',
            confirmButtonText: 'OK',
          });
          setIsLoading(false);
          navigate('/');
        } else {
          setIsLoading(false);
        }

      }
    };

    const handleCancel = () => {
      setIsLoading(false);
      navigate('/');
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
            navigate('/');
          }
          if ( resp.status === 404 ) {
            setIsLoading(false);
            return Swal.fire(
              'Error!',
              'No se encontro el recurso solicitado',
              'error'
            ).then(navigate(-1));
          }
        }
      })
    };

    useEffect( () => {
      if ( !isCreateMode ) {    
        ( async () => {          
            const {data} = await getClientById( id ); 
            setValue('name', data.name);
            setValue('lastname', data.lastname);
            setValue('gender', data.gender);
            setValue('phone', data.phone);
            setValue('dni', data.dni);

            setTitle(`Editar Cliente ${data.id}: ${data.name} ${data.lastname}`);
        } )();
      }
    }, [] );
     
    return (
      <div className='container mt-3'>
        <h2>{ title }</h2>
        <hr></hr>
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
                  name='gender'
                  className="form-control" 
                  {...register("gender")}
                >                  
                  { validGenders.map( ( value ) => (
                      <option key={ value } value={ value }>{ value }</option>
                  ))}                  
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
          
            <div className="row d-flex justify-content-around">
              {
                ( !isCreateMode ) 
                  ? <div className="col-lg form-group">
                      <button disabled={isLoading} onClick={ () => handleDelete() } type="button" className="btn btn-danger m-3">Eliminar</button>
                    </div>
                  : null
              }
              
              <div className="col-md-auto form-group">
              <button disabled={isLoading} className="btn btn-outline-success m-3">Guardar</button>
              <button disabled={isLoading} onClick={handleCancel} type="button" className="btn btn-secondary m-3">Cancelar</button>
              </div>
            </div>

          </form>
        </div>

      </div>
      
    );
}
