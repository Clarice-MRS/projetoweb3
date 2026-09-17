const pratos = [
    {
        nome: "The Fame Free",
        descricao: "Hambúrguer 100% vegano, livre de carne.",
        categoria: "Sanduíches",
        valor: 29.90,
        imagem: "img/thefamefree.jpg"
    },

    {
        nome: "Bad RM Burger",
        descricao: "Hambúrguer com pimenta e pão preto.",
        categoria: "Sanduíches",
        valor: 32.90,
        imagem: "img/BadRMBurger.jpg"
    },

    {
        nome: "Dress Burger",
        descricao: "Hambúrguer de carne bovina, pão vermelho, salada e molho da casa.",
        categoria: "Sanduíches",
        valor: 34.90,
        imagem: "img/dressburguer.jpg"
    },

    {
        nome: "Haus of Bacon",
        descricao: "Hambúrguer com bacon crocante.",
        categoria: "Sanduíches",
        valor: 36.90,
        imagem: "img/hausofbacon.webp"
    },

    {
        nome: "Speecheese",
        descricao: "Hambúrguer duplo com queijo.",
        categoria: "Sanduíches",
        valor: 37.90,
        imagem: "img/speecheese.webp"
    },

    {
        nome: "Molho Monster",
        descricao: "O molho especial da casa.",
        categoria: "Molhos",
        valor: 5.90,
        imagem: "img/molhomonster.jpg"
    },

    {
        nome: "Joanne Dip",
        descricao: "Molho rosé delicado.",
        categoria: "Molhos",
        valor: 5.90,
        imagem: "img/joannedip.webp"
    },

    {
        nome: "Judas Jalapeño",
        descricao: "Molho apimentado.",
        categoria: "Molhos",
        valor: 6.90,
        imagem: "img/judasjalapeno.jpg"
    },

    {
        nome: "Little Monster Fries",
        descricao: "Porção pequena de batata.",
        categoria: "Porções",
        valor: 9.90,
        imagem: "img/littlemonsterfries.jpg"
    },

    {
        nome: "Large Monster Fries",
        descricao: "Porção grande de batata.",
        categoria: "Porções",
        valor: 12.90,
        imagem: "img/largemonterfries.jpg"
    },

    {
        nome: "Diamond Rings",
        descricao: "Anéis de cebola empanados.",
        categoria: "Porções",
        valor: 16.90,
        imagem: "img/diamondrings.jpg"
    },

    {
        nome: "Summershake",
        descricao: "Milkshake de manga com pêssego.",
        categoria: "Bebidas",
        valor: 17.90,
        imagem: "img/summershake.jpg"
    },

    {
        nome: "Cherry Boom",
        descricao: "Milkshake de cereja.",
        categoria: "Bebidas",
        valor: 17.90,
        imagem: "img/cherryboom.jpg"
    },

    {
        nome: "Sour Candy",
        descricao: "Milkshake de limão com morango.",
        categoria: "Bebidas",
        valor: 18.90,
        imagem: "img/sourcandy.jpg"
    },

    {
        nome: "Gagamelo",
        descricao: "Milkshake de caramelo.",
        categoria: "Bebidas",
        valor: 18.90,
        imagem: "img/gagamelo.jpg"
    },

    {
        nome: "Brownie Eyes",
        descricao: "Brownie com sorvete de creme.",
        categoria: "Sobremesas",
        valor: 18.90,
        imagem: "img/brownieeyes.jpg"
    },

    {
        nome: "Electric Pie",
        descricao: "Torta pêssego com maracujá.",
        categoria: "Sobremesas",
        valor: 19.90,
        imagem: "img/eletricpie.jpg"
    },

    {
        nome: "Venus Vanilla",
        descricao: "Sundae cremoso de baunilha com calda de chocolate.",
        categoria: "Sobremesas",
        valor: 21.90,
        imagem: "img/venusvNILL.jpg"
    },

    {
        nome: "Abracadabra-Cola",
        descricao: "Refrigerante sabor cola.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/abracadabracola.jpg"
    },

    {
        nome: "Appleuse twist",
        descricao: "Refrigerante de maçã verde com limão.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/appleusetwist.jpg"
    },

    {
        nome: "Poker Fizz",
        descricao: "Refrigerante de maracujá com um toque de hortelã.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/pokerfizz.jpg"
    }
];

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

const infoPratos = document.querySelector(".item-info");



infoPratos.innerHTML = ` 
    <div class="prato-cardapio">  
            <img src="${pratos[0].imagem}"> 
            <h3 class="nome">${pratos[0].nome}</h3>  
            <p class="valor">${pratos[0].valor}</p>  
            <p class="descricao">${pratos[0].descricao}</p> 
    </div> 
`;