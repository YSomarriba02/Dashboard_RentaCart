export async function fetchModelos(id_Marca) {
  try {
    const fetchMo = await fetch(
      `http://localhost:3000/getModelos?marca=${id_Marca}`
    );
    const listModelos = await fetchMo.json();
    return listModelos;
  } catch (error) {
    return undefined;
  }
}
