// Callback function
// let listaJson = [
//     {
//         nome: "fulano 1",
//         idade: 30
//     },
//     {
//         nome: "fulano 2",
//         idade: 25
//     },
//     {
//         nome: "fulano 3",
//         idade: 35
//     }
// ];

//         // callback function
// function getNome(pessoaJson){
//     return { nome: pessoaJson.nome, idade: pessoaJson.idade };
// }

// let novaListaPessoas = listaJson.map(getNome)
// console.log(novaListaPessoas);

// I/O não bloqueante
// function helloWorld(){
//     console.log("Olá");
// }

// setTimeout(helloWorld, 10000);
// console.log("Mundo");

// Async / await

function sucesso(){
    return "Sucesso !";
}

function erro(){
    return "Erro !";
}

async function cadastro(){
    return new Promise((resolve, reject) => {
        let res = false;
        
        if (res){
            return resolve(sucesso());
        }
        else{
            return reject(erro());
        }
    })
}

//callback function chaining
// cadastro().then((resultado) => {
//     console.info(resultado);
// }).catch((error) => {
//     console.error(error);
// });

try {
    let resultado = await cadastro();
    console.log(resultado);
} 
catch (error) {
    console.error(error);
}

console.log("processando cadastro");
