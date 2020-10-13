

function calcularNumerico() {

    let decimal = document.getElementById('valorNumerico').value

    let binary = parseInt( decimal, 10 ).toString( 2 );

    if(decimal == '') {
        alert('digite algo válido')
    }

    document.getElementById('divResultadoConversao').innerHTML = `${decimal} convertido em binário é ${binary}`

    
}

function calcularBinario() {

    let binario = document.getElementById('valorBinario').value

    let decimal = parseInt(binario, 2);

    if(decimal == '') {
        alert('digite algo válido')
    }
     
    document.getElementById('div-resultadoConversao').innerHTML = `${binario} convertido em binário é ${decimal}`

}










     
    // alert(decimal);