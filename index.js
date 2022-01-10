let testePalavras = ["aaa", "ab", "abb", "bbcb"];

function verificarPalavra(palavra) {

    let vetorAux = [];

    for (let i = 0; i < palavra.length; i++) {
        vetorAux.push(palavra[i]);
    }

    everyEqual = vetorAux.every(e => e === "a") // verifica se só existem letras iguais 

    if (palavra[0] === "a" && everyEqual) { //primeiro caso
        console.log(palavra, "não foi aceita");
    } else {
        let qtdB = vetorAux.filter(x => x === "b").length; //verifica quantos "b" tem na palavra

        if (qtdB >= 2) {
            console.log(palavra, "foi aceita");
        } else {
            console.log(palavra, "não foi aceita");
        }
    }
}


for (let i = 0; i < testePalavras.length; i++) verificarPalavra(testePalavras[i]);
