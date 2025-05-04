export async function fetchMarcas() {
  try {
    const fechM = await fetch("http://localhost:3000/getMarcas");
    const repuesta = await fechM.json();
    console.log(repuesta);
    return repuesta;
  } catch (error) {
    return undefined;
  }
}
