export const targetUsuarioFragment = document
  .createRange()
  .createContextualFragment(
    `
    <div class="target-usuario">
        <figure class="target-figure">
            <img src="./src/Assets/icons/mecanico.png" alt="" />
        </figure>
        <div class="target-text">
            <p class="rol">Mecanico</p>
            <p class="nombres">Jhon Mendoza Beer</p>
            <p class="email">jhonM@gmail.com</p>
        </div>
        <nav class="target-acciones">
            <button>Editar</button>
            <button>Eliminar</button>
        </nav>
    </div>
    `
  );
