function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);//puxando o id que tem o onclick
    let imagem = botaoClicado.querySelector('.dashboard__item__img'); //
    let botao = botaoClicado.querySelector('.dashboard__item__button');



    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented"); 
        botao.classList.remove("dashboard__item__button--return"); 
        botao.textContent = 'Alugar';

    }else{
        imagem.classList.add("dashboard__item__img--rented"); 
        botao.classList.add("dashboard__item__button--return"); 
        botao.textContent = 'Devolver';
    }   
    }
