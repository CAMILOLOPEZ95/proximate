
const formulario = document.getElementById("formulario");
const valueUser = "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login";


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    console.log("Usuario:", user);
    console.log("Contraseña:", password);

    try {
        const response = await fetch(valueUser);
        const username = await response.json();

        const userValid = username.find(u => u.user === user && u.password === password);

        if (userValid) {
            console.log("Inicio de sesión exitoso.");

            formulario.reset();
        } else {
            console.log("Credenciales incorrectas.");
        }
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
});


const url = "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login";

fetch(url)
  .then(response => {
    if (response.ok) {
      console.log("La URL existe y es accesible.");
    } else {
      console.log("La URL no es accesible.");
    }
  })
  .catch(error => {
    console.error("Error al verificar la URL:", error);
  });