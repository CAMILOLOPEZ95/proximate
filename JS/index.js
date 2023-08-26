
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async function(event) {

  event.preventDefault();

  const username = document.getElementById("user").value;
  const pass = document.getElementById("password").value;

  const url = "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login";
  const data = {
    user: username, 
    password : pass
  };

  console.log("data : ", data);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log("Respuesta del servicio: ", result);
  })
  .catch(error => {
    console.log("Error consumir el servicio:", error);
  })
})
















// const valueUser = "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login";


// formulario.addEventListener("submit", async function(event) {

//     event.preventDefault();

//     const user = document.getElementById("user").value;
//     const password = document.getElementById("password").value;

//     console.log("Usuario:", user);
//     console.log("Contraseña:", password);

//     try {
//         const response = await fetch(valueUser);
//         const username = await response.json();

//         const userValid = username.find(u => u.user === user && u.password === password);


//         if (userValid) {
//             console.log("Inicio de sesión exitoso.");

//             formulario.reset();
//         } else {
//             console.log("Credenciales incorrectas.");
//         }
//     } catch (error) {
//         console.error("Error al cargar el archivo JSON:", error);

//     }
// });


// //prueba de url

// const url = "https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login";

// fetch(url)
//   .then(response => {
//     if (response.ok) {
//       console.log("La URL existe y es accesible.");
//     } else {
//       console.log("La URL no es accesible.");
//     }
//   })
//   .catch(error => {
//     console.error("Error al verificar la URL:", error);
//   });