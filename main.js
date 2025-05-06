import { inicio } from "./JS/inicio.js";

// import { agregarVehiculo } from "./JS/AgregarVehiculo/agregarVehiculoFragment.js";
// import { fetchMarcas } from "./JS/AgregarVehiculo/fetchMarcas.js";

import { agregarV } from "./JS/AgregarVehiculo/agregarVehiculo.js";
import { eliminarVehiculo } from "./JS/EliminarVehiculo/eliminarVehiculo.js";

const variable = document.getElementById("panel-variable");

const irInicio = document.querySelector("#ir-inicio");
const irAgregarVehiculo = document.querySelector("#ir_agregarVehiculo");
const irEliminarVehiculo = document.querySelector("#ir_eliminarVehiculo");

irInicio.addEventListener("click", () => {
  variable.innerHTML = "";
  variable.append(inicio.cloneNode(true));
});

irAgregarVehiculo.addEventListener("click", async () => {
  variable.innerHTML = "";
  const nose = await agregarV();
  variable.append(nose);
});

irEliminarVehiculo.addEventListener("click", async () => {
  variable.innerHTML = "";
  const eliminarV = await eliminarVehiculo();
  variable.append(eliminarV);
});

const listaLiBtn = document.querySelectorAll(".li__btn");

listaLiBtn.forEach((e) => {
  e.addEventListener("click", () => {
    listaLiBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.classList.add("active");
  });
});
