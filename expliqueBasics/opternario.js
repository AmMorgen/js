const idade = 20; //exemplo de utilização ternaria
const podeBeber = idade >= 18 ? 'pode beber':'Não pode beber';
console.log(podeBeber);

function checkEqual(a, b) {
    return a==b ? "Equal": "Not Equal";
   }
   
   checkEqual(1, 2);


   resultado = checkEqual(1,2);
   console.log(resultado);


   //multiplas operaçõpes ternarias

   //verificar se um numero é negativo, positivo ou zero
   function checkSign(num) {
    return (num >0) ? "positive":(num<0) ? "negative": "zero"
  }
  
  checkSign(10);