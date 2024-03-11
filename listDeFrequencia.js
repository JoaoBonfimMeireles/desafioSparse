// o Array.from cria um nova instancia (seria um novo array do zero) que irá retornar undefined
// o {length: 100} é o primeiro argumento passado no novo array, definindo o comprimento do mesmo
// o () => (0) é o segundo argumento do novo array e é um callback que é chamado para cada elemento do array, deixando o valor de todos em 0 
// forEach ele serve para passar uma função para cada elemento do array
// array[addition] é o segundo argumento que serve para ir no const array em sua casa pré definida pelo valor do primeiro argumento



function countingSort(arr) {
    const array = Array.from({ length: 100 }, () => (0));

    arr.forEach((addition) => {
        array[addition] = (array[addition] || 0) + 1;
    })

    return array
    console.log(array);
}

                            ////////////////////////////////////         ouuuu         ////////////////////////////////////////
//o ... é um operado de propagação e serve para espalhar o new Array (ele basicamente cria um novo array)
// o new Array(100) é um construtor e ele irá criar um array com 100 valores dentro, todos como undefined
// o fill preenche todos os valores do array com um valor pré definido


function countingSort(arr) {
    const array = [...new Array(100)].fill(0);

    arr.forEach((addition) => {
        array[addition] = (array[addition] || 0) + 1;
    })

    return array
    console.log(array);
}

// esse função serve para ver se existe determinado valor dentro do array e se exister o valor, será somado +1 na sua casa correspondente

