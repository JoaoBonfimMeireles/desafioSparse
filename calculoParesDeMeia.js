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