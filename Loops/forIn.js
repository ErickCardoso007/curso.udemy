let livro = {
    titulo: 'Shingeki no Kyojin',
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    numPaginas: 1178
}

let mostrarInformacoesLivro = () => {
    for(let propriedades in livro){
        console.log(propriedades  + ": " + livro[propriedades]);
    }
}

mostrarInformacoesLivro()