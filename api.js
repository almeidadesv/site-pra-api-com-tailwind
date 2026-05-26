let receitas = [];
let index = 0;

async function buscarReceitas() {
try {
let data = await fetch("https://dummyjson.com/recipes").then(r => r.json());

receitas = data.recipes;

  mostrarReceita();
  } catch (erro) {
  console.log("Erro ao buscar as receitas", erro);
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
  if (index <= 28) {
    index++;
    mostrarReceita();
  }
};

document.getElementById("botaobuscar").onclick = function () {
  let digitado = document.querySelector("input").value.trim().toLowerCase();

  let resultado = receitas.find(function (r) {
    return String(r.id) === digitado || r.name.toLowerCase().includes(digitado);
  });

  if (resultado) {
    index = receitas.indexOf(resultado);
    mostrarReceita();
  } else {
    document.getElementById("imagemdacomida").src = "./src/imagens/receitanaoencontrada.jpeg";
    document.getElementById("nome").innerHTML = ("")
    document.getElementById("ingredientes").innerHTML = ("")
    document.getElementById("instrucoes").innerHTML = ("")
    document.getElementById("avaliacao").innerHTML = ("")
};


}

 buscarReceitas()
