function conversorDolar(){
    valor_converter = prompt('Digite um valor em real:')
    dolar = 6.19
    alert('R$' + valor_converter + ' é $' + (valor_converter * dolar).toFixed(2))
}
function conversorEuro(){
    valor_converter = prompt('Digite um valor em real:')
    euro = 5.89
    alert('R$' + valor_converter + ' é €' + (valor_converter * euro).toFixed(2))
}

