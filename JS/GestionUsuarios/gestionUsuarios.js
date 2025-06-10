import { mainUsuariosFragment } from "./gestionUsuariosFragment";

export async function gestionUsuarios() {
  const fragment = mainUsuariosFragment.cloneNode(true);

  const main = fragment.querySelector(".main-usuarios");
  const dialogAdd = main.querySelector("#dialog_add");
  const formulario = dialogAdd.querySelector("form");
  const selectRol = dialogAdd.querySelector("#select_rol");
  const imgRol = dialogAdd.querySelector("img");
  const divError = dialogAdd.querySelector(".div_error");
  const divErrortext = divError.querySelector("P");
  const dialogAddBtnCerrar = dialogAdd.querySelector(".cerrar");
  const btnEnviarForm = dialogAdd.querySelector(".agregar");

  const btnAddUsuario = main.querySelector("#btn_agregar_usuario");
  const targetsUsuarios = main.querySelector(".targets-usuarios");

  //Los inputs
  const inputNombre = dialogAdd.querySelector("#nombre");
  const inputApellido = dialogAdd.querySelector("#apellido");
  const inputContrasena = dialogAdd.querySelector("#contrasena");
  const inputSelect = dialogAdd.querySelector("#select_rol");
  const inputCorreo = dialogAdd.querySelector("#correo");

  const targetUsuarioFragment = document.createRange().createContextualFragment(
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

  // Aca la peticion y pintado de usuarios
  try {
    const fetchUsuarios = await fetch("http://localhost:3000/getUsuarios");
    const repUsuarios = await fetchUsuarios.json();

    if (!repUsuarios.Repuesta.isValid) {
      if (repUsuarios.Repuesta.status == 403) {
        targetsUsuarios.textContent = "No tienes acceso";
        return;
      }
      targetsUsuarios.textContent = "No hay usuarios";
      return;
    }

    const Usuarios = repUsuarios.Usuarios;
    Usuarios.forEach((usuario) => {
      const trgf = targetUsuarioFragment.cloneNode(true);
      const targetUsuario = trgf.querySelector(".target-usuario");
      const img = targetUsuario.querySelector("img");
      const rol = targetUsuario.querySelector(".rol");
      const nombres = targetUsuario.querySelector(".nombres");
      const email = targetUsuario.querySelector(".email");
      const nombresUsuario = `${usuario.nombre} ${usuario.apellido}`;

      const RolUsuario = usuario.id_Rol;
      let urlImgRol;
      let rolNombre;

      //Uy mala practica esto pero si no lo hago asi deberia de hacer una consula
      //de los Roles y eso me consume + ancho de banda en cada peticion
      switch (RolUsuario) {
        case 1: {
          urlImgRol = "../../src/Assets/icons/administrador.png";
          rolNombre = "Administrador";
          break;
        }
        case 2: {
          urlImgRol = "../../src/Assets/icons/vendedor.png";
          rolNombre = "Vendedor";

          break;
        }
        case 3: {
          urlImgRol = "../../src/Assets/icons/mecanico.png";
          rolNombre = "Mecanico";
          break;
        }
      }
      img.setAttribute("src", urlImgRol);
      rol.textContent = rolNombre;
      nombres.textContent = nombresUsuario;
      email.textContent = usuario.correo;

      targetsUsuarios.appendChild(targetUsuario);
    });
  } catch (e) {
    console.log(e);
  }

  btnAddUsuario.addEventListener("click", () => {
    dialogAdd.showModal();
    inputNombre.setAttribute("required", true);
    inputApellido.setAttribute("required", true);
    inputSelect.setAttribute("required", true);
    inputCorreo.setAttribute("required", true);
    inputContrasena.setAttribute("required", true);
  });
  dialogAddBtnCerrar.addEventListener("click", () => {
    // cuando cierre el modal
    // pongo todo en orden, el selectedIndex y la imagen
    //y quito el required de los input porque si
    //se oculta la caja padre con none
    //los input required lanzan errores porque no pueden ser enfocados
    inputNombre.removeAttribute("required");
    inputApellido.removeAttribute("required");
    inputSelect.removeAttribute("required");
    inputCorreo.removeAttribute("required");
    inputContrasena.removeAttribute("required");

    inputNombre.value = "";
    inputApellido.value = "";
    inputSelect.selectedIndex = 0;
    inputCorreo.value = "";
    inputContrasena.value = "";

    imgRol.setAttribute("src", "src/Assets/icons/perfil.png");
    dialogAdd.close();
  });
  selectRol.addEventListener("change", () => {
    const rolValue = selectRol.options[selectRol.selectedIndex].text;

    switch (rolValue) {
      case "Administrador": {
        imgRol.setAttribute("src", "src/Assets/icons/administrador.png");
        break;
      }
      case "Vendedor": {
        imgRol.setAttribute("src", "src/Assets/icons/vendedor.png");
        break;
      }
      case "Mecanico": {
        imgRol.setAttribute("src", "src/Assets/icons/mecanico.png");
        break;
      }
      default: {
        imgRol.setAttribute("src", "src/Assets/icons/perfil.png");
        break;
      }
    }
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  btnEnviarForm.addEventListener("click", async (e) => {
    e.target.disabled = true;

    if (!formulario.checkValidity()) {
      alert("Agrege la informacion correctamente!!!");
      e.target.disabled = false;
      return;
    }
    const formData = new FormData(formulario);
    const data = new URLSearchParams(formData);

    const fecthing = await fetch("http://localhost:3000/postUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });
    const repuesta = await fecthing.json();
    console.log(repuesta);
    if (!repuesta.isValid) {
      console.log("tamos en error");
      divErrortext.style.backgroundColor = "rgb(252, 98, 98)";
    } else {
      divErrortext.style.backgroundColor = "rgb(98, 252, 119)";
      setTimeout(() => {
        inputNombre.value = "";
        inputApellido.value = "";
        inputSelect.selectedIndex = 0;
        inputCorreo.value = "";
        inputContrasena.value = "";
      }, 2300);
    }
    divErrortext.textContent = repuesta.mensaje;
    divErrortext.style.display = "flex";
    divErrortext.style.animation = "none";
    divErrortext.offsetHeight;

    divErrortext.style.animation = "div_errorEntrada 0.7s linear";
    setTimeout(() => {
      divErrortext.style.animation = "div_errorSalida 0.6s linear";
      setTimeout(() => {
        divErrortext.style.display = "none";
        e.target.disabled = false;
      }, 600);
    }, 1700);
  });
  return fragment;
}
