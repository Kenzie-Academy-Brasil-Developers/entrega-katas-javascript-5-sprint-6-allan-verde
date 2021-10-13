// implemente aqui as funções de teste

// 1
function testeReverseString1 () {
    let result = reverseString("Kenzie Academy")
    let expected = "ymedacA eizneK"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2 () {
    let result = reverseString()
    let expected = 'otebaflA'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString (paramentro = 'Alfabeto') {
    let resultado = paramentro.split('').reverse().join('')
    return resultado
}
testeReverseString1 ()
testeReverseString2 ()

// 2
function testReverseSentence1 () {
    let result = reverseSentence ()
    let expected = 'dogs likes bob'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)    
}
testReverseSentence1()

function testReverseSentence2 () {
    let result = reverseSentence ('A grama é amarga')
    let expected = 'amarga é grama A'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)    
}
testReverseSentence2()

function reverseSentence (paramentro = 'bob likes dogs') {
    let resultado = paramentro.split(' ').reverse().join(' ')
    return resultado
}

// 3
function testMinimumValue1 () {
    let result = minimumValue ([3, 2, 5, 4, 9, 8, 7])
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1 ()

function testMinimumValue2 () {
    let result = minimumValue ([49.95, (2**6), 49.9, (100 / 2)])
    let expected = 49.9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2 ()

function minimumValue (paramentro) {
    let resultado = paramentro[0]
    for (let index = 0; index < paramentro.length; index++) {
        if (paramentro[index] < resultado) {
            resultado = paramentro[index]
        }
    }
    return resultado
}

// 4
function testMaximumValue1 () {
    let result = maximumValue ([59, 103, 45, 99, 103, 88, 58, 45])
    let expected = 103
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1 ()

function testMaximumValue2 () {
    let result = maximumValue ([3.1415, 3, 3.5, 3.9])
    let expected = 3.9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2 ()

function maximumValue (paramentro) {
    let resultado = paramentro[0]
    for (let index = 0; index < paramentro.length; index++) {
        if (paramentro[index] > resultado) {
            resultado = paramentro[index]
        }
    }
    return resultado
}

// 5
function testCalculateRemainder1 () {
    let result = calculateRemainder (105, 5)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1 ()

function testCalculateRemainder2 () {
    let result = calculateRemainder (100, 3)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2 ()

function calculateRemainder (dividendo = 5, divisor = 2) {
    return dividendo % divisor
}

// 6
function testDistinctValues1 () {
    let result = distinctValues ('1 3 5 3 7 3 1 1 5')
    let expected = '1 3 5 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1 ()

function testDistinctValues2 () {
    let result = distinctValues ('1 1 2 4 6 1 2 7 4 3 5 7 2 4 5 3 2 4 5 4 7 5 6 5 3')
    let expected = '1 2 3 4 5 6 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues2()

function distinctValues (paramentro) {
    let arrResul = []
    let arrEntrada = paramentro.split(' ').sort((a, b) => a - b)
    for (let index = 0; index < arrEntrada.length; index++) {
        if (arrResul.includes(arrEntrada[index]) === false) {
            arrResul.push(arrEntrada[index])
        }
    }
    return arrResul.join(' ')
}

// 7
function testCountValues1 () {
    let result = countValues ('1 3 5 3 7 3 1 1 5')
    let expected = '1(3) 3(3) 5(2) 7(1)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1 ()

function testCountValues2 () {
    let result = countValues ('25 50 75 100 100 100 50 75 50 100 50 25')
    let expected = '25(2) 50(4) 75(2) 100(4)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues2 ()

function countValues (paramentro) {
    let resultado = []
    let arrValorUnico = []
    let arrEntrada = paramentro.split(' ')
    for (let index of arrEntrada) {
        if (arrValorUnico.includes(index) === false) {
            arrValorUnico.push(index)
        }
    }
    for (let index of arrValorUnico) {
        let contadorRepeticao = 0
        for (let ondex of arrEntrada) {
            if (index === ondex) {
                contadorRepeticao++
            }
        }
        resultado.push(`${index}(${contadorRepeticao})`)
    }
    return resultado.join(' ')
}

// 8 -> não sei ainda