import { Message } from "../../../components";
import { navigateTo } from "../../../router/router";
import { addUsuario } from "../../../services/organization/addUsuario.js";

export const useNewUsuario = async (view) => {
  const divElement = document.createElement("div");
  divElement.classList = "newUsuario";
  divElement.innerHTML = view;

  const btnAddTicket = divElement.querySelector("#btnAddUsuario");

  if (btnAddTicket) {
    btnAddTicket.addEventListener("click", async () => {
      const usernameUsuario = divElement.querySelector("#usernameUsuario");
      const passUsuario = divElement.querySelector("#passUsuario");
      const telefonoUsuario = divElement.querySelector("#telefonoUsuario");
      const emailUsuario = divElement.querySelector("#emailUsuario");
     
      if(usernameUsuario.value != "" && passUsuario.value != "" && telefonoUsuario.value != "" && emailUsuario.value != "")
      {
        const request = {
            username: usernameUsuario.value,
            password: passUsuario.value,
            phone: telefonoUsuario.value,
            email: emailUsuario.value,
        };
  
        await addUsuario(request);
        navigateTo("/usuarios");
      }
      else
      {
        Message("TODOS los campos son obligatorios", "warn");        
      }      
    });
  }
  return divElement;
};
