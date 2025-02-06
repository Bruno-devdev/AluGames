function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);//puxando o id com o onclick
    let imagem = botaoClicado.querySelector('.dashboard__item__img'); //
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    if (botao.classList.contains("dashboard__item__button")){
        botao.classList.remove("dashboard__item__button");
        botao.classList.add("dashboard__item__img dashboard__item__img--rented");
       

    }else{
        botao.classList.add("dashboard__item__button");
        botao.classList.remove("dashboard__item__img dashboard__item__img--rented");
    }
    }
