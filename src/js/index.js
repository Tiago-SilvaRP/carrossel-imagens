"use strict";
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const imagens = document.querySelectorAll(".slide");
let imagenAtual = 0;
function atualizarSetas() {
    const estaNaPrimeiraImagem = imagenAtual <= 0;
    const estaNaUltimaImagem = imagenAtual === imagens.length - 1;
    if (estaNaPrimeiraImagem) {
        setaVoltar === null || setaVoltar === void 0 ? void 0 : setaVoltar.classList.add("opacidade");
    }
    else {
        setaVoltar === null || setaVoltar === void 0 ? void 0 : setaVoltar.classList.remove("opacidade");
    }
    if (estaNaUltimaImagem) {
        setaAvancar === null || setaAvancar === void 0 ? void 0 : setaAvancar.classList.add("opacidade");
    }
    else {
        setaAvancar === null || setaAvancar === void 0 ? void 0 : setaAvancar.classList.remove("opacidade");
    }
}
function mostrarImagemAtual() {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta === null || imagemAberta === void 0 ? void 0 : imagemAberta.classList.remove('mostrar');
    imagens[imagenAtual].classList.add('mostrar');
    atualizarSetas();
}
mostrarImagemAtual();
setaAvancar === null || setaAvancar === void 0 ? void 0 : setaAvancar.addEventListener('click', () => {
    if (imagenAtual >= imagens.length - 1)
        return;
    imagenAtual++;
    mostrarImagemAtual();
});
setaVoltar === null || setaVoltar === void 0 ? void 0 : setaVoltar.addEventListener('click', () => {
    if (imagenAtual <= 0)
        return;
    imagenAtual--;
    mostrarImagemAtual();
});
