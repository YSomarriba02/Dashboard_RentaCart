import { fetchMarcas } from "./fetchMarcas.js";
import { agregarVehiculo } from "./agregarVehiculoFragment.js";
import { fetchModelos } from "./fetchModelos.js";

export const agregarV = async () => {
  const fragmento = agregarVehiculo.cloneNode(true);
  const marca = fragmento.getElementById("marca");
  const modelo = fragmento.getElementById("modelo");
  const tipo = fragmento.getElementById("tipo");

  const noConectadoFragment = document
    .createRange()
    .createContextualFragment(`<h1>No conectado</h1>`);

  //   Aqui agrego las marcas al selectMarcas las traigo desde la bd
  const listaMarcas = await fetchMarcas();
  if (!listaMarcas) {
    console.log("no marcas");
    return noConectadoFragment;
  }

  const form = fragmento.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formulario = new FormData(form);

    const fetching = await fetch("http://localhost:3000/setv", {
      method: "POST",
      body: formulario,
    });
    const repuesta = await fetching.json();
    console.log(repuesta);

    const dialog = document.getElementById("dialog");
    const imagenDialog = document.getElementById("dialog__img");
    const parrafoDialog = document.getElementById("dialog__p");
    const btnCerrar = document.getElementById("cerrar-dialog");

    btnCerrar.addEventListener("click", () => dialog.close());
    parrafoDialog.textContent = repuesta.mensaje;
    dialog.showModal();
    if (!repuesta.status) {
      imagenDialog.setAttribute("src", "../../src/Assets/icons/equis.svg");
      btnCerrar.style.backgroundColor = "red";
      return;
    }
    imagenDialog.setAttribute("src", "../../src/assets/icons/check.svg");
    btnCerrar.style.backgroundColor = "green";
  });

  for (let i = 0; i < listaMarcas.length; i++) {
    const text = listaMarcas[i].marca;
    const value = listaMarcas[i].id_Marca;
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    marca.add(option);
  }

  //   Aqui agrego los modelos al selectModelos dependiendo del selectModeloL
  marca.addEventListener("change", async () => {
    modelo.innerHTML = "";
    console.log("cambio");
    const idMarca = marca.value;
    const listaModelos = await fetchModelos(idMarca);

    if (!listaModelos) {
      return noConectadoFragment;
    }

    for (let i = 0; i < listaModelos.length; i++) {
      const text = listaModelos[i].modelo;
      const value = listaModelos[i].id_Modelo;
      const option = document.createElement("option");
      option.value = value;
      option.text = text;
      modelo.add(option);
    }
  });
  marca.dispatchEvent(new Event("change"));

  return fragmento;
};
