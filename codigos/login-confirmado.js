var login = "";
login = Object.keys(localStorage);
login2 = login[0];
var senha = "A";
senha = localStorage.getItem('teste@teste.com', '123456');
var botao_login = document.querySelector("#btn");

botao_login.addEventListener('click', function(){    

    if((login2 === 'teste@teste.com') && (senha = '123456')){
        window.location.href = "produtos.html";
    } else{
        alert("São diferentes");
    }
    

});

