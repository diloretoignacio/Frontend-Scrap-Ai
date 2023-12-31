import { deleteStorage } from "../../../helpers/storage";
import { navigateTo } from "../../../router/router";

export const useUserProfile = (view) => {

    const divElement = document.createElement('div');
	divElement.classList = 'userProfile';
	divElement.innerHTML = view;
    
    const btnAvatar = divElement.querySelector('#btnAvatar');
	btnAvatar.addEventListener('click', () => {
		deleteStorage("scrap_token");
        deleteStorage("scrap_user");		
		navigateTo("/login");
	});

    return divElement;

}
