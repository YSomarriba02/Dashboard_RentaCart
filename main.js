import { inicio } from "./JS/inicio.js";
import { agregarV } from "./JS/AgregarVehiculo/agregarVehiculo.js";
import { eliminarVehiculo } from "./JS/EliminarVehiculo/eliminarVehiculo.js";
import { agregarModelo } from "./JS/AgregarModelo/agregarModelo.js";
import { gestionUsuarios } from "./JS/GestionUsuarios/gestionUsuarios.js";

import { usuariosFragment } from "./JS/Usuarios/usuariosFragment.js";

const variable = document.getElementById("panel-variable");

const irInicio = document.querySelector("#ir-inicio");
const irAgregarVehiculo = document.querySelector("#ir_agregarVehiculo");
const irEliminarVehiculo = document.querySelector("#ir_eliminarVehiculo");
const irAgregarModelo = document.querySelector("#ir_agregarModelo");
const irgestionUsuarios = document.querySelector("#ir_gestionUsuarios");

irInicio.addEventListener("click", () => {
  variable.innerHTML = "";
  variable.append(inicio.cloneNode(true));
});

irAgregarVehiculo.addEventListener("click", async () => {
  irAgregarVehiculo.disabled = true;
  variable.innerHTML = "";
  try {
    const nose = await agregarV();
    variable.append(nose);
  } catch (e) {
    console.error(e);
  } finally {
    irAgregarVehiculo.disabled = false;
  }
});

irEliminarVehiculo.addEventListener("click", async () => {
  variable.innerHTML = "";
  const eliminarV = await eliminarVehiculo();
  variable.append(eliminarV);
});

irAgregarModelo.addEventListener("click", async () => {
  variable.innerHTML = "";
  irAgregarModelo.disabled = true;
  try {
    const agregarM = await agregarModelo();
    variable.append(agregarM);
  } catch (e) {
    console.error(e);
  } finally {
    irAgregarModelo.disabled = false;
  }
});

irgestionUsuarios.addEventListener("click", async () => {
  variable.innerHTML = "";
  irgestionUsuarios.disabled = true;
  try {
    const gestionU = await gestionUsuarios();
    variable.append(gestionU);
  } catch (e) {
    console.error(e);
  } finally {
    irgestionUsuarios.disabled = false;
  }
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

//revisar porque cuando no tengo click no hay nada
