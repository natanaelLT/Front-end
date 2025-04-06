
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (username === "" || password === "") {
      errorMsg.textContent = "Todos os campos são obrigatórios!";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "A senha deve ter pelo menos 6 caracteres!";
      return;
    }

    // Simulação de login (pode ser substituído por um backend real)
    if (username === "admin" && password === "123456") {
      alert("Login bem-sucedido!");
      window.location.href = "dashboard.html"; // Redireciona para outra página
    } else {
      errorMsg.textContent = "Usuário ou senha inválidos!";
    }
  });
