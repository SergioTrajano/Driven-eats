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