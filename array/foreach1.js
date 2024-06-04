const aprovados = ['Paulo', 'Ana', 'jeff']

aprovados.forEach((e, i) => {
    console.log(`${i + 1}) ${e}`);
})

aprovados.forEach(e => console.log(e))

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)