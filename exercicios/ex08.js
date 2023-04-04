function reverseString(){
    let word = document.getElementById('string').value
    let apresentacao= document.getElementById('resultadoFinal')
    
    
    string = Array.from(word).reverse(word)
    
    resultado = string.toString(string)
    
    
    resultadoFinal = resultado.replace(/,/g,'')
    
    if( word == resultadoFinal){
        console.log('palindromo')
        apresentacao.textContent='é palindromo';
    }
    else if(word != resultadoFinal){
        apresentacao.textContent='não é palindromo';
    }
    }
    