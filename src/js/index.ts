const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const imagens = document.querySelectorAll(".slide");

let imagenAtual: number = 0;

function atualizarSetas(): void {
    const estaNaPrimeiraImagem:boolean = imagenAtual <= 0;
    const estaNaUltimaImagem:boolean = imagenAtual === imagens.length - 1;

    if (estaNaPrimeiraImagem) {
        setaVoltar?.classList.add("opacidade");
    } else {
        setaVoltar?.classList.remove("opacidade");
    }

    if (estaNaUltimaImagem) {
        setaAvancar?.classList.add("opacidade")
    } else {
        setaAvancar?.classList.remove("opacidade")
    }
}

function mostrarImagemAtual(): void {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta?.classList.remove('mostrar');
    imagens[imagenAtual].classList.add('mostrar');
    atualizarSetas();
}

mostrarImagemAtual()

setaAvancar?.addEventListener('click', ():void => {
    if (imagenAtual >= imagens.length - 1) return
    imagenAtual++
    mostrarImagemAtual()
})

setaVoltar?.addEventListener('click', ():void => {
    if (imagenAtual <= 0) return

    imagenAtual--
    mostrarImagemAtual()
})