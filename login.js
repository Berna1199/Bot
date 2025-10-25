// login.js - mensagem aparece no HTML (elemento #loginMsg), sem alert()

const senhaCorreta = "123KJ"; // mantém fora do HTML

function showMessage(text, type = 'info') {
  // type: 'info' | 'success' | 'error'
  const el = document.getElementById('loginMsg');
  el.className = ''; // reset
  if (type === 'success') el.classList.add('success');
  else if (type === 'error') el.classList.add('error');
  else el.classList.add('info');
  el.textContent = text;
  el.style.display = 'block';
}

function clearMessage() {
  const el = document.getElementById('loginMsg');
  el.style.display = 'none';
  el.textContent = '';
  el.className = '';
}

async function doLogin() {
  clearMessage();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value;
  const btn = document.getElementById("loginBtn");

  if (!email || !senha) {
    showMessage('Preencha email e senha!', 'error');
    return;
  }

  // Simular processamento: bloqueia botão e mostra estado
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = 'A validar...';

  // Simular pequena espera (substitui a chamada a servidor)
  await new Promise(r => setTimeout(r, 700));

  if (senha === senhaCorreta) {
    showMessage('Acesso concedido! A carregar conteúdo...', 'success');
    // transição suave: esconder login e mostrar conteúdo após pequena pausa
    setTimeout(() => {
      document.getElementById("loginScreen").style.display = 'none';
      document.getElementById("conteudo").style.display = 'block';
      clearMessage();
    }, 700);
  } else {
    showMessage('Senha incorreta! Verifica e tenta novamente.', 'error');
  }

  // restaurar botão
  btn.disabled = false;
  btn.textContent = originalText;
}

// ligar botão ao clique
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('loginBtn');
  if(btn) btn.addEventListener('click', doLogin);

  // restaurar sessão (opcional) — se quiser manter acesso após reload, ativa isto:
  // if (sessionStorage.getItem('aviator_token')) {
  //   document.getElementById("loginScreen").style.display = 'none';
  //   document.getElementById("conteudo").style.display = 'block';
  // }
});
