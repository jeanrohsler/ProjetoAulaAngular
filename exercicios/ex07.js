function reverseString(){
    let word = document.getElementById('string').value
    let apresentacao= document.getElementById('resultadoFinal')
    
    
    string = Array.from(word).reverse(word)
    
    
    
    
    resultado = string.toString(string)
    
    
    resultadoFinal = resultado.replace(/,/g,'')
    
    
    console.log( resultadoFinal)
    apresentacao.textContent=resultadoFinal;
    
    
    
    
    }
    