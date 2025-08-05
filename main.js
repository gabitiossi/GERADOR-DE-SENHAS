const numeroSenha = document.querySelector(".parametros-senha__texto");
const botaoSenha = document.querySelectorAll(".parametros-senha__botao");
const campoSenha = document.querySelector("#campo-senha");
const checkbox = document.querySelectorAll(".checkbox");
const forcaSenha = document.querySelector(".forca");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

botaoSenha[0].onclick = () => {
  if (tamanhoSenha > 1) {
    tamanhoSenha--;
  }
  numeroSenha.textContent = tamanhoSenha;
  gerarSenha();
};

botaoSenha[1].onclick = () => {
  if (tamanhoSenha < 20) {
    tamanhoSenha++;
  }
  numeroSenha.textContent = tamanhoSenha;
  gerarSenha();
};

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].onclick = () => {
    gerarSenha();
  };
}

gerarSenha();

function gerarSenha() {
  let alfabeto = "";
  if (checkbox[0].checked) {
    alfabeto += letrasMaiusculas;
  }
  if (checkbox[1].checked) {
    alfabeto += letrasMinusculas;
  }
  if (checkbox[2].checked) {
    alfabeto += numeros;
  }
  if (checkbox[3].checked) {
    alfabeto += simbolos;
  }

  // Caso nenhum checkbox esteja selecionado
  if (alfabeto.length === 0) {
    campoSenha.value = "";
    forcaSenha.classList.remove("fraca", "media", "forte");
    return;
  }

  let senhaGerada = "";
  for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
    senhaGerada += alfabeto[numeroAleatorio];
  }
  campoSenha.value = senhaGerada;
  classificaSenha();
}

function classificaSenha() {
    forcaSenha.classList.remove("fraca", "media", "forte");
    if (tamanhoSenha > 14) {        
        forcaSenha.classList.add("forte");
    } else if (tamanhoSenha > 5 && tamanhoSenha <= 14) {
        forcaSenha.classList.add("media");
    } else if (tamanhoSenha <= 5) {
        forcaSenha.classList.add("fraca");
    }
}
