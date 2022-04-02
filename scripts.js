function pratoSelecionado() {
    return prato = document.querySelector(".prato").querySelector(".selecionado");
}

function bebidaSelecionada() {
    return document.querySelector(".bebida").querySelector(".selecionado");
}

function sobremessaSelecionada() {
    return document.querySelector(".sobremessa").querySelector(".selecionado");
}

function botaoDesabilitado() {
    return document.querySelector(".desabilitado");
}

function botaoHabilitado() {
    return document.querySelector(".habilitado");document.querySelector(".habilitado");
}

function apagaElemento(apagar, desabilitado, habilitado) {
    apagar.classList.remove("selecionado");
    apagar.querySelector(".icone").classList.add("escondido");
    desabilitado.classList.remove("escondido");
    habilitado.classList.add("escondido");
}

function removeSelecionado(apagar) {
    apagar.classList.remove("selecionado");
    apagar.querySelector(".icone").classList.add("escondido");
}

function adcionaSelecionado(elemento) {
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
}

function   habilitarPedido() {
    const prato = pratoSelecionado();
    const bebida = bebidaSelecionada();
    const sobremessa = sobremessaSelecionada();
    if (prato != null && bebida != null && sobremessa != null) {
        document.querySelector(".desabilitado").classList.add("escondido");
        document.querySelector(".habilitado").classList.remove("escondido");
    }
}

function selecionaPrato(elemento) {
    const apagar = pratoSelecionado();
    const desabilitado = botaoDesabilitado();
    const habilitado = botaoHabilitado();
    if (apagar == elemento) {
        apagaElemento(apagar, desabilitado, habilitado);
    }
    else {
        if (apagar != null) {
            removeSelecionado(apagar);
        }
        adcionaSelecionado(elemento);
        habilitarPedido();  
    }
}

function selecionaBebida(elemento) {
    const apagar = bebidaSelecionada();
    const desabilitado = botaoDesabilitado();
    const habilitado = botaoHabilitado();
    if (apagar == elemento) {
        apagaElemento(apagar, desabilitado, habilitado);
    }
    else {
        if (apagar != null) {
            removeSelecionado(apagar);
        }
        adcionaSelecionado(elemento);
        habilitarPedido();
    }
}

function selecionaSobremessa(elemento) {
    const apagar = sobremessaSelecionada();
    const desabilitado = botaoDesabilitado();
    const habilitado = botaoHabilitado();
    if (apagar == elemento) {
        apagaElemento(apagar, desabilitado, habilitado);
    }
    else {
        if (apagar != null) {
            removeSelecionado(apagar);
        }
        adcionaSelecionado(elemento);
        habilitarPedido();
    }
}

function enviar() {
    const prato = pratoSelecionado();
    const nomePrato = prato.querySelector("h4").innerHTML;
    const valorPrato = Number(prato.querySelector("span").innerHTML);

    const bebida = bebidaSelecionada();
    const nomeBebida = bebida.querySelector("h4").innerHTML;
    const valorBebida = Number(bebida.querySelector("span").innerHTML);

    const sobremessa = sobremessaSelecionada();
    const nomeSobremessa = sobremessa.querySelector("h4").innerHTML;
    const valorSobremessa = Number(sobremessa.querySelector("span").innerHTML);

    const nome = prompt("Nome: ");
    const endereco = prompt("Endereço: ");

    window.open("https://wa.me/5581993340979?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremessa}
Total: R$ ${(valorPrato + valorBebida + valorSobremessa).toFixed(2)}

Nome: ${nome}
Endereço: ${endereco}`));
}