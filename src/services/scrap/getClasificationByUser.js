import { Message } from "../../components";
import { getWithToken } from "../../helpers/fetch";

const VITE_API_TICKET_BASE = import.meta.env.VITE_API_TICKET_BASE;

export const getClasificationByUser = async (username) => {
  try {
    var url = "check/"+username
    console.log(url)
    let todos = await getWithToken(VITE_API_TICKET_BASE, url);  
    return todos;

  } catch (e) {
    return []
  }


};
