import axios from 'axios';

const publicClient = axios.create( {
    baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
} );

const publicGET = async ( path ) => {
    try {
        const res = await publicClient.get( path );
        if ( res.data && res.status === 200 ) {
            return res;
        }
    } catch ( error ) {
        throw new Error( error );
    }
};

const publicPOST = async ( path, data ) => {
  try {
      const res = await publicClient.post( path, data );
      if ( res.data && res.status === 200 || 201 ) {
          return res;
      }
  } catch ( error ) {
      throw new Error( error );
  }
};

const publicPATCH = async ( path, data ) => {
  try {
      const res = await publicClient.patch( path, data );
      if ( res.data && res.status === 200 ) {
          return res;
      }
  } catch ( error ) {
      throw new Error( error );
  }
};

const publicDELETE = async ( path ) => {
  try {
      const res = await publicClient.delete( path );
      if ( res.data && res.status === 200 ) {
          return res;
      }
  } catch ( error ) {
    if ( error.code === 'ERR_BAD_REQUEST') {
        return { status: 404 }
    }
    // throw new Error( error );
  }
};


export const getAllClients = async () => await publicGET( '/clients' );
export const getClientById = async ( id ) => await publicGET( `/clients/${id}` );
export const getClientByDni = async ( id ) => await publicPOST( `/clients/search/${id}` );
export const createNewClient = async ( data ) => await publicPOST( `/clients`, data );
export const updateClient = async ( id, data ) => await publicPATCH( `/clients/${id}`, data );
export const deleteClient = async ( id ) => await publicDELETE( `/clients/${id}` );
