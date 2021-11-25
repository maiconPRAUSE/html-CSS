
function somar(){
    let tn1 = window.document.getElementById('valor1')
    let tn2 = window.document.getElementById('valor2')
    let res = window.document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    soma = n1 + n2
    res.innerText += `${soma}`

}

