//


function pangrams(s) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const letrasFrase = new Set(s.toLowerCase().replace(/[^a-z]/g, ''));
    
    for (let letra of alfabeto) {
        if (!letrasFrase.has(letra)) {
            return "not pangram";
        }
    }
    
    return "pangram";
}


//////////////////////////////////////////// o que eu fiz não ficou tão ruim //////////////////////////////////////////////////////



function pangrams(s) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const minusculo = (s.toLowerCase().split(/\s*/));
    const words = alfabeto.split('');

    const capitador = {};
    
    words.forEach(letras => {
        capitador[letras] = minusculo.includes(letras)
    })
    
    if (Object.values(capitador).every(valor => valor === true)){
        return "pangram"
    }else {
        return "not pangram"
    }
    
    console.log('1', words)
    console.log('2', capitador)
    console.log('3', minusculo)
}