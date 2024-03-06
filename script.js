// usando o forEash e map// ele percorre o array e trás o valor das pesquisar do queries feitas na strings (somente o valor da pesquisa mesmo) 

// function matchingStrings(strings, queries) {
//     const occurrenceCount = {};

//     queries.forEach(query => occurrenceCount[query] = 0);

//     strings.forEach(string => {
//         if (occurrenceCount.hasOwnProperty(string)) {
//             occurrenceCount[string]++;
//         }
//     });
//     return queries.map(query => occurrenceCount[query]);

//     console.log(occurrenceCount)
// }


// Usei o metodo forEach para percorrer todos os dados da array e realizar a função de colocar +1 para cada vez que aparece
// usei o metodo Object.keys para pegar o nome do objeto ex: [2: 1, 5: 3 ...] ele trás somente o 2 e 5 ... sempre na ordem crescente
// User o metodo find() que ele trás o valor do primeiro elemento que atende a função do metodo

function lonelyinteger(a) {
    const calculador = {};

    a.forEach(numero => {
        calculador[numero] = (calculador[numero] || 0) + 1;
    });

    const valor = Object.keys(calculador).find((element) => calculador[element] === 1)

    return valor

    console.log(a.length);
    console.log(a.join(" "));
}
