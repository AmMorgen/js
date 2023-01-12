
//gerando numeros inteiros aleatorios
function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }
arr = []
for(let i = 0; i < 5; i++){
    arr[i] = randomWholeNum();
}
  

  console.log(arr);