import { fetchMarcas } from "./fetchMarcas.js";
import { agregarVehiculo } from "./agregarVehiculoFragment.js";
import { fetchModelos } from "./fetchModelos.js";

export const agregarV = async () => {
  const fragmento = agregarVehiculo.cloneNode(true);
  const marca = fragmento.getElementById("marca");
  const modelo = fragmento.getElementById("modelo");
  const tipo = fragmento.getElementById("tipo");



  //   Aqui agrego las marcas al selectMarcas las traigo desde la bd
  const listaMarcas = await fetchMarcas();
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
