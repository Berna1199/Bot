const senhaCorreta = "123KJ"; // escondido do HTML

function doLogin() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value;

  if (!email || !senha) {
    alert("Preencha seu email e senha!");
    return;
  }

  if (senha === senhaCorreta) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}
