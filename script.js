let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"));
let nivel = "";

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi <= 4000) {
  nivel = "Prata";
} else if (xpHeroi <= 6000) {
  nivel = "Ouro";
} else if (xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi <= 10000) {
  nivel = "Ascendente";
} else if (xpHeroi <= 12000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
