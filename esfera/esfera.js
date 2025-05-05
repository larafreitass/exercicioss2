function calcularVolumeEsfera(raio) {
    const pi = 3.14159;
    const volume = (4.0 / 3) * pi * Math.pow(raio, 3); // Cálculo do volume
    return volume;
}

const raio = parseFloat(prompt("Digite o valor do raio da esfera:"));

const volume = calcularVolumeEsfera(raio);

console.log(`VOLUME = ${volume.toFixed(3)}`); //