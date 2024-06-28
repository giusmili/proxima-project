/* const pays = `France`
const capitale = `Paris`
const population = `64, 97 millions d'habitans` */

const Country = {
  presentation: `La France, pays de l'Europe occidentale...`,
  capitale: `Paris`,
  population: `64, 97 millions d'habitans`,
  gouvernement: `Etats republicain présidentiel`,
  superficie: `551 695 km2`.replace(/ /g, "-"),
  lang: ["fr-FR", "en", "es"].join("/")
};

console.table(Country.lang);
for (let data in Country) {
  console.log(`${data} : ${Country[data]}`);
}

/* objet user */
const user = {
  nom: "Doe",
  prenom: "John",
  age: 30,
  adresse: {
    rue: "2bis bd des champs",
    ville: "Narbonne",
    pays: "France"
  }
};
for (let data in user) {
  if (data !== "adresse") {
    console.log(`${data} : ${user[data]}`);
  } else {
    for (data in user.adresse) {
      console.log(`${data} : ${user.adresse[data]}`);
    }
  }
}
console.log(user);
const proximaCentauri = {
  cover: "https://www.eso.org/public/archives/images/screen/eso1629b.jpg",
  nom: "Alpha Centauri C",
  description: "Système planétaire le plus proche du système solaire au sein de la Voie lactée.",
  distanceTerre: "4,246 années-lumière",
  constellation: "Centaure",
  temperature: "de surface 3042 K",
  rayon: "107280 km",
  masse: "2,428 x 10^29 kg (0,1221 M☉)",
  date: 1915,
  decouvreur: "Robert Innes"
};

const el = document.getElementsByTagName("ul")[0];
const title = document.querySelector("title");
const header = document.querySelector("header h1");

title.innerText = "Proxima du Centaure";
header.innerText = "Proxima B centuri";

for (let data in proximaCentauri) {
  console.log(`${data} : ${proximaCentauri[data]}`);
  if (data === "cover") {
    el.innerHTML += `<li><img src="${proximaCentauri[data]}" alt="${proximaCentauri.data}"></li>`;
  } else {
    el.innerHTML += `<li>${data.toUpperCase()} : ${proximaCentauri[data]}</li>`;
  }
}

/* tableau d'objets */
const product = [{
  name: "car",
  price: 6000
}, {
  name: "Bike",
  price: 150
}, {
  name: "phone",
  price: 700
}, {
  name: "Watch",
  price: 200
}, {
  name: "pen",
  price: 8
}, { name: "bag", price: 50 }];

console.log(product);