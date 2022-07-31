// btn.addEventListener('click', IMC)
// let btn = document.getElementById('btn')
document.getElementById('btn').addEventListener('click',
    function IMC() {
        /*Nome-seu IMC(kg/m ao quadrado) é -valor-peso */
        const quest1 = document.getElementById('input_quest1')
        const quest2 = document.getElementById('input_quest2')
        const quest3 = document.getElementById('input_quest3')
        const result = document.getElementById('result')
        const nome = quest1.value
        let altura = Number(quest2.value)
        let peso = Number(quest3.value)
        let soma = peso / altura ** 2
        if (validacao()) {
            if (soma < 18.5) {
                //magreza
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}. Você esta magro!`)
            } else if (soma >= 18.5 && soma <= 24.9) {
                //saudável
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}. Você esta saudável!`)
            } else if (soma >= 25.0 && soma <= 29.9) {
                //sobrepeso
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}<br>Você esta com sobrepeso!`)
            } else if (soma >= 30.0 && soma <= 34.9) {
                //obesidade grau 1
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}. Você esta com obesidade grau 1!`)
            } else if (soma >= 35.0 && soma <= 39.9) {
                //obesidade grau 2
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}. Você esta com obesidade grau 2!`)
            } else {
                //obesidade grau 3
                result.innerHTML = (`${nome}, seu IMC é ${soma.toFixed(2)}. Você esta com obesidade grau 3!`)
            }
        } else {
            alert('[Erro]:Preencha os campos!')
        }
        function validacao() {
            if (nome != '' && peso != '' && altura != '') {
                return true
            } else {
                return false
            }
        }
        // console.log(validacao())
    }
)

