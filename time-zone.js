// o split serve para separa o objeto seguindo alguns criterios (/[:\s]/) que seria com a expressão [:\s]
    // o / serve para delimitar a expressão
    // [] é somente por ser uma expressão
    // : irá separar sempre que ver ":" no objeto/array
    // \s irá separa sempre que ver um espaço " " no objeto/array
// o parseInt serve para transformar o dado string em number
// includes ele caça no objeto termos especificos
// toString tranforma em string
// padStart ele preenche a string com determinados caracteres até atingir a base, sempre colocando do lado esquerdo

function timeConversion(s) {
    const partes = s.split(/[:\s]/);
    let hora = parseInt(partes[0]);
    const minutos = parseInt(partes[1]);
    const segundos = parseInt(partes[2]);

    if (s.includes("PM") && hora < 12) {
        hora += 12;
    } else if (s.includes("AM") && hora === 12) {
        hora = 0;
    }

    return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
