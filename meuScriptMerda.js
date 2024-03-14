//timeZone

function timeConversion(s) {

    const partes = s.split(' ');
    const horasMinutos = partes[0].split(':');
    const horas = parseInt(horasMinutos[0]);
    const minutos = parseInt(horasMinutos[1]);
    const minutosFormatados = minutos < 10 ? "0" + minutos : minutos.toString();
    const segundos = parseInt(horasMinutos[2]);
    const segundosFormatados = segundos < 10 ? "0" + segundos : segundos.toString();
    
    if (s.includes("PM") && horas < 12) {
        return ((horas + 12) + ":" + minutosFormatados + ":" + segundosFormatados)
    } else if (s.includes("AM") && horas === 12) {
        return ((horas = "00") + ":" + minutosFormatados + ":" + segundosFormatados)
    }
}


//existencia De Elemento Array

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

// quantidade de pares de meia

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