function jogo() {
    idade = prompt("Qual a sua idade?");
    if (idade < 18) {
        alert("Menor de idade. Você não pode jogar!");
    } else {
        alert("Maior de idade");
    }

    if (idade >= 18) {
        escolhaUser = prompt("Escolha: 1-Pedra, 2-Papel, 3-Tesoura");
        escolhaComp = Math.floor(Math.random() * 3) + 1;

        if (escolhaUser == escolhaComp) {
            alert("Empate!");
        }
        if (escolhaUser == 1) {
            if (escolhaComp == 2) {
                //Jogador Pedra, Computador Papel --> Computador vence
                alert("Computador venceu, escolheu papel");
            }
            if (escolhaComp == 3) {
                //Jogador Pedra, Computador Tesoura --> Jogador vence
                alert("Jogador venceu, computador escolheu Tesoura");
            }
        }


        if (escolhaUser == 2) {
            if (escolhaComp == 1) {
                //Jogador Papel, Computador Pedra --> Jogador vence
                alert("Jogador venceu, escolheu Papel");
            }
            if (escolhaComp == 3) {
                //Jogador Papel, Computador Tesoura --> Computador vence
                alert("Computador venceu, escolheu Tesoura");
            }
        }


        if (escolhaUser == 3) {
            if (escolhaComp == 1) {
                //Jogador Tesoura, Computador Pedra --> Computador vence
                alert("Computador venceu, escolheu Pedra");
            }
            if (escolhaComp == 2) {
                //Jogador Tesoura, Computador Papel --> Jogador vence
                alert("Jogador venceu, escolheu Tesoura");
            }
        }
        alert("A escolha do computador é: " + escolhaComp);
    }


}