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