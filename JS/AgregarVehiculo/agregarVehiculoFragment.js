import "../../styles/agregarVehiculo.css";

export const agregarVehiculo = document.createRange().createContextualFragment(`
        <main class="main-agregarVehiculo">
            <h3>Agregar Vehiculo</h3>

             <form action="">
                <div class="div-form">
                    <h5>Informacion General</h5>

                    <div class="input-box">
                        <label for="placa">Placa</label>
                        <input type="text" id="placa" minlength="5" maxlength="8" required placeholder="M180258" name="placa"></input>
                    </div>

                    <div class="input-box">
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
                        <label for="tipo">Cantidad Asientos</label>
                        <input id="tipo" type="number" max="30" min="2" value=2 name="asientos" required></input>
                    </div>

                    <div class="input-box">
                        <label for="tipo">Cantidad Puertas</label>
                        <input id="puertas" type="number" max="10" min="2" value=2 name="puertas" required></input>
                    </div>

                    <div class="input-box">
                        <label for="descripcion">Descripcion</label>
                        <textarea id="descripcion" name="descripcion" rows="4" cols="50" placeholder="Escribe aquí la descripción..." required></textarea>
                    </div>

                    <div class="input-box">
                        <label for="color">Color</label>
                        <input type="color" id="color" name="color"></input>
                    </div>

                    <div class="input-box">
                        <label for="precioDia">Precio x Día $</label>
                        <input type="number" id="precioDia" step="0.01" placeholder="0.01" value=10.99 name="precio" required></input>
                    </div>

                    <div class="input-box">
                        <label for="yeear">Año</label>
                        <input type="number" id="yeear" min="2016" max="2025" value="2016" name="yeear" required></input>
                    </div>

                    <div class="input-box">
                        <label for="imagen">Imagen Vehiculo jpg/jpeg</label>
                        <input type="file" name="img" required></input>
                    </div>
                </div>

                <div class="div-form">
                    <h5>Informacion Mecanica</h5>
                    <div class="input-box">
                        <label for="motor">Motor cc</label>
                        <input type="number" id="motor" name="motor" step="100" value=0 min=0 ></input>  
                        </select>
                    </div>

                    <div class="input-box">
                        <label for="torque">Torque Nm</label>
                        <input type="number" id="torque" name="torqueNm" step="10" value=0 min=0></input>
                    </div>

                    <div class="input-box">
                        <label for="potencia">Potencia HP</label>
                        <input type="number" id="potencia" name="potenciaHP" step="10" value=0 min=0></input>  
                    </div>

                    <div class="input-box">
                        <label for="velocidad">Velocidad Maxima</label>
                        <input type="number" id="velocidad" name="velocidadMaximaKm" step="10" max="380" min="10" value=0></input>  
                    </div>

                    <div class="input-box">
                        <label for="capacidadCarga">Capacida carga kg</label>
                        <input type="number" id="capacidadCarga" name="capacidadCargaKg" step="10" max="4000" min="0" value=0></input>  
                    </div>

                    <div class="input-box">
                        <label for="capacidadLitrosT">Capacida del Tanque en Lts</label>
                        <input type="number" id="capacidadLitrosT" name="capacidadLitrosTanque" min ="10" value=0></input>  
                    </div>

                    <div class="input-box">
                        <label for="autonomia">Autonomia Km</label>
                        <input type="number" id="autonomia" name="autonomiaKm" min="10" value=0></input>  
                    </div>

                    <div class="input-box">
                        <label for="tipoCombustible">Tipo Combustibe</label>
                        <select name="tipoCombustible">
                            <option value="Gasolina">Gasolina</option>
                            <option value="Diesel">Diesel</option>
                        </select>  
                    </div>
                    
                    <div class="input-box">
                        <label for="transmision">Tipo Transmisión</label>
                        <select name="tipoTransmision" id="transmision">
                            <option value="Automatico">Automatico</option>
                            <option value="Manual">Manual</option>
                        </select>  
                    </div>

                </div>

                <div class="div-form">
                    <h5>Informacion  Tecnologica</h5>

                    <div class="input-box">
                        <label id="AC">Tiene AC</label>
                        <select name="isAC" id="AC">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>

                    <div class="input-box">
                        <label id="sensores">Sensores de parqueo</label>
                        <select name="isSensores" id="sensores">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>

                    <div class="input-box">
                        <label id="camaras">Camara reversa</label>
                        <select name="isCamaras" id="camaras">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>
                </div>


                <div class="div-form">
                    <h5>Informacion  Seguridad</h5>

                    <div class="input-box">
                        <label id="airbags">Numero Airbags</label>
                        <input name="numeroAirbags" id="airbags" type="number" min="0" max="10" value="0"></input> 
                    </div>

                    <div class="input-box">
                        <label id="frenos">Tiene Frenos ABS</label>
                        <select name="isFrenoABS" id="frenos">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>

                    <div class="input-box">
                        <label id="controlEstabilidad">Control Estabilidad</label>
                        <select name="isControlEstabilidad" id="controlEstabilidad">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>

                    <div class="input-box">
                        <label id="asistenciaFrenado">Asistencia frenado</label>
                        <select name="isAsistenciaFrenado" id="asistenciaFrenado">
                            <option value=1>Si</option>
                            <option value=0>No</option>
                        </select>  
                    </div>
                    
                </div>
                <button>Enviar</button>
            </form>
        </main>
    `);
