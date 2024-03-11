// o for é usado para criar um looping, onde a consição do i é igual a 0, e o i é < que n, até o i chegar a n, vai somando ++
// o [i][i] duplo no lugar do [i] único, serve para acessar a linha/coluna tipo XY
// o [i][n - 1 - i] acessa a primeira linha e o [n - 1 - i] vai acessar a ultima coluna
// Math.abs() retorna o numero absoluto do valor, se for negativo fica positivo

function diagonalDifference(arr) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        diagonal1 += arr[i][i];
    }

    for (let i = 0; i < n; i++) {
        diagonal2 += arr[i][n - 1 - i];
    }

    console.log("Diagonal 1:", diagonal1);
    console.log("Diagonal 2:", diagonal2);
    
    return Math.abs(diagonal1 - diagonal2);
}

// ele calcula os valores de forma diagonal, da esquerda para a direta e da direita para a esquerda e subtrai pela quantidade de letras. 