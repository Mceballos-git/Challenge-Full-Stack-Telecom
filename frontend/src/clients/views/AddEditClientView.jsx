import { useEffect, useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ClientsContext } from '../../context/ClientsContext';
import { createNewClient, deleteClient, getClientById, updateClient } from '../../../api/client';


export const AddEditClientView = () => {

    const { deleteClientContext, addClientContext, editClientContext, isLoading, setIsLoading, setSearchedClient } = useContext( ClientsContext );
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const [ title, setTitle ] = useState('Agregar Cliente');
    const navigate = useNavigate();    
    const { id } = useParams();
    const isCreatingNewClient = !id; 

    const validGenders = ['masculino', 'femenino', 'otro'];

    const patterns = { 
      letters: /^[A-Za-z]+/i ,
      numbers: /^[0-9]+$/i
    };

    const onSubmit = async (data) => {

      setIsLoading(true);

      const dataToSend ={
          ...data,
          dni: parseInt(data.dni),
          gender: data.gender.toLowerCase()
        }

      if( isCreatingNewClient ){       

        const resp = await createNewClient( dataToSend );

        if( resp.status === 201 ) {
          addClientContext( resp.data );
          await Swal.fire({
            confirmButtonColor: 'grey',
            confirmButtonText: 'OK',
            icon:'success',
            text:'El cliente fue creado correctamente',
            title:'Exito!',
          });
          setIsLoading(false);
          navigate('/');
        } else {
          setIsLoading(false);
        }
      } else {      
        const resp = await updateClient( id, dataToSend );
        if( resp.status === 200 ) {
          editClientContext( parseInt(id), dataToSend );
          await Swal.fire({
            confirmButtonColor: 'grey',
            confirmButtonText: 'OK',
            icon:'success',
            text:'El cliente fue editado correctamente',
            title:'Exito!',
          });
          setIsLoading(false);
          setSearchedClient([]);
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

      await confirmDeleteAlert().then( async ( result ) => {
        if ( result?.isConfirmed ) {
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
            clientSuccessfullyRemovedAlert();
            setSearchedClient([]);
            setIsLoading(false);
            navigate('/');
          }
          if ( resp.status === 404 ) {
            setIsLoading(false);
            return Swal.fire(
              'Error!',
              'No se encontro el recurso solicitado',
              'error'
            ).then(navigate('/'));
          }
        }
      })
    };

    useEffect( () => {
      if ( !isCreatingNewClient ) {    
        ( async () => {          
          const {data} = await getClientById( id ); 
          setTitle(`Editar Cliente ${data.id}: ${data.name} ${data.lastname}`);
          setValue('dni', data.dni);
          setValue('gender', data.gender);
          setValue('lastname', data.lastname);
          setValue('name', data.name);
          setValue('phone', data.phone);
        } )();
      }
    }, [] );

    const confirmDeleteAlert = async () => {
     const response = await Swal.fire({
        cancelButtonColor: 'red',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'grey',
        confirmButtonText: 'Si Eliminar!',
        icon:'warning',
        showCancelButton:true,
        text:'Una vez eliminado no podrás volver a visualizarlo',
        title:'¿Estas seguro de eliminar el cliente?',
      });
      setIsLoading( false );
      return response;
    };

    const clientSuccessfullyRemovedAlert = async () => {
      return await Swal.fire({
        confirmButtonColor: 'grey',
        confirmButtonText: 'OK',
        icon:'success',
        text:'El cliente fue eliminado correctamente',
        title:'Eliminado!',
      });
    }
     
    return (
      <div className='container mt-3'>
        <h2>{ title }</h2>
        <hr></hr>
        <div className="container border shadow mt-5 p-3 w-50">
          <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6">
              <label>Nombre</label>
              <input
                name='name'
                type="text"
                {...register("name", 
                  { required: true, 
                    minLength: 3,
                    maxLength: 20,
                    pattern: {
                      value: patterns.letters,
                    }
                  })}                 
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <div id="name" className="invalid-feedback">
                Sólo letras - mínimo 3 caracteres, maximo 20.
              </div>
            </div>

            <div className="col-md-6">
              <label>Apellido</label>
              <input 
                name='lastname'
                type="text"
                {...register("lastname", { 
                  required: true, 
                  minLength: 3,
                  maxLength: 20,
                  pattern: {
                    value: patterns.letters
                  }
                })} 
                className={`form-control ${errors.lastname ? "is-invalid" : ""}`}                 
              />
              <div id="name" className="invalid-feedback">
                Sólo letras - mínimo 3 caracteres, maximo 20.
              </div>
            </div>
            <div className="col-md-4">
              <label>DNI</label>
              <input
                name='dni'
                type="text"
                {...register("dni", 
                  { required: true, 
                    maxLength: { value: 8 }, 
                    minLength: { value: 7 },
                    pattern: {
                      value: patterns.numbers
                    }
                  })} 
                className={`form-control ${errors.dni ? "is-invalid" : ""}`}
              />
              <div id="name" className="invalid-feedback">
                Sólo números, mínimo 7, maximo 8.
              </div>
            </div>

            <div className="col-md-4">
              <label>Sexo</label>
              <select 
                {...register("gender")}
                className="form-select" 
                name='gender'
              >                  
                { validGenders.map( ( value ) => (
                    <option key={ value } value={ value }>{ value }</option>
                ))}                  
              </select>
            </div> 

            <div className="col-md-4">
              <label>Teléfono</label>
              <input
                name='phone'
                type="text"
                {...register("phone", 
                  { required: true,
                    minLength: 7,
                    pattern: {
                      value: patterns.numbers
                    }
                  })
                } 
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}                 
              />
              <div id="phone" className="invalid-feedback">
                Sólo números, mínimo 7.
              </div>
            </div>          
            <div className="row d-flex justify-content-between mt-2">
              {
                ( !isCreatingNewClient ) 
                  ? <div className="col-md-3 m-2">
                      <button disabled={isLoading} onClick={ () => handleDelete() } type="button" className="btn btn-danger">Eliminar</button>
                    </div>
                  : null
              }
              <div className="col-md-auto form-group">
                <button disabled={isLoading} className="btn btn-outline-success m-2">Guardar</button>
                <button disabled={isLoading} onClick={handleCancel} type="button" className="btn btn-secondary m-2">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
