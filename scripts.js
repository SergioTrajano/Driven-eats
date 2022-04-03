function itemSelecionado(tipo) {
    return prato = document.querySelector(`.${tipo}`).querySelector(".selecionado");
}

function botaoSelecionado(tipo) { 
    return document.querySelector(`.${tipo}`);
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

function habilitarPedido() {
    const prato = itemSelecionado("prato");
    const bebida = itemSelecionado("bebida");
    const sobremessa = itemSelecionado("sobremessa");
    if (prato != null && bebida != null && sobremessa != null) {
        document.querySelector(".desabilitado").classList.add("escondido");
        document.querySelector(".habilitado").classList.remove("escondido");
    }
}

function preencheItem(div) {
    return document.querySelector(`.pedido ${div} h4`);
}

function preenchePreco(div) {
    return document.querySelector(`.pedido ${div} span`);
}

function nomeItem(elemento) {
    return elemento.querySelector("h4").innerHTML;
}

function valorItem(elemento) {
    return Number(elemento.querySelector("span").innerHTML).toFixed(2);
}

function selecionaPrato(elemento) {
    const apagar = itemSelecionado("prato");
    const desabilitado = botaoSelecionado("desabilitado");
    const habilitado = botaoSelecionado("habilitado");
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
    const apagar = itemSelecionado("bebida");
    const desabilitado = botaoSelecionado("desabilitado");
    const habilitado = botaoSelecionado("habilitado");
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
    const apagar = itemSelecionado("sobremessa");
    const desabilitado = botaoSelecionado("desabilitado");
    const habilitado = botaoSelecionado("habilitado");
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

function confirmarPedido() {
    const revisao = document.querySelector(".enviar");
    revisao.classList.remove("escondido");
    
    const prato = itemSelecionado("prato");
    const bebida = itemSelecionado("bebida");
    const sobremessa = itemSelecionado("sobremessa");

    const nomePrato = preencheItem("div:nth-child(1)");
    const precoPrato = preenchePreco("div:nth-child(1)");
    nomePrato.innerHTML = nomeItem(prato);
    precoPrato.innerHTML = valorItem(prato);

    const nomeBebida = preencheItem("div:nth-child(2)");
    const precoBebida = preenchePreco("div:nth-child(2)");
    nomeBebida.innerHTML = nomeItem(bebida);
    precoBebida.innerHTML = valorItem(bebida);

    const nomeSobremessa = preencheItem("div:nth-child(3)");
    const precoSobremessa = preenchePreco("div:nth-child(3)");
    nomeSobremessa.innerHTML = nomeItem(sobremessa);
    precoSobremessa.innerHTML = valorItem(sobremessa);

    const precoTotal = preenchePreco("div:nth-child(4)");
    precoTotal.innerHTML = `R$ ${Number(Number(precoPrato.innerHTML) + Number(precoBebida.innerHTML) + Number(precoSobremessa.innerHTML)).toFixed(2)}`;
}

function enviarPedido() {
    const prato = itemSelecionado("prato");
    const nomePrato = nomeItem(prato);
    const valorPrato = valorItem(prato);

    const bebida = itemSelecionado("bebida");
    const nomeBebida = nomeItem(bebida);
    const valorBebida = valorItem(bebida);

    const sobremessa = itemSelecionado("sobremessa");
    const nomeSobremessa = nomeItem(sobremessa);
    const valorSobremessa = Number(sobremessa.querySelector("span").innerHTML);

    const nomeCliente = prompt("Nome: ");
    let enderecoCliente;
    if (nomeCliente != null) {
        enderecoCliente = prompt("Endereço: ");
    }
    if (nomeCliente != null && enderecoCliente != null) {
        window.open("https://wa.me/5581993340979?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremessa}
Total: R$ ${Number(Number(valorPrato) + Number(valorBebida) + Number(valorSobremessa)).toFixed(2)}

Nome: ${nomeCliente}
Endereço: ${enderecoCliente}`));
    }
}

function cancelarPedido() {
    const revisao = document.querySelector(".enviar");
    revisao.classList.add("escondido");
}