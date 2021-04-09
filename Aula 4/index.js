let numeroAnalisado = 21;
let parametroFinal = numeroAnalisado + 10
let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;


while(numeroAtual <= parametroFinal)  {

    console.log(numeroAtual);

     numeroAnterior1 = numeroAnterior2;

    numeroAnterior2 = numeroAtual;

    numeroAtual = numeroAnterior1 + numeroAnterior2;
}

if (numeroAtual === numeroAnalisado) {
    console.log('O número', numeroAnalisado,  'está dentro do conjunto de numeros que compõe a sequência de fibonacci');
} 
else {
    console.log('O número', numeroAnalisado, 'não está dentro do conjunto de numeros que compõe a sequência de fibonacci');
}