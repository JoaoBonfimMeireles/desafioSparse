// forEach cria uma função para cada valor do array ar.
// esse if serve para ver se tem alguma contagem para o valor atual sockCounts[color], se tiver ele acrescente ++ = 1
// else vê se não tem contagem nenhuma ele inicia com 1
// sockCounts[color]++; colocando o sockCounts, ira atribuir o valor ao objeto correspondente
// Object.values(sockCounts), irá trazer o valor valor do objeto = Object.values, já que ao usar o forEach o valor fica, ex: {10: 3, 20: 2}
// Math.floor é um metodo do Math para arredondar o valor para baixo
// count vai percorrer todos os valores do arrai sockCounts
// += irá atribuir o valor ao pairs


function sockMerchant(n, ar) {
    let pairs = 0;
    const sockCounts = {};

    ar.forEach(color => {
        if (sockCounts[color]) {
            sockCounts[color]++;
        } else {
            sockCounts[color] = 1;
        }
    });

    Object.values(sockCounts).forEach(count => {
        pairs += Math.floor(count / 2);
    });

    return pairs;
}


 ///////////////////////////////////////// MEU CODIGO ////////////////////////////////////////////////////////////

// O Array.from serve para criar uma nova instancia de array
// { length: n } determina a quantidade de valores do array que serão criandas, usando o n como base
// () => essa arrow function serve para determinar o valor inicial de cada valor do array (0)
// forEach cria uma função para cada valor do array ar.
// (add) é o primeiro argumento do metodo
// array[add] irá atribuir o valor ao dado do array com a determinação da casa pelo argumento [add]
// += serve para incrementar o valor da operação subjacente 
// Math.floor é um metodo do Math para arredondar o valor para baixo
// element / 2 vai pegar o valor do array correspondente e dividir

function sockMerchant(n, ar) {
    const array = Array.from({ length: n}, () => (0));
    let valor = 0;
    
    ar.forEach((add) => {
        array[add] = (array[add] || 0) + 1;
    })
    
    array.forEach((element) => {
        if (element >= 2) {
            valor += Math.floor(element /2);
        }
    })
    
    
    return valor
   console.log(array)

}


// essa função serve para contar a quantidade de pares de meia.