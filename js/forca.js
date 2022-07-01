let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "PAÍSES"
    },
    palavra002 = {
        nome: "MÉXICO",
        categoria: "PAÍSES"
    },
    palavra003 = {
        nome: "DINAMARCA",
        categoria: "PAÍSES"
    },
    palavra004 = {
        nome: "ARGÉLIA",
        categoria: "PAÍSES"
    },
    palavra005 = {
        nome: "RÚSSIA",
        categoria: "PAÍSES"
    },
    palavra006 = {
        nome: "PERU",
        categoria: "PAÍSES"
    },
    palavra007 = {
        nome: "ESLOVÁQUIA",
        categoria: "PAÍSES"
    },
    palavra008 = {
        nome: "ITÁLIA",
        categoria: "PAÍSES"
    },
    palavra009 = {
        nome: "ARGÉLIA",
        categoria: "PAÍSES"
    },
    palavra010 = {
        nome: "ESLOVÊNIA",
        categoria: "PAÍSES"
    },
    palavra011 = {
        nome: "AUSTRÁLIA",
        categoria: "PAÍSES"
    },
    palavra012 = {
        nome: "SÉRVIA",
        categoria: "PAÍSES"
    },
    palavra013 = {
        nome: "ALEMANHA",
        categoria: "PAÍSES"
    },
    palavra014 = {
        nome: "GANA",
        categoria: "PAÍSES"
    },
    palavra015={
        nome: "GRÉCIA",
        categoria: "PAÍSES"
    },
    palavra016 = {
        nome: "BRASIL",
        categoria: "PAÍSES"
    },
    palavra017 = {
        nome: "NIGÉRIA",
        categoria: "PAÍSES"
    },
    palavra018 = {
        nome: "ANGOLA",
        categoria: "PAÍSES"
    },
    palavra019 = {
        nome: "CANADÁ",
        categoria: "PAÍSES"
    },
    palavra020 = {
        nome: "CHINA",
        categoria: "PAÍSES"
    },
    palavra021 = {
        nome: "CARRO",
        categoria: "TRANSPORTES"
    },
    palavra022 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTES"
    },
    palavra023 = {
        nome: "BARCO",
        categoria: "TRANSPORTES"
    },
    palavra024 = {
        nome: "NAVIO",
        categoria: "TRANSPORTES"
    },
    palavra025 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTES"
    },
    palavra026 = {
        nome: "LANCHA",
        categoria: "TRANSPORTES"
    },
    palavra027 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTES"
    },
    palavra028 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTES"
    },
    palavra029 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTES"
    },
    palavra030 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTES"
    },
    palavra031 = {
        nome: "FEIJOADA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "BETERRABA",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "MANJERICÃO",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "AZEITONA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "MORANGO",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "MARACUJÁ",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "MACACO",
        categoria: "ANIMAIS"
    },
    palavra038 = {
        nome: "TUBARÃO",
        categoria: "ANIMAIS"
    },
    palavra039 = {
        nome: "PAPAGAIO",
        categoria: "ANIMAIS"
    },
    palavra039 = {
        nome: "MAMUTE",
        categoria: "ANIMAIS"
    },
    palavra040 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra041 = {
        nome: "GAMBÁ",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "HIPOPÓTAMO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "ESTANTE",
        categoria: "OBJETOS"
    },
    palavra044 = {
        nome: "VASSOURA",
        categoria: "OBJETOS"
    },
    palavra045 = {
        nome: "COMPUTADOR",
        categoria: "OBJETOS"
    },
    palavra046 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra047 = {
        nome: "TESOURA",
        categoria: "OBJETOS"
    },
    palavra048 = {
        nome: "LENÇOL",
        categoria: "OBJETOS"
    },
    palavra049 = {
        nome: "CABECEIRA",
        categoria: "OBJETOS"
    },
    palavra050 = {
        nome: "GARRAFA",
        categoria: "OBJETOS"
    }
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}


function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++ ){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++ ){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')"
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')"
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')"
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')"
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')"
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')"
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')"
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnreiniciar = document.querySelector("#btnReiniciar")
btnreiniciar.addEventListener("click", function(){
    location.reload();
});