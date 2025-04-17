// FormularioDireccion.tsx
import { useForm } from "react-hook-form";
import { formType } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAddress } from "../api/addressAPI";
import HorarioSelect from "./HorarioSelect";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const FormularioDireccion = () => {

    // state para almacenar hubicacion actual
    const [coordenadas, setCoordenadas] = useState<{ lat: number; lng: number }>({
        lat : 0 ,
        lng : 0
    });
    // effect sacabamos la hubicacion actual , sin pasar independiente para un solo render
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoordenadas({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
            },
            (err) => console.error("Ubicación no disponible", err)
        );

    }, []);



    // React-Hook-Form
    const { register, handleSubmit , formState : { errors } , reset } = useForm<formType>({
        defaultValues : {
            sector: '',
            direccion: '',
            horario: {
                apertura: '06:00',
                cierre: '18:00'
            }
        },
        mode: "onChange"
    })


    // quitar el cacheo automatico - invalidar query
    const queryClient = useQueryClient()
    
    // query al backend
    const { mutate } = useMutation({

        mutationFn : createAddress,
        
        onSuccess : (data) => {
            // re-fetching
            queryClient.invalidateQueries({queryKey :['sectores']})
            queryClient.invalidateQueries({queryKey :['validateSectors']})
            reset()
            toast.success( data)
        },

        onError : (errors) => { 
            toast.error( errors.message )
        }
    })

    const onSubmit = ( data: formType ) => {

        const payload = { 
            ...data ,
            coordenadas: {
                type: "Point" as const,
                coordinates: [coordenadas.lng, coordenadas.lat] as [number, number],
            },//{ latitu, longitud} actual, si es 0 no se pudo encontrar hubicacion actual
        }
        mutate( payload )
    };

    return (

        <div>
            <h1 className="text-center font-bold text-3xl my-4">Registrar Sector</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 w-full mx-auto">
                <div>
                    <label className="block font-medium mb-1">Nombre del sector o barrio</label>
                    <input
                        type="text"
                        {...register("sector", { required: "El nombre del Sector es Obligatorio" })}
                        className="w-full border p-2 rounded"
                    />

                    {errors.sector && 
                        <p role="alert" 
                        className="bg-red-500 my-2 text-center uppercase text-white p-2 font-bold">
                            {errors.sector.message}
                        </p>
                    }

                </div>

                <div>
                    <label className="block font-medium mb-1">Dirección</label>
                    <input
                        type="text"
                        {...register("direccion", { required: "La direccion  es Obligatorio" })}
                        className="w-full border p-2 rounded"
                    />

                    {errors.direccion && 
                        <p role="alert" 
                        className="bg-red-500 my-2 text-center uppercase text-white p-2 font-bold">
                            {errors.direccion.message}
                        </p>
                    }
                
                </div>

                <div>
                    <label className="block font-medium mb-1">Horario de atención</label>
                    <HorarioSelect
                        register={register}
                    />
                    
                    {errors.horario && 
                        <p role="alert" 
                        className="bg-red-500 my-2 text-center uppercase text-white p-2 font-bold">
                            {errors.horario.message}
                        </p>
                    }

                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                >
                    Enviar
                </button>

            </form>
        </div>


    
  );
};
