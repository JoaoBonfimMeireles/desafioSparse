// new Set serve para criar uma nova intancia (armazena os valores de forma unica e sem duplicata com objeto)
    // new cria uma nova intancia (objeto ou função contrutora)
    // Set serve para trazer o valor unico e sem duplicata
// replace serve para trocar os valores dentro da array
    // ^ é um caracter de negação que indica que tudo fora de a-z não deve estar no array = tira
    // g serve para indicar que essa alteração é global
    // '' tira tudo por espaço também

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
// toLowerCase serve para deicar letras no minusculo
// split é para separar as palavras 
    // O \s é para divide os caracteres por espaço "expressão regular"
    // O * serve para indicar que isso pode acontecer mais de uma vez "expressão regular"
// forEach cria uma função para cada elemento do array
    // [letras] é o primeiro parametro do metodo
// includes é para ver se exite o valor dentro do array
// Object.values serve para tranformar o objeto como um "array" e pega os valores
// every serve para ver todos os valores do array

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


// esse codigo serve para ver se as frases do S tem todas as letras do alfabeto
