function fecharPedido() {
    const prato = document.querySelector(".prato").querySelector(".selecionado");
    const bebida = document.querySelector(".bebida").querySelector(".selecionado");
    const sobremessa =document.querySelector(".sobremessa").querySelector(".selecionado");
    if (prato != null && bebida != null && sobremessa != null) {
        document.querySelector(".desabilitado").classList.add("escondido");
        document.querySelector(".habilitado").classList.remove("escondido");
    }
}

function selecionaPrato(elemento) {
    const apagar = document.querySelector(".prato").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
    fecharPedido();
}

function selecionaBebida(elemento) {
    const apagar = document.querySelector(".bebida").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
    fecharPedido();
}

function selecionaSobremessa(elemento) {
    const apagar = document.querySelector(".sobremessa").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
    fecharPedido();
}

function enviar() {
    const prato = document.querySelector(".prato").querySelector(".selecionado");
    const nomePrato = prato.querySelector("h4").innerHTML;
    const valorPrato = Number(prato.querySelector("span").innerHTML);

    const bebida = document.querySelector(".bebida").querySelector(".selecionado");
    const nomeBebida = bebida.querySelector("h4").innerHTML;
    const valorBebida = Number(bebida.querySelector("span").innerHTML);

    const sobremessa =document.querySelector(".sobremessa").querySelector(".selecionado");
    const nomeSobremessa = sobremessa.querySelector("h4").innerHTML;
    const valorSobremessa = Number(sobremessa.querySelector("span").innerHTML);

    window.open("https://wa.me/5581993340979?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremessa}
Total: R$ ${(valorPrato + valorBebida + valorSobremessa).toFixed(2)}`));
}