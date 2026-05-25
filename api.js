let receitas = [];
let index = 0;

async function buscarReceitas() {
try {
let data = await fetch("https://dummyjson.com/recipes").then(r => r.json());

receitas = data.recipes;

  mostrarReceita();
  } catch (erro) {
  console.log("Erro ao buscar receitas:", erro);
  }
}

function mostrarReceita() {
try {
let receita = receitas[index];

document.getElementById("imagemdacomida").src = receita.image;
document.getElementById("nome").innerHTML = "Nome da receita: " + receita.name;
document.getElementById("ingredientes").innerHTML = "Ingredientes: " + receita.ingredients;
document.getElementById("instrucoes").innerHTML = "Instruções: " + receita.instructions;
document.getElementById("avaliacao").innerHTML = "Avaliação: " + receita.rating;

  } catch (erro) {
  console.log("Erro ao mostrar a receita:", erro);
  }
}

document.getElementById("botaovoltar").onclick = function () {
  if (index > 0) {
    index--;
    mostrarReceita();
  }
};

document.getElementById("botaoavancar").onclick = function () {
  if (index < receitas.length - 1) {
    index++;
    mostrarReceita();
  }
};

 buscarReceitas()