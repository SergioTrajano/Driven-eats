

function selecionaComida(elemento) {
    const apagar = document.querySelector(".prato").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
}

function selecionaBebida(elemento) {
    const apagar = document.querySelector(".bebida").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
}

function selecionaSobremessa(elemento) {
    const apagar = document.querySelector(".sobremessa").querySelector(".selecionado");
    if (apagar != null) {
        apagar.classList.remove("selecionado");
        apagar.querySelector(".icone").classList.add("escondido");
    }
    elemento.classList.add("selecionado");
    elemento.querySelector(".icone").classList.remove("escondido");
}