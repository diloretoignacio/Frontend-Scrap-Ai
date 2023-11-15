import { useNewClasificacion } from './hooks/useNewClasificacion';
import './styles/newClasificacion.css';

export const NewClasificacion = async() => {
    let view = `
        <h1> Nueva Clasificacion </h1>  
        <section class="newClasificacion">
        
            <input type="input" id="kg" placeholder = "Kg">

            <input type="file" id="inputImage" accept="image/*">
            
            <button id="btnNewClasificacion">Clasificar</button>
        </section>    
    `;  
    
    return useNewClasificacion(view);    
} 