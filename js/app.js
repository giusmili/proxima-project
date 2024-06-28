const user = {
  nom: "javascript",
  calc(n) {
    return n;
  }
};
let printout = user.calc(2015);
console.log(printout);

/*****************************************/

let nbnote = [10, 12, 14, 7, 6];
let moyenne = 0;
for (let i = 0; i < nbnote.length; i++) {
  moyenne += nbnote[i] / 5;
}
console.log(moyenne.toFixed(1));

//console.log(nbnote.length)
let calc = (acc, currentValue) => acc + currentValue;

console.log(nbnote.reduce(calc) / 5);

/*****************************************/
/* EXERCICE TVA */

let prod_1 = 10;
let prod_2 = 30;
let total_ttc = 0;
let total_ht = 0;
let tva = 19.6;

total_ht += prod_1 + prod_2; //add

console.log("Prod ht :" + total_ht);

total_ttc = total_ht * tva / 100;

console.log("TVA :" + total_ttc);
console.log("Produit TTC :" + (total_ttc + total_ht));

/* END TVA */

/* les chaines de caractères */

//console.log(typeof version)
const lang = `javascript is great!!!`;
const version = `7.5`;
console.log(`${lang} ${version}`);
const student = ["Doe", "Eich", "Berners lee"];
const content = ["Python", "js", "HTML"];
let global = [...student, ...content];
//console.table(global)

//let str = lang.slice(0,-9)

let str = "Javascript is great";
let substring = "in progress";
let complete_string = `${str} ${substring}`;
console.log(complete_string.toUpperCase());

const number = "0682243300";
let formatteNumber = "";

for (let i = 0; i < number.length; i += 2) {
  formatteNumber += number.substring(i, i + 2) + ".";
}

//supprimer le dernier point
formatteNumber = formatteNumber.slice(0, -1);
console.log(formatteNumber);