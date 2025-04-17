import { z } from "zod";

export const formSchema = z.object({
    sector: z.string(),
    direccion: z.string(),
    horario : z.object({
        apertura : z.string(),
        cierre : z.string()
    })
})

//Configuracion Necesaria para usar GeoJSON
const CoordenadasSchema = z.object({
    type: z.literal("Point"),  
    coordinates: z.array(z.number()).length(2)//[len,let]
});

export const SectorPayloadSchema = z.object({
    coordenadas: CoordenadasSchema,
}).merge(formSchema) // heredar de los campos de formschema sin crear llave
  
export type SectorPayloadType = z.infer<typeof SectorPayloadSchema>;
export type formType = z.infer<typeof formSchema>


export const sectorSchema = z.array( formSchema )


  