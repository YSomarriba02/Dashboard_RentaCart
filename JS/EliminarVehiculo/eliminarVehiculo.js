import { eliminarVehiculoFragment } from "./eliminarVehiculoFragment.js";

import "../../styles/eliminarVehiculo.css";

export async function eliminarVehiculo() {
  const fragmento = eliminarVehiculoFragment.cloneNode(true);
  const mainEliminar = fragmento.querySelector(".main-eliminarVehiculo");

  const buscadorPlaca = fragmento.querySelector("#buscador-placa");
  buscadorPlaca.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();

    const cards = document.querySelectorAll(".card__vehiculo");
    cards.forEach((e) => {
      const content = e.textContent.toLowerCase();
      if (!content.includes(value)) {
        e.classList.remove("show");
        e.classList.add("ocultar");
        return;
      }
      e.classList.remove("ocultar");
      e.classList.add("show");
    });
  });

  mainEliminar.addEventListener("click", async () => {
    const fetching = await fetch(`http://localhost:3000/getVehiculos`);
    const repuesta = await fetching.json();
    console.log(repuesta);

    const cardVehiculoFragment = document.createRange()
      .createContextualFragment(`
            <section class="card__vehiculo">
                  <div class="card__top">
                    <div class="vehiculo__data">
                      <p class="data__modelo"></p>
                    </div>
                    <img
                      src=""
                      alt="toyota yaris"
                      class="vehiculo__img"
                    />
                  </div>
                  <hr />
                  <div class="card__bottom">
                    <div class="v__data">
                      <p class="v__yeear">2010</p>
                      <p class="v__tipo"></p>
                      <p class="v__placa"></p>
                    </div>
                    <button class="vehiculo__buttom">Eliminar</button>
                  </div>
                </section>
        `);

    const sectionBuscados = mainEliminar.querySelector(".section-buscados");

    for (let i = 0; i < repuesta.length; i++) {
      const vehiculo = repuesta[i];
      const nombreMarca = vehiculo.Marca.marca;
      const nombreModelo = vehiculo.Modelo.modelo;
      const dataConcat = `${nombreMarca} ${nombreModelo}`;
      const url =
        "https://pibmgbatahdbrcdxjqbv.supabase.co/storage/v1/object/public/autosimagenes/" +
        vehiculo.imagenURL;

      const nuevo = cardVehiculoFragment.cloneNode(true);
      const data = nuevo.querySelector(".data__modelo");
      const img = nuevo.querySelector(".vehiculo__img");
      const placa = nuevo.querySelector(".v__placa");
      const tipo = nuevo.querySelector(".v__tipo");
      const btnEliminar = nuevo.querySelector(".vehiculo__buttom");

      data.textContent = dataConcat;
      img.setAttribute("src", url);
      placa.textContent = vehiculo.placa;
      tipo.textContent = vehiculo.Tipo.tipo;

      btnEliminar.addEventListener("click", async () => {
        const placaVehiculo = repuesta[i].placa;
        const fetchingBorrado = await fetch(
          `http://localhost:3000/deleteVehiculo?borrar=${placaVehiculo}`,
          {
            method: "DELETE",
          }
        );
        const borrado = await fetchingBorrado.text();
        console.log(borrado);
      });

      sectionBuscados.append(nuevo);
    }
  });

  return fragmento;
}
