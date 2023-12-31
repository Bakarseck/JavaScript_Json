// Recuperation des pieces depuis le fichier JSON

console.log("bakar")

const response = await fetch("pieces_autos.json");
const pieces = await response.json();

const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix : ${article.prix} $`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
