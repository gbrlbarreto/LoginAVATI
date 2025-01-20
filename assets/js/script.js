function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');

    // Limpar mensagem de erro ou sucesso anterior
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
  
    // Verificar se o campo de email está vazio ou não tem um formato válido
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
      errorMessage.textContent = "Por favor, insira um e-mail válido.";
      errorMessage.style.display = "block"; // Torna a mensagem de erro visivel na tela 
      return false; // Impedir o envio do formulário
    }
  
    // Verificar se o campo de senha tem menos de 6 caracteres
    if (password === "" || password.length < 6) {
      errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
      errorMessage.style.display = "block"; // Torna a mensagem de erro visivel na tela
      return false; // Impedir o envio do formulário
    }

    // Exibir a mensagem de usuário autenticado
    successMessage.textContent = "Usuário logado com sucesso!";
    successMessage.style.display = "block"; // Exibe a mensagem de sucesso na tela
    // return true; // Permitir o envio do formulário e a pagina recarrega ou redireciona
    return false;
}
  