function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);//puxando o id que tem o onclick
    let imagem = botaoClicado.querySelector('.dashboard__item__img'); //
    let botao = botaoClicado.querySelector('.dashboard__item__button');



    if (imagem.classList.contains("dashboard__item__img--rented")) {
        let devolve = prompt ('Você realmente deseja devolver? digite 1 para sim ou 2 para não');
        if (devolve == 1) {       
        imagem.classList.remove("dashboard__item__img--rented"); 
        botao.classList.remove("dashboard__item__button--return"); 
        botao.textContent = 'Alugar';
        quantidadeAlugados();
    }else{
        quantidadeAlugados();
        return;
    }    
    }else{
        imagem.classList.add("dashboard__item__img--rented"); 
        botao.classList.add("dashboard__item__button--return"); 
        botao.textContent = 'Devolver';
        quantidadeAlugados();
    }   
    }

function quantidadeAlugados(jogos, palavaraJogo) {
    jogos = document.getElementsByClassName("dashboard__item__img--rented").length;
    if (jogos > 1){
        palavaraJogo = "jogos alugados"
    }else{
        palavaraJogo = "jogo alugado"
    }
    alert ('você possui ' + jogos + ' ' + palavaraJogo);
}