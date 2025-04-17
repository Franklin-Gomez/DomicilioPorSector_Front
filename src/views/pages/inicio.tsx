import { FormularioDireccion } from "../../components/Form";
import SectorsTable from "../../components/SectorsTable";

export default function Inicio() {

    return (

        <main className="container mx-auto my-7">

            <h1 className="text-center font-bold text-4xl"> Sistema Domicilio por Sector</h1>

            <div className="grid grid-cols-[1fr_2fr] gap-4">
                
                <FormularioDireccion/>

                <SectorsTable/>

            </div>
        </main>

    )
}
