import axios from "axios";

// http methods

// GET (buscar dados no servidor)
// POST (cadastrar dados no servidor)
// PUT/PATCH  (atualiza o dado / atualiza parcialmente o dado)
// DELETE (remove dados do servidor)


// http requests

let response = await axios.get("https://api2.binance.com/api/v3/ticker/24hr")
console.log(response.data);
console.log(response.data[0].symbol);