var filmes = [
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://ovicio.com.br/wp-content/uploads/2020/07/20200706-jujutsu-kaisen-tem-sua-capa-e-novas-informaes-revelada-pela-panini.jpg",
        titulo: "Jujutsu no Kaisen"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81yq27wvF8L.jpg",
        titulo: "Fire Force"
    },
    {
        imagem: "https://media.fstatic.com/GloOsS7nTSU86A6kU3IFR4-rEhI=/290x478/smart/media/movies/covers/2012/08/9fcec0123ac2e36e5f329e7a7c61039b.jpg",
        titulo: "Kuroko no Basket"
    },
    {
        imagem: "https://sm.ign.com/ign_br/screenshot/default/13466281-870160143090779-1396174242162435896-n_h8w3.jpg",
        titulo: "Fullmetal"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81EMEBmGL4L.jpg",
        titulo: "Kobayashi-san Chi no Maid Dragon"
    }
];

var captura = "";
var resposta = "";

//for pra mostrar as imagens e os titulos assim q o site é aberto
var lista = document.getElementById("listaDeFilme");
for (var i = 0; i < filmes.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("itens")
    listItem.innerHTML = `
        <div class="center">
        <img src="${filmes[i].imagem}" />
        <p> ${filmes[i].titulo}</p>
        </div>
        `
    lista.appendChild(listItem);
}
function mostrarTudo() {
    //for pra mostrar as imagens e os titulos assim q o site é aberto
    var lista = document.getElementById("listaDeFilme");
    for (var i = 0; i < filmes.length; i++) {
        const listItem = document.createElement("li");
        listItem.classList.add("itens")
        listItem.innerHTML = `
                <div class="center">
                <img src="${filmes[i].imagem}" />
                <p> ${filmes[i].titulo}</p>
                </div>
                `
        lista.appendChild(listItem);
    }
}
//ler o input de pesquisa
function lerInput() {
    captura = document.getElementById("resposta").value;
    resposta = captura.toLowerCase();
}

//função para pesquisar, ele verifica a resposta do usuario e pesquisa algum elemento
//do array q tenha uma string igual
function pesquisa() {
    lerInput()
    lista.innerHTML = ""
    for (filme of filmes) {
        if (filme.titulo.toLowerCase().startsWith(resposta)) {
            const listItem = document.createElement("li");
            listItem.classList.add("itens")
            listItem.innerHTML = `
                <div class="center">
                <img src="${filme.imagem}" />
                <p> ${filme.titulo}</p>
                </div>
            `
            lista.appendChild(listItem);
        }
    }
}

// Seleciona todos os elementos de determinada tag
var elementos_a = document.getElementsByTagName('a');

// Percorre os elementos. 
for (var i = 0; i < elementos_a.length; i++) {
    /* Adiciona o evento em cada um dos elementos por meio do seu índice no array */        
    elementos_a[0].onclick = function() {
        lista.innerHTML= ""
        mostrarTudo()
    }
}