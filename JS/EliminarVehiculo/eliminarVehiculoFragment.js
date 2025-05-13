export const eliminarVehiculoFragment = document.createRange()
  .createContextualFragment(`
        <main class="main-eliminarVehiculo">
          <h3 id="titulo-eliminar-vehiculo">Eliminar Vehiculo</h3>

          <div class="input-box" id="eliminar-input">
            <input
              type="text"
              id="buscador-placa"
              name="placa"
              placeholder="M180988"
            />
          </div>

          <section class="section-buscados"></section>
        </main>
    `);
