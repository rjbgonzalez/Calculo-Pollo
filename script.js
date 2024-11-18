function calcularTrozos() {
    const pesoPolloTrozos = parseFloat(document.getElementById('pesoPolloTrozos').value);
    if (isNaN(pesoPolloTrozos) || pesoPolloTrozos <= 0) {
        alert('Por favor, ingrese un peso válido.');
        return;
    }

    const resultado = calcularIngredientes(pesoPolloTrozos, 'trozos');

    document.getElementById('resultadoAguaTrozos').textContent = `Agua necesaria: ${resultado.agua}`;
    document.getElementById('resultadoMarinadorTrozos').textContent = `Marinador necesario: ${resultado.marinador}`;
    document.getElementById('resultadoBolsasTrozos').textContent = `Número de bolsas: ${resultado.bolsas}`;
    document.getElementById('resultadoTrozos').textContent = `Cantidad de trozos por bolsa: ${resultado.trozosPorBolsa}`;
}

function calcularPorcionado() {
    const pesoPolloPorcionado = parseFloat(document.getElementById('pesoPolloPorcionado').value);
    if (isNaN(pesoPolloPorcionado) || pesoPolloPorcionado <= 0) {
        alert('Por favor, ingrese un peso válido.');
        return;
    }

    const resultado = calcularIngredientes(pesoPolloPorcionado, 'porcionado');

    document.getElementById('resultadoAguaPorcionado').textContent = `Agua necesaria: ${resultado.agua}`;
    document.getElementById('resultadoMarinadorPorcionado').textContent = `Marinador necesario: ${resultado.marinador}`;
    document.getElementById('resultadoBolsasPorcionado').textContent = `Número de bolsas: ${resultado.bolsas}`;
}

function calcularIngredientes(pesoPollo, tipo) {
    const porcentajeAgua = 0.118;
    const porcentajeMarinador = 0.0145;

    const cantidadAgua = pesoPollo * porcentajeAgua;
    const cantidadMarinador = pesoPollo * porcentajeMarinador;
    const pesoTotal = pesoPollo + cantidadAgua;
    const bolsas = Math.ceil(pesoTotal / 4.5);

    if (tipo === 'trozos') {
        const trozosPorBolsa = pesoTotal / bolsas;
        return {
            agua: cantidadAgua.toFixed(3) + ' kg',
            marinador: cantidadMarinador.toFixed(3) + ' kg',
            bolsas: bolsas,
            trozosPorBolsa: trozosPorBolsa.toFixed(3) + ' kg'
        };
    } else {
        return {
            agua: cantidadAgua.toFixed(3) + ' kg',
            marinador: cantidadMarinador.toFixed(3) + ' kg',
            bolsas: bolsas
        };
    }
}
