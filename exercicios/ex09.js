function fatorial(){
    let numbers = parseInt(document.getElementById('numero').value);
    let resposta = document.getElementById('resp');
    let resultado=1;
 
    for(let i=1 ; i<=numbers ; i++)
     resultado *= i;
 
    resposta.innerHTML =resultado;
  }
