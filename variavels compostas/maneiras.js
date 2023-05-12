var valores = [5,6,2,1,7,8]
valores.sort() //vai deixar os valores em ordem 

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[4])
console.log(valores[5])
*/
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos}     tem o valor ${valores[pos]}`)
} 
*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}