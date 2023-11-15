import { getStorage } from "../../helpers/storage";
import { useUserProfile } from "./hooks/useUserProfile";
import "./styles/userProfile.css";

export const UserProfile = () => {

    const user = getStorage("scrap_user");

    let view = `    
            <div class="info"> 
                <span> ${user.username} </span>
                <strong>Rol: ${user.rol}</strong>
            </div>
            <button id="btnAvatar"><img src="https://pic.onlinewebfonts.com/svg/img_569204.png" alt="userPick" title="userPick"/>	</button>
        `;
//Si joeschmoe no se encuentra funcionando se puede utilizar https://pic.onlinewebfonts.com/svg/img_569204.png
    return useUserProfile(view);
};
