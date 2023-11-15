import { Message } from "../../components";
import { getWithToken } from "../../helpers/fetch";

const VITE_API_AUTH_BASE = import.meta.env.VITE_API_AUTH_BASE;

export const getUsers = async (userJwt) => { 
  try {
    let todos = await getWithToken(VITE_API_AUTH_BASE, "users");
    return todos;

  } catch (e) {
    return {
        todos: []
    };
  }
};


