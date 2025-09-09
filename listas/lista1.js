// Exercício 1
console.log('=== Exercício 1 ===');
let nome = prompt('Nome:');
let altura = parseFloat(prompt('Altura (cm):'));
let peso = parseFloat(prompt('Peso (kg):'));

function calcularIMC(altura, peso) {
    altura = altura / 100;
    return peso / (altura ** 2);
}

function classificaIMC(imc) {
    if (imc < 16) return 'Baixo peso muito grave';
    else if (imc < 17) return 'Baixo peso grave';
    else if (imc < 18.5) return 'Baixo peso';
    else if (imc < 25) return 'Peso normal';
    else if (imc < 30) return 'Sobrepeso';
    else if (imc < 35) return 'Obesidade grau I';
    else if (imc < 40) return 'Obesidade grau II';
    else return 'Obesidade grau III';
}

const imc = calcularIMC(altura, peso).toFixed(2);
const classificacao = classificaIMC(imc);
console.log(`${nome} possui IMC igual a ${imc}, classificado como: ${classificacao}`);


// Exercício 2
console.log('\n=== Exercício 2 ===');
let idade = parseInt(prompt('Idade:'));

function faixaEtaria(idade) {
    if (idade < 15) return 'Criança';
    else if (idade < 30) return 'Jovem';
    else if (idade < 60) return 'Adulto';
    else return 'Idoso';
}

console.log(`Faixa etária: ${faixaEtaria(idade)}`);


// Exercício 3
console.log('\n=== Exercício 3 ===');
let nota1 = parseFloat(prompt('Nota 1:'));
let nota2 = parseFloat(prompt('Nota 2:'));
let nota3 = parseFloat(prompt('Nota 3:'));

function mediaPonderada(n1, n2, n3) {
    return ((2 * n1) + (5 * n2) + (3 * n3)) / 10;
}

function classificaMedia(media) {
    if (media < 5) return 'F';
    else if (media < 6) return 'E';
    else if (media < 7) return 'D';
    else if (media < 8) return 'C';
    else if (media < 9) return 'B';
    else return 'A';
}

const media = mediaPonderada(nota1, nota2, nota3).toFixed(2);
console.log(`Média: ${media} | Classificação: ${classificaMedia(media)}`);


// Exercício 4
console.log('\n=== Exercício 4 ===');
let rastreamento = prompt('Deseja rastreamento? S-Sim | N-Não').toUpperCase();
let taxa = (rastreamento === 'S') ? 200 : 0;

let regiao = parseInt(prompt('Região: 1-Sul | 2-Sudeste | 3-Centro-Oeste'));
let distancia = parseFloat(prompt('Distância (km):'));
let nPecas = parseInt(prompt('Número de peças:'));

function calculaFrete(nPecas, regiao) {
    let valorPorPeca = 0;
    if (regiao === 1) {
        valorPorPeca = (nPecas <= 1000) ? nPecas * 1 : (1000 * 1) + ((nPecas - 1000) * 0.9);
    } else if (regiao === 2) {
        valorPorPeca = (nPecas <= 1000) ? nPecas * 1.2 : (1000 * 1.2) + ((nPecas - 1000) * 0.88);
    } else {
        valorPorPeca = (nPecas <= 1000) ? nPecas * 1.3 : (1000 * 1.3) + ((nPecas - 1000) * 0.87);
    }
    return valorPorPeca;
}

const valorPecas = calculaFrete(nPecas, regiao);
const totalFrete = taxa + valorPecas + distancia;

console.log(`Taxa de rastreamento: ${taxa}`);
console.log(`Valor das peças: ${valorPecas}`);
console.log(`Valor por km (distância): ${distancia}`);
console.log(`Total: ${totalFrete}`);


// Exercício 5
console.log('\n=== Exercício 5 ===');
let turno = prompt('Turno (M/V/N):').toUpperCase();
let categoria = prompt('Categoria (G/O):').toUpperCase();
let numHorasTrabalhadas = parseInt(prompt('Horas trabalhadas:'));
let salarioMin = parseFloat(prompt('Salário mínimo estadual:'));

function valorHoraTrabalhada(turno, categoria, salarioMin) {
    if (categoria === 'G') return 0.04 * salarioMin;
    else if (turno === 'N') return 0.02 * salarioMin;
    else return 0.01 * salarioMin;
}

function valorAuxilioAlimentacao(salario) {
    if (salario <= 800) return salario * 0.25;
    else if (salario <= 1200) return salario * 0.20;
    else return salario * 0.15;
}

const valorHora = valorHoraTrabalhada(turno, categoria, salarioMin);
const salarioInicial = valorHora * numHorasTrabalhadas;
const auxilio = valorAuxilioAlimentacao(salarioInicial);
const totalFinal = salarioInicial + auxilio;

console.log(`Horas trabalhadas: ${numHorasTrabalhadas}`);
console.log(`Valor hora: ${valorHora.toFixed(2)}`);
console.log(`Salário inicial: ${salarioInicial.toFixed(2)}`);
console.log(`Auxílio alimentação: ${auxilio.toFixed(2)}`);
console.log(`Total: ${totalFinal.toFixed(2)}`);


// Exercício 6
console.log('\n=== Exercício 6 ===');
let n1 = parseFloat(prompt('Primeiro número:'));
let n2 = parseFloat(prompt('Segundo número:'));
let op = prompt('Operação (soma/subtrai):').toLowerCase();

function somaOuSubtrai(n1, n2, operacao) {
    return operacao === 'soma' ? n1 + n2 : n1 - n2;
}

console.log(`Resultado: ${somaOuSubtrai(n1, n2, op)}`);


// Exercício 7
console.log('\n=== Exercício 7 ===');
let data = prompt('Digite a data (dd/mm/aaaa):');
let [dia, mes, ano] = data.split('/').map(x => parseInt(x));

function determinaMes(mes) {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[mes - 1] || 'Mês inválido';
}

console.log(`${dia} de ${determinaMes(mes)} de ${ano}`);
