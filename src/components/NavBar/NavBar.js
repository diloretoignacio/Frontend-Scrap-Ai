import './styles/navbar.css';
import { getStorage } from "../../helpers/storage";

export const NavBar = () => {
    const user = getStorage("scrap_user");

    if(!!user && user.rol == "ADMIN")
  	{
        var btnUsuarios = `<button>Usuarios</button>`
    }
    else
    {
        var btnUsuarios = ``
    }

	return `<button>Inicio</button>                
            <button>Clasificacion</button>              
            ${btnUsuarios}     
            `;
};




