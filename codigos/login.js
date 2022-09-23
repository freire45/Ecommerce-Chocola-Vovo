var botaologin = document.querySelector("#botao-login");



botaologin.addEventListener('click', function(){
    window.location.href = "login.html";
    localStorage.setItem('teste@teste.com', '123456');
});