import axios from "axios"
import { isAxiosError } from "axios"
import { SectorPayloadType, sectorSchema } from "../types"

export const createAddress = async ( data : SectorPayloadType ) => { 

    try {

        const url = 'http://localhost:4000/api/sectors/'

        const resultado = await axios.post( url , data )

        if( resultado.status == 200 ) { 
            return resultado.data
        }
            
    } catch (error) {
        if( isAxiosError(error) && error.response  ) { 
            throw new Error( error.response.data.error )
        }
    }
}

export const getAllSector = async () => { 

    try {

        const url = 'http://localhost:4000/api/sectors/'

        const resultado = await axios.get( url)

        const cleanData = sectorSchema.safeParse(resultado.data)
        
        if( cleanData.success == true ) { 
            return cleanData.data
        }

    } catch (error) {
        if( isAxiosError(error) && error.response  ) { 
            throw new Error( error.response.data.error )
        }
    }
}

export const validateSectors = async () => { 

    try {

        const url = `http://localhost:4000/api/sectors/validate`

        const resultado = await axios.get( url)
        
        const cleanData = sectorSchema.safeParse(resultado.data)
        
        if( cleanData.success == true ) { 
            return cleanData.data
        }

    } catch (error) {
        if( isAxiosError(error) && error.response  ) { 
            throw new Error( error.response.data.error )
        }
    }
}