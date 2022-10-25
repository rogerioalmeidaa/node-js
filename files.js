import fs from "node:fs";

// list dir files dir 


// write file
// fs.writeFile("coinList.txt", "Hello World", (err) =>{
//     if(err){
//         console.error("deu erro");
//     }
//     else{
//         console.log("sucesso")
//     }
// })

// read file

// fs.readFile("coinList.txt", (err, data) =>{
//     if(err){
//         console.error("deu errona leitura");
//     }
//     else{
//         console.log(Buffer.from(data).toString());
//     }
// })

// delete file
fs.rm("coinList.txt",(err) =>{
    if(err){
        console.error("deu errona leitura");
    }
    else{
        console.log("Removido com sucesso");
    }
})