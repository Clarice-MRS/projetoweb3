const maisum = document.querySelector(".aumentar-quantia");
const menosum = document.querySelector(".diminuir-quantia");
const quantia = document.getElementById("valor-quantia");

function aumentarSacola() {

    let quantidade = Number(quantia.textContent);

    if (quantidade < 50) {
        quantidade++;
    }

    quantia.textContent = quantidade;
}

maisum.addEventListener("click", aumentarSacola);

function diminuirSacola() {
    let quantidade = Number(quantia.textContent);

    if (quantidade > 0) {
        quantidade--;
    }

    quantia.textContent = quantidade;
}

menosum.addEventListener("click", diminuirSacola);