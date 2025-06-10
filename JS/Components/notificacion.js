export function notificacion(estado, texto) {
  console.log("aqui la not");
  const notificacion = document.querySelector(".notificacion");
  const notificacionTexto = document.querySelector("#notificacion_texto");

  notificacion.style.animation = "none";
  notificacion.offsetHeight;
  notificacion.style.animation = "notificacionAnimacionEntrada 1s ease";
  notificacion.style.display = "flex";
  notificacionTexto.textContent = texto;

  if (!estado) {
    notificacion.style.backgroundColor = "red";
  } else {
    notificacion.style.backgroundColor = "green";
  }

  setTimeout(() => {
    notificacion.style.animation =
      "notificacionAnimacionSalida 2s ease-out forwards";

    setTimeout(() => {
      notificacion.style.display = "none";
    }, 2000);
  }, 4000);
}
