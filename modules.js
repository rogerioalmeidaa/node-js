// import modules
import add from "./modules/add.js";
import { sub, sub2 } from "./modules/sub.js";
import moment from "moment-timezone";

const a = 10;
const b = 1;
const c = 2;

console.log(add(a, b));
console.log(sub(a, b));
console.log(sub2(a, b, c));
let hoje = moment.tz("America/Sao_Paulo");
hoje = hoje.subtract(1, "day");
console.log(hoje.toISOString());