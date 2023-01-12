//conta de um até n

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }

  //push adiciona os elementos no final de um array
  console.log(countup(3));
//----------------------------------------------------------
  //conta de n até um
  function countdown(n){
    if(n<1){
      return [];
    }else{
      const contador = countdown(n-1);
      contador.unshift(n)
      return contador;
    }
  }
//objeto unshift insere os valores fornecidos no inicio de um array
//-------------------------------------------------------------

//conta numeros em um espaço limitado por duas entradas
function rangeOfNumbers(startNum, endNum) {
    if(endNum<startNum){
      return [];
    }else{
      const numeros = rangeOfNumbers(startNum, endNum-1);
      numeros.push(endNum);
      return numeros;
  
    }
  };
  console.log(rangeOfNumbers(2,7));