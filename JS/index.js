const ingresar = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert("Ingrese los datos correctamente");
    return;
  }

  const formData = new FormData(form);
  const urlFormData = new URLSearchParams(formData);
  const fetchForm = await fetch("http://localhost:3000/iniciarSesionUsuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlFormData.toString(),
  });
  const repuesta = await fetchForm.json();

  if (!repuesta.isValid) {
    console.log("No tienes Acceso");
    return;
  }
});
