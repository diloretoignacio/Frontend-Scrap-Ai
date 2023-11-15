import { useClasificaciones } from './hooks/useClasificaciones';
import './styles/clasificaciones.css';
import { getStorage } from "../../helpers/storage";

export const Clasificaciones = async () => {
    const user = getStorage("scrap_user");
 
    let view = `
        <div class="header">
            <h1>Clasificaciones</h1>
            <div class="tools"> 
                <button class="btn" id="btnNewClasificacion"> Nueva Clasificacion </button>
            </div>           
        </div> 
        <div class="table" id="table">
            <div class="table-header">ID</div>
            <div class="table-header">Class Scrap</div>
            <div class="table-header">Confidence</div>
            <div class="table-header">Kg</div>
            <div class="table-header">Username</div>
        </div>
    `;     

    return useClasificaciones(view);
} 