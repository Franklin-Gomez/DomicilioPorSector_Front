import { getAllSector } from "../api/addressAPI"
import { useQuery } from "@tanstack/react-query"
import AvailableTable from "./AvailableTable"

export default function SectorsTable() {

    const { data , isLoading } = useQuery({ 
        queryKey: ['sectores'], 
        queryFn: getAllSector
    })

    if( isLoading ) { 
        return 'cargando...'
    }    

    if( data  ) return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4"> Sectores Registrados</h1>
          
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
                    {data.map((sector, index) => (
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

            <AvailableTable/>

        </div>
    )
}
