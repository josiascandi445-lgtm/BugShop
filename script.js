//aniimacao scroll

const Observacao = new IntersectionObserver((entrada) => {
    entrada.forEach ((entrada) =>{
     if(entrada.isIntersecting){
         entrada.target.classList.add('show')
     }else{
         entrada.target.classList.remove('show')
     }
    })
  })
  const elementos = document.querySelectorAll('.hiden')
  
  elementos.forEach((elementos) => Observacao.observe(elementos))

  
// dima
let selectedDiamonds = 78;

    function selectDiamonds(value) {
      selectedDiamonds = value;
      document.querySelectorAll('.card-recargas button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
}

//enviar mensagem no zapp   
    function sendToWhatsApp() {
      const playerId = document.getElementById('playerId').value.trim();
      if(!playerId){
        alert('Insira o seu ID');
        return;
      }  
      const message = `Olá Bug Shop! Quero fazer uma recarga de ${selectedDiamonds} diamantes. Aqui está o meu ID:${playerId} aguarde enquanto faço o pagamento`;

    const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank');

     
}

//assinaturas
function assinatura1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Assinatura Semanal Económica. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Trilha da Evolutiva de 3 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Trilha da Evolutiva de 7 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá Bug Shop! Quero comprar a Trilha da Evolutiva de 30 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeb() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá Bug Shop! Quero comprar o Passe Booyha. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeDeNivel() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá Bug Shop! Quero comprar o Passe de Nível. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244954448377?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

