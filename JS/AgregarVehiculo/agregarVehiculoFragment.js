export const agregarVehiculo = document.createRange().createContextualFragment(`

<style>
        
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-agregarVehiculo {
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  button {
    padding: 10px 30px;
    margin-left: auto;
    width: 30%;
    border-radius: 8px;
    border: solid transparent 2px;
    font-weight: 600;
    transition: all 0.2s ease-in;
    &:hover {
      border: solid rgb(0, 0, 0) 2px;
      background-color: #70a1e9;
      color: white;
    }
  }
}

.div-form {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;
  background-color: #f5f5f5;
  border-radius: 12px;
}

.input-box {
  display: flex;
  gap: 10px;

  label {
    width: 40%;
    font-weight: 600;
    display: flex;
    align-items: end;
  }
  input,
  select,
  textarea {
    width: 40%;
    padding: 14px 10px;
    text-align: center;
    border-radius: 6px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: 50px;
    opacity: 1;
    cursor: pointer;
  }
}

#input-color-envoltorio {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 2px 2px 6px 3px rgb(78, 78, 78);
}
#color {
  min-width: 80px;
  min-height: 80px;
}

@media (max-width: 800px) {
  .main-agregarVehiculo {
    gap: 30px;
  }

  form {
    gap: 40px;
  }

  .div-form {
    gap: 20px;
  }

  .input-box {
    label {
      font-size: 18px;
    }
    input,
    select,
    textarea {
      font-size: 18px;
      width: 60%;
    }
  }
}

@media (max-width: 490px) {
  .main-agregarVehiculo {
    padding: 12px 10px;
  }

  form {
    gap: 30px;
  }

  .div-form {
    width: 100%;
    padding: 10px;
  }

  .input-box {
    flex-direction: column;

    label {
      width: 100%;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 5px 10px;
      text-align: start;
      font-size: 16px;
    }
  }
}

        </style>
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
                        <select name="marca" id="select_marca">
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
                        <div id="input-color-envoltorio">
                            <input type="color" id="color" name="color"></input>
                        </div>
                    </div>

                    <div class="input-box">
                        <label for="yeear">Año</label>
                        <input type="number" id="yeear" min="2016" max="2025" value="2016" name="yeear" required></input>
                    </div>

                    <div class="input-box">
                        <label for="imagen">Imagen Vehiculo jpg</label>
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
