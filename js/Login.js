document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulação de verificação de login. Aqui, você pode validar os dados conforme necessário.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Redireciona para a página de seleção de personagens se os campos estiverem preenchidos.
        window.location.href = "selecao.html";
    } else {
        alert("Por favor, insira um nome de usuário e senha válidos.");
    }
});
