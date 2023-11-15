import { AuthLayout, PublicLayout } from "../layouts";
import { Home, Login, NotFound, Unauthorized, Clasificaciones} from "../pages";
import { NewClasificacion } from "../pages/NewClasificacion/NewClasificacion.js";
import { NewUsuario } from "../pages/newUsuarios/NewUsuario.js";
import { Usuarios } from "../pages/Usuarios/Usuarios.js";

export const routes = [
  {
    path: "/",
    page: () => AuthLayout(async () => await Home()),
  },
  {
    path: "/inicio",
    page: () => AuthLayout(async () => await Home()),
  },
  {
    path: "/home",
    page: () => AuthLayout(async () => await Home()),
  },
  {
    path: "/login",
    page: () => PublicLayout(() => Login()),
  },
  {
    path: "/clasificacion",
    page: (params) => AuthLayout(async () => await Clasificaciones(params)),
  },
  {
    path: "/newclasificacion",
    page: (params) => AuthLayout(async () => await NewClasificacion(params)),
  },
  {
    path: "/usuarios",
    page: () => AuthLayout(async () => await Usuarios()),
  },
  {
    path: "/newusuario",
    page: (params) => AuthLayout(async () => await NewUsuario(params)),
  },
  {
		path: '/unauthorized',
		page: () => PublicLayout(Unauthorized),
	},
  
];

export const routeNotFound = {
  path: "/notfound",
  page: () => PublicLayout(NotFound),
};
