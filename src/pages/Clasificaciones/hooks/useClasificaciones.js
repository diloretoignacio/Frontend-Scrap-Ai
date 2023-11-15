import { Message } from "../../../components";
import { getStorage } from "../../../helpers/storage";
import { navigateTo } from "../../../router/router";
import { getClasificationByUser } from "../../../services/scrap/getClasificationByUser";

export const useClasificaciones = async (view) => {
  const user = getStorage("scrap_user");

  console.log(user)
  if(user.rol == "ADMIN"){
    var clasifications = await getClasificationByUser("all");
  }
  else{
    var clasifications = await getClasificationByUser(user.username);
  }
  

  const divElement = document.createElement("div");
  divElement.classList = "clasificaciones";
  divElement.innerHTML = view;
  const table = divElement.querySelector("#table");

  clasifications.forEach((clasification) => {

    const id = document.createElement("div");
    id.classList = "table-item";
    id.innerHTML = clasification.id;
    table.appendChild(id);

    const classScrapName = document.createElement("div");
    classScrapName.classList = "table-item";
    classScrapName.innerHTML = clasification.classScrapName;
    table.appendChild(classScrapName);

    const confidence = document.createElement("div");
    confidence.classList = "table-item";
    confidence.innerHTML = clasification.confidence*100+" %";
    table.appendChild(confidence);

    const kg = document.createElement("div");
    kg.classList = "table-item";
    kg.innerHTML = clasification.kg;
    table.appendChild(kg);

    const username = document.createElement("div");
    username.classList = "table-item";
    username.innerHTML = clasification.username;
    table.appendChild(username);
  });


  const btnNewClasificacion = divElement.querySelector("#btnNewClasificacion");
    if (btnNewClasificacion) {
        btnNewClasificacion.addEventListener("click", async () => {
        navigateTo("/newclasificacion");
      });
    }

  return divElement;
};
