import { Message } from "../../components";
import { getWithToken } from "../../helpers/fetch";

const VITE_API_TICKET_BASE = import.meta.env.VITE_API_TICKET_BASE;

export const getScrapTotal = async (userJwt) => {
 
  try {

    let todos = await getWithToken(VITE_API_TICKET_BASE, "check/all");
    return todos;

  } catch (e) {
    return {
        todos: []
    };
  }


};
