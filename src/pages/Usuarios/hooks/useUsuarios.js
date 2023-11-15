import { getStorage } from "../../../helpers/storage";
import { navigateTo } from "../../../router/router";
import { getUsers } from "../../../services/user/getUsers";

export const useUsuarios = async (view) => {
  const user = getStorage("scrap_user");

  //Se verifica si el usuario es Administrador
  if (user.rol == "ADMIN") {
    var users = await getUsers();

    const divElement = document.createElement("div");
    divElement.classList = "usuarios";
    divElement.innerHTML = view;
    const table = divElement.querySelector("#table");

    users.forEach((user) => {
      const id = document.createElement("div");
      id.classList = "table-item";
      id.innerHTML = user.id;
      table.appendChild(id);

      const username = document.createElement("div");
      username.classList = "table-item";
      username.innerHTML = user.username;
      table.appendChild(username);

      const email = document.createElement("div");
      email.classList = "table-item";
      email.innerHTML = user.email;
      table.appendChild(email);

      const celular = document.createElement("div");
      celular.classList = "table-item";
      celular.innerHTML = user.phone;
      table.appendChild(celular);

      const rol = document.createElement("div");
      rol.classList = "table-item";
      rol.innerHTML = user.rol;
      table.appendChild(rol);
    });

    const btnNewUsuario = divElement.querySelector("#btnNewUsuario");
    if (btnNewUsuario) {
        btnNewUsuario.addEventListener("click", async () => {
        navigateTo("/newusuario");
      });
    }

    return divElement;
  }else{
    navigateTo("/unauthorized");
  }
};
