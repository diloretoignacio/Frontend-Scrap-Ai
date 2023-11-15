import { getStorage } from "../../../helpers/storage";
import { getClasificationByUser } from "../../../services/scrap/getClasificationByUser";

export const useHome = async (view) => {

	const user = getStorage("scrap_user");
    const divElement = document.createElement('div');
	divElement.classList = 'home';
	divElement.innerHTML = view;


	if(user.rol == "ADMIN"){
		var clasifications = await getClasificationByUser("all");
	}
	else{
		var clasifications = await getClasificationByUser(user.username);

	}


	var kgTotal = 0;
	// Recorrer el array y sumar los valores de la propiedad "kg"
	clasifications.forEach((clasification) => {
		kgTotal += clasification.kg;
	});


	divElement.querySelector("#statNumber1").innerText = clasifications.length;
	divElement.querySelector("#statNumber2").innerText = kgTotal;
	return divElement;
}