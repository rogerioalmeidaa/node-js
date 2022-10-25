// Var, Let e Const

// const x = 10;
// let y = 20;

// function hello(){
//     let y = 5;
//     console.log(y);

//     if(y === 5){
//         let y = 1;
//         console.log(y);
//     }
// }

// hello();
// console.log(x);
// console.log(y);

// Number
// let a = 20;
// let b = 10;
// let c = -2.5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);


// String
// let nome = "Fulano";
// let sobrenome = "Ciclano";

// console.log("Nome:"+ nome + " Sobrenome:" + sobrenome);
// console.log(`Nome: ${nome.toLowerCase()} Sobrenome: ${sobrenome.toLowerCase()} Idade: ${x}`);

// JSON
// let obj = {
//     nome: "Fulano",
//     sobrenome: "X",
//     idade: 25
// };

// let obj_text = JSON.stringify(obj);
// console.log(obj_text);
// let obj_obj = JSON.parse(obj_text);
// console.log(obj_obj)

// console.log(`Nome: ${obj_obj}`);

// Arrays

let listaJson = [
    {
        nome: "fulano 1",
        idade: 30
    },
    {
        nome: "fulano 2",
        idade: 25
    },
    {
        nome: "fulano 3",
        idade: 35
    }
];

function getNome(pessoaJson){
    return { nome: pessoaJson.nome, idade: pessoaJson.idade };
}

let novaListaPessoas = listaJson.map(getNome)
console.log(novaListaPessoas);



// let lista = [1, 2, 3, 4, 5];
// let lista2 = ["1", 2, "3", 4, "5", true];

// console.log(lista);
// console.log(lista2);

// function filtrarArray(elemento){
//     return (typeof elemento === "number");
// }

// lista2.filter(filtrarArray)


// lista2.filter(function (elemento){
//     return (typeof elemento === "number");
// })

// function hello(func){
//     func();
// }

// function world(){
//     console.log("Hello World")
// }

// hello(world);



// Boolean 

// let verdadeiro = true;
// let falso = false;

// console.log(0 == false);
// // console.log(1 == true);
// console.log([] == false);
// console.log("" == false);
// console.log(null == false);
// console.log(undefined == false);
// console.log(falso);
