const calcularConsumo = (distancia, combustivel) => {
    const consumoMedio = distancia / combustivel;
    return consumoMedio.toFixed(3) + " km/l";
};

const entrada1 = [500, 35.0];
const entrada2 = [2254, 124.4];
const entrada3 = [4554, 464.6];
// Realizando os cálculos e exibindo os resultados
console.log(calcularConsumo(...entrada1)); 
console.log(calcularConsumo(...entrada2)); 
console.log(calcularConsumo(...entrada3)); 