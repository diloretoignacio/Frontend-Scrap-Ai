import { fetchWithToken } from "../../helpers/fetch";
const VITE_API_TICKET_BASE = import.meta.env.VITE_API_TICKET_BASE;

export const addClasificacion = async (info) => {
  try {
   await fetchWithToken(VITE_API_TICKET_BASE, "check", "POST", info)

  } catch (error) {
    Message("Error al crear el Area", "warn");
  }
};