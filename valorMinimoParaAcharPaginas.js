function pageCount(n, p) {
    // Calcula a distância do início do livro até a página desejada
    const fromStart = Math.floor(p / 2);
    
    // Calcula a distância do final do livro até a página desejada
    const fromEnd = Math.floor(n / 2) - fromStart;

    // Retorna o menor número de viradas de página
    return Math.min(fromStart, fromEnd);
}