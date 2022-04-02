function   habilitarPedido() {
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
    const desabilitado = document.querySelector(".desabilitado");
    const habilitado = document.querySelector(".habilitado");
    if (apagar == elemento) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
        desabilitado.classList.remove("escondido");
        habilitado.classList.add("escondido");
    }
    else {
        if (apagar != null) {
            apagar.classList.remove("selecionado");
            apagar.querySelector(".icone").classList.add("escondido");
        }
        elemento.classList.add("selecionado");
        elemento.querySelector(".icone").classList.remove("escondido");
        habilitarPedido();  
    }
}

function selecionaBebida(elemento) {
    const apagar = document.querySelector(".bebida").querySelector(".selecionado");
    const desabilitado = document.querySelector(".desabilitado");
    const habilitado = document.querySelector(".habilitado");
    if (apagar == elemento) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
        desabilitado.classList.remove("escondido");
        habilitado.classList.add("escondido");
    }
    else {
        if (apagar != null) {
            apagar.classList.remove("selecionado");
            apagar.querySelector(".icone").classList.add("escondido");
        }
        elemento.classList.add("selecionado");
        elemento.querySelector(".icone").classList.remove("escondido");
        habilitarPedido();
    }
}

function selecionaSobremessa(elemento) {
    const apagar = document.querySelector(".sobremessa").querySelector(".selecionado");
    const desabilitado = document.querySelector(".desabilitado");
    const habilitado = document.querySelector(".habilitado");
    if (apagar == elemento) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
        desabilitado.classList.remove("escondido");
        habilitado.classList.add("escondido");
    }
    else {
        if (apagar != null) {
            apagar.classList.remove("selecionado");
            apagar.querySelector(".icone").classList.add("escondido");
        }
        elemento.classList.add("selecionado");
        elemento.querySelector(".icone").classList.remove("escondido");
        habilitarPedido();
    }
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