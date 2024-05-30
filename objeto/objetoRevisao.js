// loja > funcionario > itens > valores
const loja = {
    nome: 'FindGames',
    endereco: '...rs',
        listaDeJogos: {
            gereno: {
                luta: [{
                    jogo: 'Mortal Kombat 11',
                    valor: 120.90
                },{
                    jogo: 'Box 24',
                    valor: 110.10
                }],
                esporte: [{
                    jogo: 'EAFC 24',
                    valor: 360.00
                },{
                    jogo: 'FIFA 22',
                    valor: 68.90
                }]
         }
    }
}
let valorNaCarteira = 200
const itemEscolhido = loja.listaDeJogos.gereno.esporte.find(esporte => esporte.jogo === 'FIFA 22' );
const compra = valorNaCarteira - itemEscolhido.valor
valorNaCarteira = compra
    if(itemEscolhido.valor > valorNaCarteira ){
    console.log('Erro: Saldo insuficiente');
    }else{
    console.log(`Sua compra ficou R$${itemEscolhido.valor.toFixed(2)}, ainda lhe resta R$${valorNaCarteira.toFixed(2)} na carteira.`);
}
