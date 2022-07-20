let main=document.querySelector('.main')
let result = document.getElementById('result')
let teng = document.getElementById('teng')
let open=document.getElementById('open')
let close=document.getElementById('close')
let harf=document.querySelector('h2')
console.log(harf)





result.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        e.preventDefault()
        
        let x = result.value

        let y = eval(x);

        result.value = y

        return y
    }
})

function display(val) {

    result.value += val

    return val

}

function solve() {

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

function clearScreen() {

    return result.value = ''

}