export const mainUsuariosFragment = document
  .createRange()
  .createContextualFragment(
    `
        <main class="main-usuarios">
          <dialog id="dialog_add">
            <h3>Agregar Usuario</h3>
            <figure>
              <img src="./src/Assets/icons/perfil.png" alt="" />
            </figure>
            <div class="div_error">
                <p></p>
            </div>
            <form id="dialog_form">
              <div class="div_form">
                <label for="rol">Rol</label>
                <select name="rol" id="select_rol">
                  <option hidden disabled selected value=""></option>
                  <option value="3">Mecanico</option>
                  <option value="2">Vendedor</option>
                  <option value="1">Administrador</option>
                </select>
              </div>
              <div class="div_form">
                <label for="correo">Correo</label>
                <input
                  type="text"
                  id="correo"
                  name="correo"
                  minlength="6"
                  maxlength="50"
                />
              </div>
              <div class="div_form">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  minlength="4"
                  maxlength="20"
                />
              </div>
              <div class="div_form">
                <label for="nombre">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  minlength="4"
                  maxlength="20"
                />
              </div>
              <div class="div_form">
                <label for="contrasena">Contraseña</label>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  minlength="6"
                  maxlength="20"
                />
              </div>
              <nav>
                <button class="cerrar class_btn_cerrar">Cerrar</button>
                <button class="agregar class_btn_aceptar">Agregar</button>
              </nav>
            </form>
          </dialog>

          <h3>Usuarios</h3>
          <div class="buscador">
            <input type="text" />
          </div>

          <section class="section_usuarios">
            <button id="btn_agregar_usuario">
              <img src="./src/Assets/icons/add.png" alt="" />
            </button>
            <div class="targets-data">
              <p class="data-rol">Rol</p>
              <p class="data-nombres">Nombres</p>
              <p class="data-email">Email</p>
            </div>

            <div class="targets-usuarios">
            </div>
          </section>
        </main>
    `
  );
