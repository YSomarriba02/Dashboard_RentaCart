import "../../styles/agregarVehiculo.css";

export const agregarVehiculo = document.createRange().createContextualFragment(`
        <main class="main-agregarVehiculo">
            <h3>Agregar Vehiculo</h3>
             <form action="">
                <div class="input_box">
                    <label for="marca">Seleccione Marca</label>
                    <select name="marca" id="marca">
                    </select>
                </div>
                <div class="input-box">
                    <label for="modelo">Seleccione Modelo</label>
                    <select name="modelo" id="modelo">
                    </select>
                </div>
                <div class="input-box">
                    <label for="tipo">Tipo de Vehiculo</label>
                    <select name="tipo" id="tipo">
                        <option value=1>Sedan</option>
                        <option value=2>SUV Compacto</option>
                        <option value=3>SUV Mediano</option>
                        <option value=4>Camioneta Pick-Up</option>
                        <option value=5>Hatchback</option>
                        <option value=6>Minivan</option>
                        <option value=6>Microbus</option>
                    </select>
                </div>

                <div class="input-box">
                    <label for="traccion">Tipo Traccion</label>
                    <select name="traccion" id="traccion">
                        <option value=1>Delantera</option>
                        <option value=2>Trasera</option>
                        <option value=3>4x4</option>
                        <option value=4>AWD</option>
                    </select>
                </div>

                <div class="input-box">
                    <label for="tipo">Cantidad Puertas</label>
                    <input type="number" max="10" min="2" value=2></input>
                </div>

                <div class="input-box">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" name="descripcion" rows="4" cols="50" placeholder="Escribe aquí la descripción..."></textarea>
                </div>

                <div class="input-box">
                    <label for="color">Color</label>
                    <input type="color" id="color"></input>
                </div>

                <div class="input-box">
                    <label for="precioDia">Precio x Día $</label>
                    <input type="number" id="precioDia" step="0.01" placeholder="0.01"></input>
                </div>

                <div class="input-box">
                    <label for="yeear">Año</label>
                    <input type="number" id="yeear" min="2012" max="2025" value="2012"></input>
                </div>

                <div class="input-box">
                    <label for="imagen">Imagen Vehiculo</label>
                    <input type="file"></input>
                </div>
        </form>
        </main>
    `);
