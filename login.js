document.getElementById("loginForm").addEventListener("submit", function (e) {

  e.preventDefault(); 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const credentiales = {
    username: username,
    password: password
  };
  fetch('https://fakestoreapi.com/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentiales)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      //Guardar los datos en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);

      // Redirigir después de 1 segundo
        setTimeout(() => {
          window.location.href = "tienda.html";
        }, 1000);
    })
    

    .catch(error => {
      console.error("Error:", error);
      document.getElementById("mensaje").textContent = "Nombre de usuario o contreña no válido";
    });
});
