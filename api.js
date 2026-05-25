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

    document.getElementById("nome").innerHTML =
      "Nome da receita: " + receita.name;

    document.getElementById("ingredientes").innerHTML =
      "Ingredientes: " + receita.ingredients.join(", ");

    document.getElementById("instrucoes").innerHTML =
      "Instruções: " + receita.instructions;

    document.getElementById("avaliacao").innerHTML =
      "Avaliação: " + receita.rating;

  } catch (erro) {
    console.log("Erro ao mostrar receita:", erro);
  }
}

let botoes = document.querySelectorAll("button");

botoes[0].onclick = function () {
  try {
    index = index - 1;

    if (receitas[index] == undefined) {
      index = 0;
    }

    mostrarReceita();

  } catch (erro) {
    console.log(erro);
  }
};

botoes[1].onclick = function () {
  try {
    index = index + 1;

    if (receitas[index] == undefined) {
      index = index - 1;
    }

    mostrarReceita();

  } catch (erro) {
    console.log(erro);
  }
};

buscarReceitas();