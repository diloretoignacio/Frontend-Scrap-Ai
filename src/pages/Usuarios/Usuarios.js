import { useUsuarios } from './hooks/useUsuarios';
import './styles/usuarios.css';

export const Usuarios = async () => {
    let view = `
        <div class="header">
            <h1>Usuarios</h1>
            <div class="tools"> 
                <button class="btn" id="btnNewUsuario"> Nuevo Usuario </button>
            </div>           
        </div> 
        <div class="table" id="table">
            <div class="table-header">ID</div>
            <div class="table-header">Username</div>
            <div class="table-header">Email</div>
            <div class="table-header">Celular</div>
            <div class="table-header">Rol</div>
        </div>       
    `;     

    return useUsuarios(view);
} 