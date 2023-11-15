import { Message } from "../../../components";
import { navigateTo } from "../../../router/router";
import { addClasificacion} from "../../../services/scrap/addClasificacion";

export const useNewClasificacion = (view) => {
  const divElement = document.createElement("div");
  divElement.classList = "newCategoria";
  divElement.innerHTML = view;

  const btnAddClasificacion = divElement.querySelector("#btnNewClasificacion");

  if (btnAddClasificacion) {
    btnAddClasificacion.addEventListener("click", async () => {

      const inputElement = document.getElementById('inputImage');
      const file = inputElement.files[0];

      const kg = divElement.querySelector("#kg");
      if (file && kg.value != "") {
        const reader = new FileReader();

        // Utilizar una función asíncrona dentro del evento click
        const handleFileRead = async () => {
          reader.onloadend = async function () {
            const base64Image = reader.result.split(',')[1];

            const request = {
              kg: kg.value,
              bytesImage: base64Image
            };

            await addClasificacion(request);
            navigateTo("/Clasificacion");
          };

          reader.readAsDataURL(file);
        };

        await handleFileRead(); // Llama a la función asíncrona

      } else {
        Message('ERROR TODOS los campos son obligatorios', "warn");
      }

    });
  }
  return divElement;
};
