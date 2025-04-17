import { UseFormRegister } from "react-hook-form"
import { formType } from "../types"

type props = {
    register : UseFormRegister<formType>
}

export default function HorarioSelect( { register } : props) {


    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
                <label htmlFor="apertura" className="text-sm font-medium text-gray-700 mb-1">
                    Hora de apertura
                </label>
                
                <select
                    id="apertura"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    
                    {...register("horario.apertura" , { required: "El Horario de apertura es obligatorio"})}
                >
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                </select>

            </div>

            <div className="flex flex-col">
                <label htmlFor="cierre" className="text-sm font-medium text-gray-700 mb-1">
                    Hora de cierre
                </label>
                
                <select
                    id="cierre"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    {...register("horario.cierre" , { required: "El Horario de cierre es obligatorio"})}
                >
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                </select>
            </div>
            
        </div>
    )
}
