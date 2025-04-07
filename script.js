let input = document.querySelector('input')

function add(ele){
    input.value += ele
}

function clearVal(){
    input.value = ''
}

function deleteVal(){
    input.value = input.value.slice(0,input.value.length - 1)
}

function evaluateVal(){
    input.value = eval(input.value)
}