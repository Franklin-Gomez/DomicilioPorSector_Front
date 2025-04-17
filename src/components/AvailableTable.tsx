import { useQuery } from "@tanstack/react-query";
import { validateSectors } from "../api/addressAPI";

export default function AvailableTable() {

    const sectorAvailable = useQuery({
        queryKey: ['validateSectors'],
        queryFn: validateSectors,
    })

    if  ( sectorAvailable.data ) return (
        <>
            <h1 className="text-center font-bold text-3xl my-4"> Sectores Disponibles </h1>
            { sectorAvailable.data.length ? 
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="border-b border-gray-300">
                                <tr>
                                    <th className="px-4 py-2">Nombre del sector</th>
                                    <th className="px-4 py-2">Dirección</th>
                                    <th className="px-4 py-2" colSpan={2}>Horario de atención</th>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <th></th>
                                    <th></th>
                                    <th className="px-4 py-1 text-sm font-normal">Apertura</th>
                                    <th className="px-4 py-1 text-sm font-normal">Cierre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sectorAvailable.data.map((sector, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-100">
                                    <td className="px-4 py-2">{sector.sector}</td>
                                    <td className="px-4 py-2">{sector.direccion}</td>
                                    <td className="px-4 py-2">{sector.horario.apertura}</td>
                                    <td className="px-4 py-2">{sector.horario.cierre}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                :
                
                <p className="font-bold text-center bg-gray-400 py-4">No hay Sectores Disponibles </p>

            }
          

        </>
    )
}
