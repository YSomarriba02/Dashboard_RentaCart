import "../styles/inicio.css";

export const inicio = document.createRange().createContextualFragment(`
    <main class="main-inicio">
        <h3>Inicio</h3>
        <div class="informacion-puntual">
            <div class="tarjeta">
                <figure style="background-color: rgb(32, 196, 87)">
                    <img src="../src/Assets/icons/car-check.png">
                </figure>
                <p class="tarjeta__titulo">Vehiculos Disponibles</p>
                <p class="tarjeta__dato">${10}</p>
            </div>

             <div class="tarjeta">
                <figure style="background-color: rgb(245, 158, 87)">
                    <img src="../src/Assets/icons/car-alquilado.png">
                </figure>
                <p class="tarjeta__titulo">Vehiculos Alquilados</p>
                <p class="tarjeta__dato">${10}</p>
            </div>

             <div class="tarjeta">
                <figure style="background-color: rgb(223, 63, 23)">
                    <img src="../src/Assets/icons/car-repair.png">
                </figure>
                <p class="tarjeta__titulo">Vehiculos en reparacion</p>
                <p class="tarjeta__dato">${10}</p>
            </div>
        </div>
    </main>
    `);
