document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {
        alert("Registro concluído com sucesso!");
        
        // Redirecionar para a página de login após o registro
        window.location.href = "index.html";
    }
});
