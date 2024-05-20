const btBuscar = document.querySelector('.botao__busca');
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


btBuscar.addEventListener('click',()=>{
    validacao()

})




function validacao(){

    const origem = document.querySelector('#origem').value.trim();
    const destino = document.querySelector('#destino').value.trim();
    const qpassagem = parseInt(document.querySelector('#passagens').value);
    const tipoClasse = document.querySelector('#classe').value.trim();
    const caixa = document.querySelector('#caixa').checked;
    

    if (!origem ||!destino || isNaN(qpassagem) || !tipoClasse) {
        alert('Preencha rodos os campos');
        return false;
        
    }
    const destinoCidade = db.cidades.find(city => city.cidade.toLowerCase() === destino.toLowerCase())
    if (!destinoCidade) {
        alert('Cidade não encontrada')
        return false; 
    }
    if (!destinoCidade.classe.includes(tipoClasse)){
        alert('classe não encontrada')
        return false;
    }
    if (caixa && !destinoCidade.idaVolta){
        alert('Pasasagem de ida e volta não esta disponivel para o destino')
        return false
    }

    if (destinoCidade.quantidade < qpassagem){
        alert('não tem passagens suficientes')
        return false;
    }
    vendasPassagens(destino,qpassagem)
    alert('Sua viagem esta sendo preparada...')
    return true;
}

function vendasPassagens(destino,qpassagem){
    var passagensVendidas = localStorage.getItem(destino)|| 0;
    passagensVendidas= parseInt(passagensVendidas) + qpassagem

    localStorage.setItem(destino,passagensVendidas)

}


