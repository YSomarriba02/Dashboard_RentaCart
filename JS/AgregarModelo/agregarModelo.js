import { agregarModeloFragment } from "./agregarModeloFragment";
import { notificacion } from "../Components/notificacion";

export async function agregarModelo() {
  const fragment = agregarModeloFragment.cloneNode(true);

  const fetchingMarcas = await fetch("http://localhost:3000/getMarcas");
  const marcas = await fetchingMarcas.json();
  const selectMarca = fragment.getElementById("select_marca");

  marcas.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.id_Marca;
    option.text = element.marca;
    selectMarca.add(option);
  });
  selectMarca.selectedIndex = marcas.length - 1;

  const inputAgregarMarca = fragment.querySelector("#input-agregarMarca");
  const form = fragment.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const buttonAgregarMarca = fragment.querySelector("#button-agregarMarca");

  buttonAgregarMarca.addEventListener("click", async () => {
    buttonAgregarMarca.disabled = true;
    const marcainput = inputAgregarMarca.value;

    try {
      const mandar = await fetch("http://localhost:3000/postMarca", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: marcainput,
      });
      const repuesta = await mandar.json();

      if (!repuesta.status) {
        notificacion(false, repuesta.mensaje);
      } else {
        notificacion(true, repuesta.mensaje);

        const nuevo = document.createElement("option");
        nuevo.value = repuesta.insert.id_Marca;
        nuevo.text = repuesta.insert.marca;
        selectMarca.add(nuevo);
        selectMarca.selectedIndex = selectMarca.length - 1;

        const detail = document.querySelector("details");
        detail.removeAttribute("open");
      }
    } catch (e) {
      console.error(e);
    } finally {
      //este posiblemente lo quite en produccion el setTimeout lo de adentro si lo dejare
      setTimeout(() => {
        buttonAgregarMarca.disabled = false;
      }, 6000);
    }
  });

  const buttonAgregarModelo = fragment.querySelector("#button-agregarModelo");

  const formModelo = fragment.querySelector("#form-modelo");
  formModelo.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formModelo);
    const urlCode = new URLSearchParams(formData);
    urlCode.delete("marca");
    const fetching = await fetch("http://localhost:3000/postModelo", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlCode.toString(),
    });
    const repuesta = await fetching.json();

    if (repuesta.isValid) {
      notificacion(true, repuesta.mensaje);
    } else {
      notificacion(false, repuesta.mensaje);
    }
  });

  return fragment;
}
