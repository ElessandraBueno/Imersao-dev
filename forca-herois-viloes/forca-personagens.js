function jogar(){

    herois = ["", "", ""]
    viloes = ["", "", ""]

    forcaHerois = 0
    forcaViloes = 0

    for(let i=0; i<3; i++){
        escolhaHerois = prompt("Digite o nome do herói "+ (i+1)+":")
        herois[i] = escolhaHerois

        forcaHerois = forcaHerois + (Math.floor(Math.random() * 10) + 1)
        // forcaHerois += (Math.floor(Math.randon() * 10) + 1)
    }
    alert("Seus heróis são: "+herois)

    for(let i=0;i<3;i++){
        indiceAleatorio = Math.floor(Math.random() * 10)
        viloesPossiveis = ["Venon", "Thanos", "Darth Vader", "Lord Voldemort", "Chucky", "Conde Drácula", "Freddy Krueger", "Coringa", "Exterminador", "Godzilla"]
        viloes[i] = viloesPossiveis[indiceAleatorio]

        forcaViloes = forcaViloes + (Math.floor(Math.random() * 10) + 1)
    }
    alert("Os vilões são: "+viloes)

    if(forcaHerois > forcaViloes){
        alert("Seu time é muito forte! \nVocê ganhou a disputa com os heróis "+herois+". \nSua força foi: "+forcaHerois+". \nA força dos vilões foi "+forcaViloes+".")
    }else{
        if(forcaHerois < forcaViloes){
            alert("Seu time é fraquinho! \nO computador venceu com os vilões "+viloes+". \nA força dos vilões foi "+forcaViloes+". \nA dos seus heróis foi "+forcaHerois+".")
        }else{
            alert("Os dois times tem a mesma força! \nVocês empataram!!!")
        }
    }
}