function fibonacci(){
    let numbers = parseInt(document.getElementById('numero').value);
    let resposta = document.getElementById('resp');
    let penultimo=0, ultimo=1;
    let numero;
 
    if(numbers<=2)
     numero = numbers-1;
    else
     for(let i=3 ; i<=numbers ; i++){
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
     }
 
    resposta.innerHTML=numero;
  }
