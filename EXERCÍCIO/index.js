// const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 0];
// for (let i = 0; i < listaDeValores.length; i++) {
// console.log(listaDeValores[i]);
// } 

// PARA SEXTA FEIRA!

/**
 * 1) Percorram a lista listaDeValores e, para cada elemento, multiplique esse elemento pelo próximo da lista.
 * Note que: ao chegar no final da lista, não há um próximo elemento. Nesse caso, multiplique o último elemento pelo primeiro.
 * Salve os resultados das multiplicações num outro array e no final do programa, imprima a lista final na tela.
 */

// Resolução atividade (1)
// const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 25, 8, 100, 12, 232, 38, 52, 778, 639, 38, 0];
// let listaDeMultiplicacao = new Array();
 
// for (i = 0; i < listaDeValores.length; i++){
//  if (i < listaDeValores.lenght-1){
//     listaDeMultiplicacao.push( listaDeValores[0+i] * listaDeValores[1+i] );
// }else{
//     listaDeMultiplicacao.push(0);
// }
// }
// console.log(listaDeMultiplicacao)

//console.log (listaDeValores.length)

 const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 25, 8, 100, 12, 232, 38, 52, 778, 639, 38, 0];
 let Multiplicacao = new Array();
 
 for (i = 0; i < listaDeValores.length; i++){
  if (i < (listaDeValores.length - 1)){
      Multiplicacao.push( listaDeValores[0+i] * listaDeValores[1+i] );
 }else{
     Multiplicacao.push(0);
 }
 }
 console.log(Multiplicacao)

 /**
 * 2) Dada uma palavra inserida pelo usuário (vocês, no caso) imprima na tela a quantidade de letras dessa palavra e a 
 * quantidade de vogais.
 * 
 * ex: 
 * const texto = "um texto qualquer";
 *  for (let i = 0; i < texto.length; i++) {
 *    console.log(texto[i]);
 *  }
 */

// const PalavraAleatoria = "Bofete Boboca";
// const ListaPalavra = (Array.from(PalavraAleatoria));

//    console.log(ListaPalavra) 
//    console.log(typeof ListaPalavra)  
//    console.log(ListaPalavra.length) 
//    console.log(typeof ListaPalavra[6]) 

const PalavraAleatoria = "Bofete";
const ListaLetras = (Array.from(PalavraAleatoria));
const ListaVogais = [];
let quantasVogais = 0;

      ListaVogais.push(quantasVogais);
    

      function analisedetexto() {
             for (i = 0; i < ListaLetras.length; i+1){
            if(ListaLetras[i] === 'a'|| ListaLetras[i] === 'A'|| ListaLetras[i] === 'e'|| ListaLetras[i] === 'E'|| ListaLetras[i] === 'i'||
            ListaLetras[i] === 'I'|| ListaLetras[i] === 'o'|| ListaLetras[i] === 'O'|| ListaLetras[i] === 'u' || ListaLetras[i] === 'U') {
                quantasVogais++
            }
            return quantasVogais
        }
    
    }
    
console.log(ListaLetras.length)
console.log(ListaVogais.length)
