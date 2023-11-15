import { useNewUsuario } from './hooks/useNewUsuario';
import './styles/newUsuario.css';

export const NewUsuario = async() => {
    let view = `
        <h1> Nuevo Usuario </h1>  
        <section class="newUsuario">   
            <input type="input" id="usernameUsuario" placeholder = "Nombre de usuario">
            <input type="input" id="passUsuario" placeholder = "Contraseña">
            <input type="input" id="telefonoUsuario" placeholder = "Celular">
            <input type="input" id="emailUsuario" placeholder = "Email">
            <button id="btnAddUsuario">Crear</button>
        </section>    
    `;  
    
    return useNewUsuario(view);    
}