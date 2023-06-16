const TAMANHO_VISOR = 15    

function adicionaNum (num) {
    document.getElementById("resultado").removeAttribute("hidden")

    if(document.getElementById("resultado").innerHTML.length < TAMANHO_VISOR){
    document.getElementById("resultado").innerHTML += num;
    }
}

function limparCampo() {
    document.getElementById("resultado").innerHTML = "";
}