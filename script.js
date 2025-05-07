// script.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login form");
  const cadastroForm = document.querySelector("#cadastro form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login realizado com sucesso (simulado).");
  });

  cadastroForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso (simulado).");
  });
});
