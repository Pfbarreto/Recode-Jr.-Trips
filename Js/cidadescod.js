const db = {
    cidades:[
        {
            cidade: "São Paulo",
            quantidade: 15,
            classe: ["econômica", "executiva", "primeira"],
            idaVolta: true
        },
        {
            cidade: "Rio de Janeiro",
            quantidade: 12,
            classe: ["econômica", "executiva"],
            idaVolta: false
        },
        {
            cidade: "Belo Horizonte",
            quantidade: 5,
            classe: ["executiva", "primeira"],
            idaVolta: true
        },
        {
            cidade: "Salvador",
            quantidade: 9,
            classe: ["econômica", "executiva", "primeira"],
            idaVolta: false
        },
        {
            cidade: "Brasília",
            quantidade: 19,
            classe: ["primeira"],
            idaVolta: true
        },
        {
            cidade: "Curitiba",
            quantidade: 30,
            classe: ["econômica", "executiva", "primeira"],
            idaVolta: true
        },
        {
            cidade: "Fortaleza",
            quantidade: 10,
            classe: ["econômica", "primeira"],
            idaVolta: false
        },
        {
            cidade: "Recife",
            quantidade: 50,
            classe: ["econômica"],
            idaVolta: true
        },
        {
            cidade: "Porto Alegre",
            quantidade: 9,
            classe: ["econômica", "executiva", "primeira"],
            idaVolta: false
        },
        {
            cidade: "Manaus",
            quantidade: null,
            classe: null,
            idaVolta: true
        }
    ]
}

const listaCidadeElementos = document.querySelector('#tabela')

db.cidades.forEach(city =>{
    const li = document.createElement('li');
    li.textContent = `${city.cidade} - Classes disponiveis: ${city.classe.join(', ')}`
    listaCidadeElementos.appendChild(li);
})