import { Message } from "../../components";
import { fetchWithoutToken } from "../../helpers/fetch";
import { setStorage } from "../../helpers/storage";
import { navigateTo } from "../../router/router";
const VITE_API_AUTH_BASE = import.meta.env.VITE_API_AUTH_BASE;

export const login = async (username, password) => {
  try {
    const data = await fetchWithoutToken(
      VITE_API_AUTH_BASE,
      `auth/login`,
      "POST",
      {
        username,
        password,
      }
    );

    if (!!data && !!data.token) {
      const token = data.token;
      const rol = data.rolName;
      var username = data.username
      const user = {
        username,
        rol
      };

      setStorage("scrap_user", user);
      setStorage("scrap_token", token);
      navigateTo("/");
    }

    return data;
  } catch (e) {
    Message("Usuario o contraseña erroneos", "warn");
  }
};
