export const eliminarVehiculoFragment = document.createRange()
  .createContextualFragment(`
        <main class="main-eliminarVehiculo">
          <h3>Eliminar Vehiculo</h3>

          <div class="input-box">
            <label for="placa">Ingrese la placa</label>
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
